import globals from "globals";
import tseslint from "typescript-eslint";
import pluginJs from "@eslint/js";

export const createTsConfig = () => {
  const config = [
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    {
      files: ["**/*.vue"],
      languageOptions: { parserOptions: { parser: tseslint.parser } },
    },
  ];

  return config;
};
