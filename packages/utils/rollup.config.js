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
    typescript({
      compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
      exclude: "node_modules/**",
    }),
  ],
};
