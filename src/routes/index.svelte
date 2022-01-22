<style lang="scss" scoped>
  .title {
    @apply text-4xl;
    @apply text-primary dark_text-primary-dark;
  }

  .sub-title {
    @apply text-2xl;
    @apply text-secondary dark_text-secondary-dark;
  }
</style>

<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = () => ({});
</script>

<script lang="ts">
</script>

<svelte:head>
  <title />
</svelte:head>

<div
  class="flex m-auto p-5 rounded-xl justify-center items-center flex-col gap-5 bg-secondary dark_bg-secondary-dark">
  <span class="title">Welcome to Hey NFT</span>
  <span class="sub-title">This is a subtext</span>
</div>
