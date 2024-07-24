import globals from "globals";
import pluginJs from "@eslint/js";
export const createJsConfig = () => {
  return [
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
