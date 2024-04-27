export const eslintConfig = (langType = 1) => {
  `module.exports = {
    extends: [
      ${langType == 2 && "plugin:@typescript-eslint/recommended,"}
      "@ovyvo/eslint-config",
    ],
    parserOptions: {
      ${langType == 2 && "parser: '@typescript-eslint/parser'"}
    },
    plugins: [
      ${langType == 2 && "@typescript-eslint"}
    ]
  };`;
};
