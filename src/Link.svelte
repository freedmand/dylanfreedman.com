<script>
  export let href;
  export let noUnderline = false;
  export let aria = null;
  export let rel = null;
</script>

{#if aria != null}
  <a
    aria-label={aria}
    class:nounder={noUnderline}
    {href}
    rel="noreferrer noopener{rel == null ? '' : ` ${rel}`}"
    target="_blank"><slot /></a
  >
{:else}
  <a
    class:nounder={noUnderline}
    {href}
    rel="noreferrer noopener{rel == null ? '' : ` ${rel}`}"
    target="_blank"><slot /></a
  >
{/if}

<style>
  :global(a) {
    text-decoration: underline;
    color: inherit;
  }

  :global(a.nounder) {
    text-decoration: none;
    display: inline;
  }
</style>
