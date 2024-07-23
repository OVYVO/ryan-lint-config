import type { Options } from "./types";
import { createVueConfig, createJsConfig, createTsConfig } from "./configs";

export const defineConfig = (config: Partial<Options>) => {
  const { version = "vue3", type = "javascript", ignore } = config;

  const vueConfig = createVueConfig(version);
  const jsConfig = createJsConfig();
  const tsConfig = createTsConfig();

  return [ignore, ...vueConfig, ...jsConfig, ...tsConfig];
};
