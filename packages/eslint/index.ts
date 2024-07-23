import type { Options } from "./types";
import { createVueConfig, createJsConfig, createTsConfig } from "./configs";

export const defineConfig = (config: Partial<Options>) => {
  const { ignore } = config;

  const vueConfig = createVueConfig();
  const jsConfig = createJsConfig();
  const tsConfig = createTsConfig();

  return [ignore, ...vueConfig, ...jsConfig, ...tsConfig];
};
