import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

import * as path from 'path';

// https://vitejs.dev/config/

export default defineConfig ( {
  plugins: [
    vue (),
  ],
  resolve: {
    alias: {
      'quick-utils-js': path.resolve ( '..', 'src', 'index.ts' ),
    },

  },
} );
