import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "modules/index.ts",
  output: {
    name: "cli-utils",
    file: "lib/index.cjs",
    format: "cjs",
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
      exclude: "node_modules/**",
    }),
    terser(),
  ],
  external: ["chalk", "ora", "fs-extra"],
};
