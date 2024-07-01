import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
// import nodePolyfills from "rollup-plugin-polyfill-node";

export default {
  input: "modules/index.ts",
  output: {
    file: "lib/index.js",
    format: "cjs",
  },
  plugins: [
    json(),
    // nodePolyfills(),
    resolve({ exclude: "node_modules/**", exportConditions: ["node"] }),
    commonjs({ exclude: "node_modules/**" }),
    typescript({ exclude: "node_modules/**" }),
    terser(),
  ],
};
