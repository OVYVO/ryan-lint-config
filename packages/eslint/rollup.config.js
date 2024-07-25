import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "index.ts",
  output: [
    {
      file: "lib/index.js",
      format: "es",
    },
    {
      file: "lib/index.cjs",
      format: "cjs",
    },
  ],
  external: ["eslint-plugin-vue", "globals", "typescript-eslint", "@eslint/js"],
  plugins: [
    json(),
    resolve({ exclude: "node_modules/**" }),
    commonjs({ exclude: "node_modules/**" }),
    typescript({ exclude: "node_modules/**" }),
    terser(),
  ],
};
