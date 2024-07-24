import type { Options } from "./types";
import { GLOB_IGNORE } from "constants/glob";
import { createVueConfig, createJsConfig, createTsConfig } from "./configs";

export const defineConfig = (config: Partial<Options>) => {
  const {
    ignores = [],
    frameType = "vue",
    frameVersion = 3,
    scriptType = "javascript",
    overrides = [],
  } = config;

  let customConfig: any[] = [];

  switch (frameType) {
    case "pure": {
      customConfig =
        scriptType == "javascript" ? createJsConfig() : createTsConfig();
      break;
    }
    case "vue": {
      customConfig = createVueConfig({ frameVersion, scriptType, overrides });
      break;
    }
    default:
      break;
  }

  //重置忽略文件
  const ignoreConfig = { ignores: [...GLOB_IGNORE, ...ignores] };

  return [ignoreConfig, ...customConfig];
};
