# dylanfreedman.com

The main source code for [dylanfreedman.com](https://dylanfreedman.com/).

This project uses a custom framework to render Svelte as static, optimized HTML.

## Installing

Install dependencies

```sh
npm i
```

Ensure you have [GraphicsMagick](http://www.graphicsmagick.org/) installed. On Mac OS, you can use [Homebrew](http://brew.sh/): `brew install graphicsmagick`.

## Usage

### Dev server

Load the dev server at [localhost:8080](http://localhost:8080/):

```sh
npm run dev
```

### Images

Any time new images need to be added, ensure high-quality PNGs are placed in the top-level `images` file in a sub-folder named after the corresponding project. Then, run the compress images script:

```sh
npm run compress-images
```

This will compress all the images into optimized, resized JPGs in `public/assets/images` and output the new dimensions of all the images in a JSON file that gets read into the static site generator.

These compressed JPGs are versioned and source-controlled, so the script needs only be run when images are added or modified.

### Building

To build the productionized version of the website, run `npm run build`. The `public` folder will contain the optimized version of the website.

After committing to source control, this version will automatically get uploaded as the main version.
