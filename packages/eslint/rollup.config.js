import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodePolyfills from "rollup-plugin-polyfill-node";
import json from "@rollup/plugin-json";

export default {
  input: "lib/index.js",
  output: {
    file: "bin/index.cjs",
    format: "cjs",
  },
  plugins: [
    json(),
    resolve({
      preferBuiltins: true,
      exclude: "node_modules/**",
    }),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs({
      exclude: "node_modules/**",
    }),
    nodePolyfills(),
  ],
};
