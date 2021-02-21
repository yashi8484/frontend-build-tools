import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only'
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html2 from 'rollup-plugin-html2'
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from '@rollup/plugin-replace';

const plugins = [
  image(),
  css({ output: 'bundle.css' }),
  typescript(),
  resolve(),
  commonjs(),
  html2({
    fileName: 'index.html',
    template: 'public/index_template.html',
    externals: [{
      file: 'bundle.css',
      pos: 'before'
    }]
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
];

if (process.env.ROLLUP_WATCH) {
  plugins.push(serve({
    open: true,
    contentBase: 'public'
  }),
  livereload({
    watch: 'public'
  }))
}

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
  plugins,
  watch: {
    clearScreen: true
  }
};
