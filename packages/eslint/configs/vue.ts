import pluginVue from "eslint-plugin-vue";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export const createVueConfig = (config: any) => {
  const { frameVersion, scriptType, overrides } = config;
  //区分vue2与vue3分别加载不同的规则
  const versionConfig =
    frameVersion == 3
      ? pluginVue.configs["flat/essential"]
      : pluginVue.configs["flat/vue2-essential"];

  //区分js与ts分别加载不同的规则
  const scriptConfig =
    scriptType == "typescript"
      ? [
          ...tseslint.configs.recommended,
          {
            files: ["**/*.vue"],
            languageOptions: { parserOptions: { parser: tseslint.parser } },
          },
        ]
      : [];

  return [
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
    pluginJs.configs.recommended,
    ...versionConfig,
    ...scriptConfig,
    {
      rules: {
        "vue/html-self-closing": "off",
        "vue/multi-word-component-names": "off",
        "vue/max-attributes-per-line": "off",
        "vue/singleline-html-element-content-newline": "off",
        ...overrides,
      },
    },
  ];
};
