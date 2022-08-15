const config = ({ entryPoints = ["./src/index.ts"] }) => ({
  entryPoints,
  outdir: "dist",
  target: "es2015",
  bundle: true,
  minify: false,
  external: ["react"],
  sourcemap: true,
});

module.exports = config;
