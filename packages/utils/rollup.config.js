import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "modules/index.ts",
  output: {
    name: "cli-utils",
    file: "lib/index.js",
    format: "umd",
  },
  plugins: [
    json(),
    resolve({ exclude: "node_modules/**" }),
    commonjs({ exclude: "node_modules/**" }),
    typescript({
      exclude: "node_modules/**",
    }),
    terser(),
  ],
};
