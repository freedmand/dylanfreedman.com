import { gen } from "./gen";
import path from "path";
import fs from "fs";

const staticDir = path.join(__dirname, "static");
const buildDir = path.join(__dirname, "..", "build");

const html = gen();

// Clear build dir
if (fs.existsSync(buildDir)) {
  fs.rmSync(buildDir, { recursive: true, force: true });
}
fs.mkdirSync(buildDir);

// Copy static files into build dir
fs.cpSync(staticDir, buildDir, { recursive: true });

// Write index.html
const indexPath = path.join(buildDir, "index.html");
fs.writeFileSync(indexPath, html, { encoding: "utf-8" });
