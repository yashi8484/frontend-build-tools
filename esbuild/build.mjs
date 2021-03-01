import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  loader: {
    ".ts": "ts",
    ".svg": "dataurl",
  },
  outfile: "public/bundle.js",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  minify: true,
  sourcemap: "external",
}).catch(() => process.exit(1));
