import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 2424,
    open: true,
  },
  build: {
    sourcemap: true,
    manifest: true,
  },
});
