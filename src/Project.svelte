<script>
  import Link from "./Link.svelte";
  import { getContext } from "svelte";

  export let name;
  export let images = [];

  const dimensions = getContext("dimensions");

  $: dirPath = name
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, "_");
</script>

<div class="project">
  <h3 id={dirPath}>{name}</h3>
  <slot />
  {#if images.length > 0}
    <div class="images">
      <div class="scroll">
        {#each images as image}
          {#if image.length == 2}
            <Link href={image[1]} noUnderline={true}>
              <img
                height="130"
                width={dimensions[dirPath][
                  Array.isArray(image) ? image[0] : image
                ].width / 2}
                src={`/assets/images/${dirPath}/${
                  Array.isArray(image) ? image[0] : image
                }.jpg`}
                alt={Array.isArray(image[0])
                  ? image[0][1]
                  : `Showcase image for ${name}`}
                loading="lazy"
              />
            </Link>
          {:else}
            <img
              height="130"
              width={dimensions[dirPath][
                Array.isArray(image) ? image[0] : image
              ].width / 2}
              src={`/assets/images/${dirPath}/${
                Array.isArray(image) ? image[0] : image
              }.jpg`}
              alt={Array.isArray(image[0])
                ? image[0][1]
                : `Showcase image for ${name}`}
              loading="lazy"
            />
          {/if}
        {/each}
        <div class="padder" />
      </div>
      <div class="fade" />
    </div>
  {/if}
</div>

<style>
  :global(.images) {
    margin-left: -0.6em;
    position: relative;
    height: 154px;
    margin-bottom: -6px;
  }

  :global(.scroll) {
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    height: 100%;
  }

  :global(.fade) {
    position: absolute;
    right: 0;
    width: 2em;
    top: 0;
    bottom: 12px;
    background: transparent;
    background: linear-gradient(to left, #fff9ef, #fff9ef00);
  }

  :global(.images img) {
    margin: 0 0.6em; /* 15px; */
    border: solid 1px black;
  }

  :global(.padder) {
    display: inline-block;
    width: 1.5em;
  }

  :global(.project) {
    margin: 3em 0; /* 40px 0; */
  }
</style>
