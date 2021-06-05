import typescript from '@rollup/plugin-typescript';

export default {
  input: './svelte-system-info.ts',
  output: {
    dir: './',
    format: 'cjs',
    sourcemap: true,
    exports: 'default',
  },
  plugins: [typescript()],
};