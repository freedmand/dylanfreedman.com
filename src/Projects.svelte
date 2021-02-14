<script>
  import Link from './Link.svelte';
  import Project from './Project.svelte';
</script>

<Project name="Poly" images={[["ast", 415], ["code", 556]]}>
  <p>Blog: <Link href="https://poly.dev">poly.dev</Link></p>
  <p>Poly is a new programming language for the web I’m currently working on as a personal project. The language is in early stages and is designed to compile to full web applications in HTML, CSS, and JavaScript. I’m implementing the language using <Link href="https://reasonml.github.io/">ReasonML</Link>.</p>
</Project>

<Project name="Covid Map" images={[["map", 428], ["chart", 253]]}>
  <p>Website: <Link href="https://covid19map.us">covid19map.us</Link></p>
  <p>An interactive, explorable, and zoomable map of COVID-19 cases and deaths in the United States. Utilizes <Link href="https://deck.gl/">deck.gl</Link>, a WebGL-based library for displaying large datasets. The site pulls data from the New York Times <Link href="https://github.com/nytimes/covid-19-data">open source covid data</Link>. First published in March 2020, the site automatically pulls in data updates every day using a custom Google Cloud functions workflow. <Link href="https://github.com/freedmand/covid19map.us">Source code</Link>.</p>
</Project>

<Project name="Planet Gallery" images={[["starfield", 560], ["plot", 396]]}>
  <p>Website: <Link href="https://planet.gallery">planet.gallery</Link></p>
  <p>A virtual showcase of every known exoplanet displayed as a countour plot of its surrounding starfield. Done in collaboration with <Link href="https://alpeirson.com">Lawrence Peirson</Link>. This work was featured in Stanford’s <Link href="https://mrs.stanford.edu/art-science-2020-exhibition">Art of Science 2020 Exhibition</Link>.</p>
</Project>

<Project name="DataJourn" images={[
  ["pivot", 550],
  ["bridges", 684],
  ["wickedweb", 323]
]}>
  <p>Course Website: <Link href="https://datajourn.com">datajourn.com</Link></p>
  <p>In fall 2019, I taught an undergraduate course called <i>Data Journalism</i> at Temple University. The course is divided into three parts: data, visualization, and code. Students learned how to 1) find datasets and analyze them using spreadsheets, 2) design on paper and create graphics in Figma, and 3) code basic HTML, JavaScript, and CSS to put together interactive webpages.</p>
  <p>Course content includes a <Link href="https://datajourn.com/week-2/pivot-guide">visual guide on how pivot tables work</Link>, an interactive <Link href="https://bridges.datajourn.com/">bridge-building game</Link> to learn HTML, and a <Link href="https://wickedweb.netlify.app/">Halloween-themed puzzle</Link> to find coding mistakes.</p>
</Project>

<Project name="Ripple Plastic" images={[
  ["debris", 388],
  ["world", 486],
  ["debris2", 559],
]}>
  <p>Website: <Link href="https://rippleplastic.com/">rippleplastic.com</Link></p>
  <p>A virtual reality experience I created in conjunction with award-winning photographer <Link href="https://www.mandy-barker.com/virtual-reality">Mandy Barker</Link> and the <Link href="https://journalism.stanford.edu/">Stanford Journalism Program</Link>. The interactive exploration highlights the growing plastic pollution in the world’s oceans by juxtaposing plastic debris Barker photographed on beaches with a guided narration.</p>
  <p>I coded the experience using the <Link href="https://aframe.io/">A-Frame</Link> Web.VR framework (<Link href="https://github.com/freedmand/rippleplastic">source code</Link>). Steps involved include 1) mapping 2D photoshop layers into 3D objects using a customly designed Blender pipeline, 2) creating a layout algorithm to place objects randomly on a sphere using a combination of Perlin noise and Poisson-disc sampling, 3) coordinating production with fellow journalism students, and 4) composing custom theme music for the experience. I wrote a <Link href="https://medium.com/@StanfordJournalism/plastic-ocean-debris-virtual-reality-and-art-9e253d702dd7">blog post</Link> about the process. The experience premiered at the <Link href="https://www.impressions-gallery.com/event/mandy-barker-our-plastic-ocean/">Our Plastic Ocean exhibition</Link> at Impressions Gallery, England in 2019.</p>
</Project>

<Project name="Sounds" images={[
  ["sound1", 782],
  ["sound2", 401],
  ["sound3", 528],
]}>
  <p><Link href="https://observablehq.com/@freedmand/sounds">Observable Notebook</Link></p>
  <p>An interactive sound wave primer I wrote for fun in 2018. This online computational essay guides readers through the basics of sound wave theory. <Link href="https://observablehq.com/@freedmand/sounds-2">Part 2</Link> delves into more experimental sound functions and 8-bit chiptunes.</p>
</Project>

<Project name="Tapcompose" images={[
  ["intro", 220],
  ["score", 379],
  ["arpeggiator", 457],
  ["mobile", 144],
]}>
  <p>Website: <Link href="https://www.tapcompose.com/">tapcompose.com</Link></p>
  <p>Auto-complete for music composition. A web app I built as part of a Stanford course that lets anyone write sheet music, bar by bar, with auto-generated suggestions. The web app features dynamic sheet music generation and a synced playback bar, with sounds generated using the Web Audio API in-browser. <Link href="https://github.com/freedmand/tapcompose">Source code</Link>. <Link href="https://www.youtube.com/watch?v=gpfXgbw9xFk&feature=emb_title">YouTube demo</Link>.</p>
</Project>

<Project name="AudioSet" images={[
  ["intro", 608],
  ["ontology", 435],
  ["videos", 490],
  ["class", 546],
]}>
  <p>Website: <Link href="https://research.google.com/audioset/">research.google.com/audioset</Link></p>
  <p>A static website I designed at Google to showcase AudioSet, an ontology of sound events and collection of over 2 million manually annotated YouTube clips. The website presents all the YouTube clip thumbnails, dynamically requesting more as the user scrolls using <Link href="https://en.wikipedia.org/wiki/JSONP">JSONP</Link>. I used <Link href="https://github.com/google/closure-templates">Closure Templates</Link> to build reusable components for static pages. I also contributed to the <Link href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45857.pdf">paper</Link> behind the website, which was presented at the 2017 IEEE International <Link href="http://www.ieee-icassp2017.org/">Conference</Link> on Acoustics, Speech and Signal Processing (ICASSP) in New Orleans.</p>
</Project>

<Project name="Sonority" images={[
  ["graph", 570],
  ["alignment", 1045],
]}>
  <p>Website: <Link href="https://sonority.io/">sonority.io</Link></p>
  <p>An interactive visualization of the harmonic similarity between all the Beatles’ songs. I built the graphic using <Link href="https://d3js.org/">D3.js</Link>. Using a custom Python processing script, I statically generated thousands of audio clips representing the most aligned excerpt of each pair of songs. This work was part of my <Link href="https://dash.harvard.edu/bitstream/handle/1/14398545/FREEDMAN-SENIORTHESIS-2015.pdf">undergraduate thesis</Link> which I presented at the 2015 International Society for Music Information Retrieval (ISMIR) <Link href="http://ismir2015.uma.es/">conference</Link> in Malaga, Spain.</p>
</Project>
