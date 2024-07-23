import type { Options } from "./types";
import { createVueConfig, createJsConfig, createTsConfig } from "./configs";

export const defineConfig = (config: Partial<Options>) => {
  const {
    ignore = [
      "*.sh",
      "*.md",
      "*.woff",
      "*.ttf",
      ".vscode",
      ".husky",
      ".github",
      "node_modules",
      "dist",
    ],
    files = ["**/*.{js,mjs,cjs,ts,vue}"],
    vueVersion = 3,
    scriptType = "javascript",
  } = config;

  const vueConfig = createVueConfig(vueVersion);
  const scriptConfig =
    scriptType == "javascript" ? createJsConfig() : createTsConfig();

  return [ignore, { files }, ...vueConfig, ...scriptConfig];
};
