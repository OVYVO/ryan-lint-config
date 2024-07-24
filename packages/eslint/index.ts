import type { Options } from "./types";
import { GLOB_IGNORE } from "constants/glob";
import { createVueConfig, createJsConfig, createTsConfig } from "./configs";

export const defineConfig = (config: Partial<Options>) => {
  const { ignores = [], frameType = "vue", scriptType = "javascript" } = config;

  let customConfig: any[] = [];

  switch (frameType) {
    case "pure": {
      if (scriptType == "javascript") {
        customConfig = createJsConfig();
      } else if (scriptType == "typescript") {
        customConfig = createTsConfig();
      }
      break;
    }
    case "vue": {
      if (scriptType == "javascript") {
        customConfig = createVueConfig({});
      } else if (scriptType == "typescript") {
        customConfig = createVueConfig({});
      }
      break;
    }
    default:
      break;
  }

  //重置忽略文件
  const ignoreConfig = { ignores: [...GLOB_IGNORE, ...ignores] };

  return [ignoreConfig];
};
