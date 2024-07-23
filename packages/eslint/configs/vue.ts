import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export const createVueConfig = (version: string) => {
  const config: any[] = [
    {
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        globals: {
          ...globals.browser,
          ...globals.node,
          defineExpose: "readonly",
          defineOptions: "readonly",
        },
      },
    },
    ...pluginVue.configs["flat/essential"],
    {
      rules: {
        "vue/html-self-closing": "off",
        "vue/multi-word-component-names": "off",
        "vue/max-attributes-per-line": "off",
        "vue/singleline-html-element-content-newline": "off",
      },
    },
  ];
  return config;
};
