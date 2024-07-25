import globals from "globals";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";
import { GLOB_FILES_TS } from "../constants/glob";

export const createTsConfig = () => {
  return [
    { files: GLOB_FILES_TS },
    {
      languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
  ];
};
