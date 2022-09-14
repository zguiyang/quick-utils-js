import { defineConfig } from 'tsup';

export default defineConfig ( {
  entry: [ 'src/index.ts' ],
  format: [ 'esm', 'cjs' ],
  legacyOutput: true,
  target: 'es5',
  splitting: false,
  dts: true,
  sourcemap: false,
  minify: true,
  clean: true,
} );