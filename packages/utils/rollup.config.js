import babel from "@rollup/plugin-babel";
import nodePolyfills from "rollup-plugin-polyfill-node";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "modules/index.ts",
  output: {
    name: "cliUtils",
    file: "index.js",
    format: "umd",
    globals: {},
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
      exclude: "node_modules/**",
    }),
    nodePolyfills(),
  ],
};
