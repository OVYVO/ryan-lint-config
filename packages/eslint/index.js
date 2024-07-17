import pluginJs from "@eslint/js";

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
  pluginJs.configs.recommended,
];
