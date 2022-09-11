import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig ( {
    test: {
        globals: true,
        setupFiles: ['./testSetup.ts'],
        exclude: [ ...configDefaults.exclude, 'docs/**', 'dist/**' ],
    },
} );