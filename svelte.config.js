import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      out: 'dist',
      precompress: false,
      env: {
        port: 'PORT',
      },
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },

  vite: {
    resolve: {
      alias: {
        '@common': new URL('./src/common/', import.meta.url).pathname,
        '@components': new URL('./src/components/', import.meta.url).pathname,
        '@stores': new URL('./src/stores/', import.meta.url).pathname,
      },
    },
  },
};

export default config;
