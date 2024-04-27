export const eslintConfig = (langType = 1) => {
  return `module.exports = {
    extends: [
      "@ovyvo/eslint-config",
      "${langType == 2 && "plugin:@typescript-eslint/recommended"}"
    ],
    parserOptions: {
      ${langType == 2 && "parser:"} "${langType == 2 && "@typescript-eslint/parser"}"
    },
    plugins: [
      "${langType == 2 && "@typescript-eslint"}"
    ]
  };`;
};
