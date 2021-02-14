<script>
  export let href;
  export let noUnderline = false;
</script>

<style>
  :global(a) {
    text-decoration: underline;
    color: inherit;
    display: inline-block;
  }

  :global(a.nounder) {
    text-decoration: none;
    display: inline;
  }
</style>

<a class:nounder={noUnderline} {href} rel="noreferrer noopener" target="_blank"><slot></slot></a>
