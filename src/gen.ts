import { h } from "hastscript";
import { toHtml } from "hast-util-to-html";
import { commaSep } from "./util";
import { generate, Dimension, NumberNode, Atrule } from "css-tree";
import {
  classSelector,
  combinator,
  comma,
  declaration,
  dimension,
  fn,
  fontFace,
  hash,
  identifier,
  maxWidthRule,
  minWidthRule,
  newClass,
  number,
  pseudoSelector,
  rule,
  selector,
  selectors,
  string,
  stylesheet,
  typeSelector,
  url,
} from "./css";
import { stripZeros } from "./helpers";
import { Child, Element } from "hastscript/lib/create-h";

function size(px: number): Dimension | NumberNode {
  if (px === 0) return number("0");
  return dimension(stripZeros((px / 16).toFixed(4)), "rem");
}

const fontFamilyName = "Berkeley Mono Variable";
const bgColor = hash("222025");
const fgColor = hash("fff"); // white
const grayColor = hash("b9b9b9");
const accentBg = hash("b4aa82");
const accentFg = hash("000"); // black

const imgDim = 173;
const imgBorder = 1;
const projMargX = 47;
const bodyPadX = 96;
const overlayBorder = 1;

const smallFontSize = size(14);
const normalWeight = number("100");
const bodyPaddingY = size(30);
const bodyPaddingMobileY = size(34);
const bodyPaddingX = size(bodyPadX);
const bodyPaddingMobileX = size(38);
const projectMarginX = size(projMargX);
const projectMarginY = size(60);
const imgSize = size(imgDim);

const introClass = newClass("intro");
const projectClass = newClass("project");
const projectsClass = newClass("projects");
const overlayClass = newClass("overlay");
const nameClass = newClass("name");
const typeClass = newClass("type");

const breakpoints: Atrule[] = [];
const maxCols = 6;

const eps = 0.01;
function calcWidth(n: number): number {
  return bodyPadX * 2 + (imgDim + imgBorder) * n + projMargX * (n - 1) + eps;
}

for (let n = 3; n <= maxCols; n++) {
  const dim = calcWidth(n);
  breakpoints.push(
    minWidthRule(
      size(dim),
      rule(selector(typeSelector("html")), declaration("max-width", size(dim)))
    )
  );
}

function link(href: string, ...children: Child[]): Element {
  return h("a", { href, target: "_blank" }, ...children);
}

function project(
  name: string,
  type: string,
  img: string,
  href: string
): Element {
  return h(
    "div",
    { class: projectClass },
    link(
      href,
      h("img", { src: `/projects/${img}.png`, alt: name }),
      h("div", { class: overlayClass }),
      h("div", { class: nameClass }, name),
      h("div", { class: typeClass }, type)
    )
  );
}

