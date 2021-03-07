import esbuild from "esbuild";

const buildOption = {
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
}

if (process.env.NODE_ENV === 'production') {
  esbuild.build(buildOption).catch(() => process.exit(1));
}
