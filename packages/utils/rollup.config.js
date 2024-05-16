import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  input: "modules/index.ts",
  output: {
    name: "cli-utils",
    file: "lib/index.cjs",
    format: "cjs",
  },
  plugins: [
    json(),
    resolve({ preferBuiltins: true, exclude: "node_modules/**" }),
    commonjs({
      exclude: "node_modules/**",
    }),
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
      exclude: "node_modules/**",
    }),
    terser(),
  ],
};
