import globals from "globals";
import pluginJs from "@eslint/js";
import { GLOB_FILES_JS } from "../constants/glob";
export const createJsConfig = () => {
  return [
    { files: GLOB_FILES_JS },
    {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
          document: "readonly",
          navigator: "readonly",
          window: "readonly",
        },
      },
    },
    pluginJs.configs.recommended,
  ];
};
