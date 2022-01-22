<style lang="scss" scoped>
  button {
    @apply flex gap-2;
    @apply justify-center items-center;
    @apply border-2;
    @apply uppercase;
    @apply transition-all;
    @apply font-semibold;

    &:hover {
      @apply scale-105;
    }

    &:active {
      @apply scale-95;
    }
  }

  [class*='loading'] {
    @apply cursor-not-allowed;

    &:hover {
      @apply scale-100;
    }

    &:active {
      @apply scale-100;
    }
  }

  [class*='accent'] {
    @apply bg-accent dark_bg-accent-dark;
    @apply border-accent dark_border-accent-dark;
  }

  [class*='success'] {
    @apply bg-success dark_bg-success-dark;
    @apply border-success dark_border-success-dark;
  }

  [class*='danger'] {
    @apply bg-danger dark_bg-danger-dark;
    @apply border-danger dark_border-danger-dark;
  }

  [class*='warning'] {
    @apply bg-warning dark_bg-warning-dark;
    @apply border-warning dark_border-warning-dark;
  }

  [class*='info'] {
    @apply bg-info dark_bg-info-dark;
    @apply border-info dark_border-info-dark;
  }
</style>

<script lang="ts">
  export let color: 'accent' | 'success' | 'danger' | 'warning' | 'info' =
    'accent';
  export let loading = false;
</script>

<button
  class:accent={color === 'accent'}
  class:success={color === 'success'}
  class:danger={color === 'danger'}
  class:warning={color === 'warning'}
  class:info={color === 'info'}
  class:loading
  {...$$restProps}>
  {#if loading}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
  {/if}
  <slot />
</button>
