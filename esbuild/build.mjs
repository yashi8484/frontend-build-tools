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
else if (process.env.NODE_ENV === 'development') {
  esbuild.serve({
    servedir: 'public'
  }, buildOption).then(serveResult => {
    console.log(`http://${serveResult.host}/${serveResult.port}`)
  }).catch(() => process.exit(1));
}
