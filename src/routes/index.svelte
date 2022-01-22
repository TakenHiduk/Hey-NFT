<style lang="scss" scoped>
  .title {
    @apply text-4xl;
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
  // FIXME: Fix path aliases
  import { ContainedButton } from '../common/components/button';
</script>

<svelte:head>
  <title />
</svelte:head>

<div
  class="flex m-auto p-5 justify-center items-center flex-col gap-5 bg-secondary dark_bg-secondary-dark">
  <span class="title">Welcome to Hey NFT</span>
  <span class="sub-title">This is a subtext</span>
  <div class="flex items-center gap-2">
    <ContainedButton class="px-3 py-2" color="accent">accent</ContainedButton>
    <ContainedButton class="px-3 py-2" color="accent" loading />
    <ContainedButton class="px-3 py-2" color="accent" loading
      >accent</ContainedButton>
  </div>
</div>
