<style lang="scss" scoped>
  main {
    @apply grid grid-cols-1 grid-rows-1;
    @apply w-screen h-screen;
  }
</style>

<script lang="ts">
  import '../common/styles/global.scss';
  // FIXME: see if we can fix this
  // import '@common/styles/global.scss';
</script>

<!-- <AlertList/> -->
<main>
  <slot />
</main>

<!-- <Modals/> -->
