// see https://remarkablemark.org/blog/2019/07/12/rollup-commonjs-umd/

import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/svelte-system-info.ts',
  output: [
    {
      file:     './dist/svelte-system-info.js',
      format:    'umd', // builds for both Node.js and Browser
      name:      'System', // required for UMD modules
      noConflict:true,
      sourcemap: true,
      exports:   'default',
    },{
      file:     './dist/svelte-system-info.esm.js',
      format:   'esm',
      sourcemap:true
    }
  ],
  plugins: [typescript(), terser()],
};