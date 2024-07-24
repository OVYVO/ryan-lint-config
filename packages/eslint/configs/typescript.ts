import globals from "globals";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";

export const createTsConfig = () => {
  return [
    {
      languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
  ];
};
