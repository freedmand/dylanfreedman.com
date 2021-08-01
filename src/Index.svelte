<script>
  import Font from "./Font.svelte";
  import ProfileImage from "./ProfileImage.svelte";
  import Link from "./Link.svelte";
  import Social from "./Social.svelte";
  import Projects from "./Projects.svelte";
  import Media from "./Media.svelte";

  import icons from "./icons.js";
</script>

<style>
  :global(html, body) {
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 19px;
    line-height: 1.6em; /* 30px; */
    max-width: 740px;
    padding: 0 1.3em; /* 0 24px; */
    margin: 2.6em auto; /* 50px auto; */
    background: #fff9ef;
    scroll-behavior: smooth;
  }

  :global(h1) {
    font-size: 2.2em; /* 41px; */
    margin: 1.2em 0 0.7em 0; /* 51px 0 30px 0; */
    font-weight: normal;
  }

  :global(h2) {
    font-size: 1.7em; /* 32px; */
    margin: 1.6em 0 0.5em 0; /* 51px 0 15px 0; */
    font-weight: normal;
  }

  :global(h3) {
    font-size: 1.3em; /* 25px; */
    font-weight: normal;
    margin: 0.6em 0; /* 15px 0 15px 0; */
  }

  :global(.intro) {
    display: table;
  }

  :global(.intro > div) {
    display: table-row;
  }

  :global(.intro > div > div) {
    display: table-cell;
    vertical-align: top;
  }

  :global(.profile) {
    padding-top: 1.3em; /* 12px; */
    padding-right: 1.2em; /* 15px; */
  }

  :global(.hide) {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    :global(html, body) {
      font-size: 15px;
    }

    :global(h2) {
      margin-top: 2em;
    }

    :global(.intro) {
      display: block;
    }

    :global(.intro > div) {
      display: block;
    }

    :global(.intro > div > div) {
      display: block;
    }

    :global(.profile) {
      padding: 0.6em 0;
      margin: 0 auto;
    }

    :global(.socials) {
      display: inline-block;
      vertical-align: middle;
      padding-left: 1em;
    }

    :global(.hide) {
      display: block;
    }

    :global(.show) {
      display: none;
    }
  }
</style>

<svelte:head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dylan Freedman</title>
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta
    name="description"
    content="I’m Dylan, a full-stack software engineer, designer, and journalist. I strive to code new tools to help journalists and the public."
  />
</svelte:head>

<!-- Import font -->
<Font />

<h1>Dylan Freedman</h1>

<div class="intro">
  <div>
    <div class="profile">
      <ProfileImage />
      <div class="socials">
        <Social
          hideMobile={true}
          icon={icons.email}
          text="Email"
          link="mailto:freedmand@gmail.com"
        />
        <Social
          icon={icons.twitter}
          text="Twitter"
          link="https://twitter.com/dylfreed"
        />
        <Social
          icon={icons.github}
          text="GitHub"
          link="https://github.com/freedmand"
        />
        <Social
          icon={icons.observable}
          text="Observable"
          link="https://observablehq.com/@freedmand"
        />
        <Social
          icon={icons.resume}
          text="Résumé"
          link="/assets/docs/freedman_resume_jan_2021.pdf"
        />
      </div>
    </div>
    <div class="blurb">
      <p>
        Hi! I’m Dylan, a full-stack software engineer, designer, and journalist.
        I strive to code new tools to help journalists and the public.
      </p>

      <p>
        I work at The Washington Post as a senior full-stack software engineer
        on the newsroom engineering team, which builds tools, graphics, and data
        pipelines to support the newsroom.
      </p>

      <p>
        Previously, I worked at <Link href="https://www.muckrock.com/"
          >MuckRock</Link
        >, where I led development of journalism technology platform <Link
          href="https://documentcloud.org/">DocumentCloud</Link
        >, and at Google on the <Link
          href="https://research.google/research-areas/machine-perception/"
          >Machine Perception team</Link
        >. I’ve <Link href="https://datajourn.com/">taught</Link> data journalism
        and <Link href="/assets/docs/freedman_resume_jan_2021.pdf">studied</Link
        > computational journalism, computer science, and music.
      </p>

      <p class="show">
        To get in touch, feel free to reach out at <Link
          href="mailto:freedmand@gmail.com">freedmand@gmail.com</Link
        >.
      </p>
    </div>
  </div>
</div>

<h2 id="projects">Projects</h2>
<p>
  I pursue many projects on and off work. Here are some highlights. For
  reporting work, see <a href="#media">Media</a> below.
</p>

<Projects />

<h2 id="media">Media</h2>

<Media />
