import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  build: {
    sourcemap: true,
    manifest: true,
  },
});
