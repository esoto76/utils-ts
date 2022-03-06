import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import ts from "rollup-plugin-ts";

const Outputs = {
  dir: "dist",
};

export default {
  input: {
    index: "./src/index.ts",
  },
  output: [
    {
      ...Outputs,
      format: "cjs",
      chunkFileNames: "[name].js",
      entryFileNames: "[name].js",
    },
    {
      ...Outputs,
      format: "es",
      chunkFileNames: "[name].es.js",
      entryFileNames: "[name].es.js",
    },
  ],
  external: [],
  plugins: [
    ts({ hook: { outputPath: (path) => path.replace(".es.d", ".d") } }),
    json({ namedExports: false, preferConst: true }),
    babel({ babelHelpers: "bundled" }),
    commonjs(),
    resolve(),
  ],
};
