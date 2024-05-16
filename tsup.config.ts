import { defineConfig } from 'tsup';

export default defineConfig({
  target: 'es2019',
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts'],
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  dts: true
});