export function gen(): string {
  const tree = h(
    "html",
    { lang: "en" },
    // Head section
    h(
      "head",
      null,
      h("meta", {
        charset: "utf-8",
      }),
      h("meta", {
        name: "description",
        content:
          "I'm Dylan, a full-stack software engineer, journalist, and AI researcher. I strive to code new tools for journalists and the public.",
      }),
      h("link", {
        rel: "icon",
        href: "/favicon.png",
      }),
      h("meta", {
        name: "viewport",
        content: commaSep("width=device-width", "initial-scale=1"),
      }),
      h(
        "style",
        {
          type: "text/css",
        },
        generate(
          stylesheet(
            fontFace(
              declaration(
                "font-family",
                string(fontFamilyName),
                declaration(
                  "src",
                  url(
                    "https://freedmand-assets.pages.dev/fonts/BerkeleyMonoVariable-Regular.woff2"
                  ),
                  fn("format", string("woff2")),
                  comma(),
                  url(
                    "https://freedmand-assets.pages.dev/fonts/BerkeleyMonoVariable-Regular.woff"
                  ),
                  fn("format", string("woff"))
                )
              )
            ),
            rule(
              selector(typeSelector("body")),
              declaration(
                "font-family",
                string(fontFamilyName),
                comma(),
                identifier("monospace")
              ),
              declaration("background", bgColor),
              declaration("color", fgColor),
              declaration("padding", bodyPaddingY, bodyPaddingX),
              declaration("margin", size(0), size(0)),
              declaration("font-size", dimension("16", "px"))
            ),
            rule(
              selector(typeSelector("header")),
              declaration("display", identifier("flex")),
              declaration("align-items", identifier("center")),
              declaration("flex-wrap", identifier("wrap"))
            ),
            rule(
              selector(typeSelector("h1")),
              declaration("text-transform", identifier("uppercase")),
              declaration("padding-top", size(5)),
              declaration("padding-right", size(64)),
              declaration("flex-grow", number("1")),
              declaration("font-size", size(34))
            ),
            rule(
              selector(classSelector(introClass)),
              declaration("line-height", size(20)),
              declaration("font-size", smallFontSize),
              declaration("font-weight", normalWeight)
            ),
            rule(
              selector(
                classSelector(introClass),
                combinator(),
                typeSelector("br")
              ),
              declaration("display", identifier("none"))
            ),
            rule(
              selector(classSelector(projectsClass)),
              declaration("display", identifier("flex")),
              declaration("flex-wrap", identifier("wrap")),
              declaration("justify-content", identifier("left")),
              declaration("column-gap", projectMarginX),
              declaration("row-gap", projectMarginY),
              declaration("margin", size(40), size(0))
            ),
            rule(
              selector(classSelector(projectClass)),
              declaration("position", identifier("relative"))
            ),
            rule(
              selector(
                classSelector(projectClass),
                combinator(),
                typeSelector("img")
              ),
              declaration("width", imgSize),
              declaration("height", imgSize),
              declaration(
                "border",
                identifier("solid"),
                size(imgBorder),
                grayColor
              ),
              declaration("box-sizing", identifier("border-box"))
            ),
            rule(
              selector(
                classSelector(projectClass),
                combinator(),
                typeSelector("a")
              ),
              declaration("cursor", identifier("pointer")),
              declaration("color", identifier("inherit")),
              declaration("text-decoration", identifier("inherit"))
            ),
            rule(
              selector(classSelector(overlayClass)),
              declaration("position", identifier("absolute")),
              declaration("top", size(overlayBorder)),
              declaration("left", size(overlayBorder)),
              declaration("width", size(imgDim - overlayBorder * 2)),
              declaration("height", size(imgDim - overlayBorder * 2))
            ),
            rule(
              selector(classSelector(nameClass)),
              declaration("color", fgColor),
              declaration("text-transform", identifier("uppercase")),
              declaration("font-size", size(14)),
              declaration("font-weight", number("900")),
              declaration("position", identifier("absolute")),
              declaration("margin-left", size(-2)),
              declaration("padding", size(0), size(8)),
              declaration("top", size(16)),
              declaration("padding-top", size(163)),
              declaration("z-index", number("-1"))
            ),
            rule(
              selector(
                classSelector(projectClass),
                pseudoSelector("hover"),
                combinator(),
                classSelector(nameClass)
              ),
              declaration("background", accentBg),
              declaration("color", accentFg)
            ),
            rule(
              selectors(
                selector(
                  classSelector(projectClass),
                  pseudoSelector("hover"),
                  combinator(),
                  classSelector(overlayClass)
                ),
                selector(
                  classSelector(projectClass),
                  pseudoSelector("hover"),
                  combinator(),
                  typeSelector("img")
                )
              ),
              declaration(
                "border",
                identifier("solid"),
                size(overlayBorder),
                accentBg
              )
            ),
            rule(
              selector(classSelector(typeClass)),
              declaration("color", grayColor),
              declaration("text-transform", identifier("uppercase")),
              declaration("font-size", size(14)),
              declaration("font-weight", number("100")),
              declaration("position", identifier("absolute")),
              declaration("left", size(-18)),
              declaration("margin-top", size(-8)),
              declaration("transform", fn("rotate", dimension("270", "deg"))),
              declaration("transform-origin", size(0), size(0))
            ),
            rule(
              selector(typeSelector("footer")),
              declaration("margin-top", size(109))
            ),
            rule(
              selector(typeSelector("footer"), combinator(), typeSelector("a")),
              declaration("color", fgColor),
              declaration("text-decoration", identifier("inherit"))
            ),
            rule(
              selector(
                typeSelector("footer"),
                combinator(),
                typeSelector("a"),
                pseudoSelector("hover")
              ),
              declaration("background", accentBg),
              declaration("color", accentFg)
            ),
            ...breakpoints,
            maxWidthRule(
              dimension("820", "px"),
              rule(
                selector(pseudoSelector("root")),
                declaration("font-size", dimension("15", "px"))
              )
            ),
            maxWidthRule(
              dimension("760", "px"),
              rule(
                selectors(selector(typeSelector("body"))),
                declaration("padding", bodyPaddingMobileY, bodyPaddingMobileX)
              )
            ),
            maxWidthRule(
              dimension("600", "px"),
              rule(
                selector(pseudoSelector("root")),
                declaration("font-size", dimension("14", "px"))
              ),
              rule(
                selector(typeSelector("header")),
                declaration("display", identifier("block"))
              ),
              rule(
                selector(
                  classSelector(introClass),
                  combinator(),
                  typeSelector("br")
                ),
                declaration("display", identifier("inherit"))
              ),
              rule(
                selector(
                  classSelector(introClass),
                  combinator(),
                  typeSelector("div")
                ),
                declaration("margin-bottom", size(12))
              )
            ),
            maxWidthRule(
              dimension("425", "px"),
              rule(
                selector(pseudoSelector("root")),
                declaration("font-size", dimension("12", "px"))
              )
            )
          )
        )
      )
    ),
    h(
      "body",
      null,
      h(
        "header",
        null,
        h("h1", null, "Dylan Freedman"),
        h(
          "div",
          { class: introClass },
          h(
            "div",
            null,
            "full-stack software, AI, ",
            h("br"),
            "reporting, art, music "
          ),
          h(
            "div",
            null,
            "coding new tools for ",
            h("br"),
            "journalists and the public "
          ),
          h(
            "div",
            null,
            "@washington post, ",
            h("br"),
            "prev @documentcloud, @google"
          )
        )
      ),
      h(
        "main",
        null,
        h(
          "div",
          { class: projectsClass },
          project(
            "Interpogate",
            "AI/Open Source",
            "interpogate",
            "https://github.com/freedmand/interpogate"
          ),
          project(
            "Logit",
            "AI/Experiment",
            "logit",
            "https://twitter.com/dylfreed/status/1723927399857901724"
          ),
          project(
            "Semantra",
            "AI/Open Source",
            "semantra",
            "https://github.com/freedmand/semantra"
          ),
          project(
            "Textra",
            "Tool/Open Source",
            "textra",
            "https://github.com/freedmand/textra"
          ),
          project(
            "Crosswalker",
            "Tool/Open Source",
            "crosswalker",
            "https://github.com/washingtonpost/crosswalker"
          ),
          project(
            "FastFEC",
            "Tool/Open Source",
            "fastfec",
            "https://github.com/washingtonpost/fastfec"
          ),
          project(
            "Audioset",
            "AI/Research Dataset",
            "audioset",
            "https://research.google.com/audioset/"
          ),
          project(
            "Code Editor",
            "Figma Plugin",
            "codeeditor",
            "https://www.figma.com/community/widget/1125176659139239100/code-editor"
          ),
          project("Poly", "Language/Blog", "poly", "https://poly.dev/"),
          project(
            "Covid19Map.us",
            "Viz/Open Source",
            "covid19map",
            "https://covid19map.us/"
          ),
          project(
            "Euros",
            "Viz/Graphics",
            "euros",
            "https://twitter.com/JonRMcClure/status/1411415665530052608"
          ),
          project(
            "Planet.Gallery",
            "Art/Experiment",
            "planetgallery",
            "https://planet.gallery/"
          ),
          project(
            "DataJourn",
            "Course/Open Source",
            "datajourn",
            "https://datajourn.com/"
          ),
          project(
            "HTML Bridges",
            "Teaching/Game",
            "htmlbridges",
            "https://bridges.datajourn.com/"
          ),
          project(
            "DocumentCloud",
            "Open Source/Platform",
            "documentcloud",
            "https://twitter.com/dylfreed/status/1405634946744659975"
          ),
          project(
            "Sidekick",
            "AI/Open Source",
            "sidekick",
            "https://github.com/muckrock/sidekick"
          ),
          project(
            "RipplePlastic",
            "VR/Graphics",
            "rippleplastic",
            "https://rippleplastic.netlify.app/"
          ),
          project(
            "TapCompose",
            "Open Source/Music",
            "tapcompose",
            "https://www.tapcompose.com/design/"
          ),
          project(
            "Sounds",
            "Computational Essay",
            "sounds",
            "https://observablehq.com/@freedmand/sounds"
          ),
          project(
            "Pretty Printing",
            "Computational Essay",
            "prettyprinting",
            "https://observablehq.com/@freedmand/pretty-printing"
          ),
          project(
            "Inferactive",
            "Open Source/Data",
            "inferactive",
            "https://inferactive.org/"
          ),
          project("Sonority", "AI/Music", "sonority", "https://sonority.io/"),
          project(
            "FOIA Facelift",
            "Art/Experiment",
            "foiafacelift",
            "https://www.muckrock.com/foiafacelift/"
          ),
          project(
            "DankLearning",
            "AI/App",
            "danklearning",
            "https://danklearning.com/"
          ),
          project(
            "Elex Forecaster",
            "Viz/Elections",
            "forecaster",
            "https://dylanfreedman.com/interactive/election-forecaster/interactive"
          ),
          project(
            "Census Shapefile",
            "Data/Tool",
            "censusshapefile",
            "https://observablehq.com/@freedmand/census-shapefile"
          ),
          project(
            "Stepfunction Viz",
            "Open Source/Tool",
            "stepfunctionviz",
            "https://github.com/freedmand/stepfunction-visualizer"
          ),
          project(
            "1:46.45",
            "News/Video",
            "14645",
            "https://youtube.com/watch?v=xYWU1yo2LgA"
          ),
          project(
            "Elusive",
            "News/Video",
            "elusive",
            "https://youtube.com/watch?v=buM2BwJyVUg"
          ),
          project(
            "Fear Meets Fire",
            "News/Reporting",
            "fearmeetsfire",
            "https://www.pri.org/stories/2017-12-04/after-california-wildfires-community-leaders-are-trying-rebuild-homes-and-trust"
          ),
          project(
            "Aero",
            "Fitness/Game",
            "aero",
            "https://github.com/freedmand/aero"
          ),
          project(
            "Track3D",
            "Fitness/Game",
            "track3d",
            "https://track3d.netlify.app/"
          ),
          project(
            "Trail Terrain",
            "Graphics/Experiment",
            "trailterrain",
            "https://trailrunning.netlify.app/"
          ),
          project(
            "Infinite Terrain",
            "Graphics/Experiment",
            "infiniteterrain",
            "https://infiniteterrain.netlify.app/"
          ),
          project(
            "Extempore",
            "Piano/Archive",
            "extempore",
            "https://extempore.netlify.app/"
          ),
          project(
            "New Years Timer",
            "Site/Fun",
            "newyearstimer",
            "https://newyearstimer.com/"
          ),
          project(
            "Distinguish",
            "Open Source/Tool",
            "distinguish",
            "https://github.com/freedmand/distinguish"
          ),
          project(
            "HueNote",
            "Music/Experiment",
            "huenote",
            "https://huenote.netlify.app/"
          ),
          project(
            "Keyboreal",
            "Music/Experiment",
            "keyboreal",
            "https://keyboreal.netlify.app/"
          )
        )
      ),
      h(
        "footer",
        null,
        link("mailto:freedmand@gmail.com", "freedmand@gmail.com"),
        " / ",
        link("https://twitter.com/dylfreed", "Twitter @dylfreed"),
        " / ",
        link("https://github.com/freedmand", "GitHub"),
        " / ",
        link("https://linkedin.com/in/dylanfreedman", "LinkedIn"),
        " / ",
        link("https://observablehq.com/@freedmand", "Observable"),
        " / ",
        link("https://journa.host/@dylan", "Mastodon"),
        " / ",
        link("https://bsky.app/profile/dylanfreedman.com", "BlueSky")
      )
    )
  );

  // Add doctype prefix
  return `<!DOCTYPE html>${toHtml(tree)}`;
}
