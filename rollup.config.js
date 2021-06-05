import typescript from '@rollup/plugin-typescript';

export default {
  input: './svelte-system-info.ts',
  output: {
    dir: './',
    format: 'umd',  // builds for both Node.js and Browser
    name:'svelte-system-info', // required for UMD modules
    sourcemap: true,
    exports: 'default',
  },
  plugins: [typescript()],
};