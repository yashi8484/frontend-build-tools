// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    'public': { url: '/', static: true },
    'src': { url: '/dist' }
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    polyfillNode: true
  },
  devOptions: {
    port: 2424
  },
  buildOptions: {
    sourcemap: true  // experimental option
  },
};
