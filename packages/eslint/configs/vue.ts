import pluginVue from "eslint-plugin-vue";
import globals from "globals";

export const createVueConfig = (config: any) => {
  const { vueVersion = 3 } = config;
  //区分vue2与vue3分别加载不同的规则
  const versionConfig =
    vueVersion == 3
      ? pluginVue.configs["flat/essential"]
      : pluginVue.configs["flat/vue2-essential"];

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
    ...versionConfig,
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
