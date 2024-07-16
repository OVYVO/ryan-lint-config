import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    ignores: [
      "*.sh",
      "*.md",
      "*.woff",
      "*.ttf",
      ".vscode",
      ".husky",
      ".github",
      "**/node_modules/**/*",
      "**/dist/**/*",
      "**/lib/**/*",
      "**/types/**/*.d.ts",
    ],
    files: ["**/*.{js,mjs,cjs,vue}"],
  },
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
