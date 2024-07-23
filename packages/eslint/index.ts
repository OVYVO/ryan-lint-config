import type { Options } from "./types";
import { GLOB_IGNORE, GLOB_FILES } from "constants/glob";
import { createVueConfig, createJsConfig, createTsConfig } from "./configs";

export const defineConfig = (config: Partial<Options>) => {
  const {
    files = [],
    ignores = [],
    vueVersion = 3,
    scriptType = "javascript",
  } = config;

  //重置匹配规则
  const filesConfig = files.length ? files : { files: GLOB_FILES };
  //重置忽略文件
  const ignoreConfig = { ignores: [...GLOB_IGNORE, ...ignores] };

  const vueConfig = createVueConfig(vueVersion);
  const scriptConfig =
    scriptType == "javascript" ? createJsConfig() : createTsConfig();

  return [ignoreConfig, filesConfig, ...vueConfig, ...scriptConfig];
};
