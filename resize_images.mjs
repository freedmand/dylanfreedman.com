import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import ImageminGm from "imagemin-gm";
const imageminGm = new ImageminGm();
import sizeOf from "image-size";

import { fstat, lstatSync, readdirSync, renameSync, writeFileSync } from "fs";
import { join, extname, basename } from "path";

// Adapted from https://stackoverflow.com/a/24594123
const isDirectory = (source) => lstatSync(source).isDirectory();
const getDirectories = (source) =>
  readdirSync(source).filter((name) => isDirectory(join(source, name)));

const INPUT_DIR = "images/";
const OUTPUT_DIR = "public/assets/images/";

const allDimensions = {};

async function minimize(dir) {
  const outputDir = `${OUTPUT_DIR}${dir}/`;
  await imagemin([`${INPUT_DIR}${dir}/*.{jpg,png}`], {
    destination: outputDir,
    plugins: [
      imageminGm.resize({ height: 260 }),
      imageminGm.convert("jpg"),
      imageminJpegtran(),
    ],
  });
  // Rename files to jpg afterwards
  // and print dimensions
  const files = readdirSync(outputDir);
  const logged = {};
  for (const fn of files) {
    const extension = extname(fn);
    const base = basename(fn, extension);
    const newFn = join(outputDir, base + ".jpg");
    if (extension != ".jpg") {
      renameSync(join(outputDir, fn), newFn);
    }
    const dimensions = await sizeOf(newFn);
    // Write the dimensions to file
    allDimensions[dir] = {
      ...(allDimensions[dir] || {}),
      [base]: dimensions,
    };
  }
}

Promise.all(getDirectories(INPUT_DIR).map(minimize)).then(() => {
  writeFileSync(`dimensions.json`, JSON.stringify(allDimensions, null, 2));

  console.log("DONE");
});
