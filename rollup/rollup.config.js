import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only'
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.tsx',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
    name: 'bundle',
    interop: 'auto',
    inlineDynamicImports: true,
  },
  preserveEntrySignatures: false,
  plugins: [
    image(),
    css({ output: 'bundle.css' }),
    typescript(),
    resolve(),
    commonjs()
  ]
};
