import globals from "globals";
import pluginJs from "@eslint/js";

export const createJsConfig = () => {
  const config = [
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
      rules: { ...pluginJs.configs.recommended.rules },
    },
  ];

  return config;
};
