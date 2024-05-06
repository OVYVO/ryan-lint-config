export const eslintConfig = (langType = 1) => {
  const config = {
    extends: ["@ovyvo/eslint-config"],
    parserOptions: {},
    plugins: [],
  };
  if (langType == 2) {
    config.extends = [
      ...config.extends,
      "plugin:@typescript-eslint/recommended",
    ];
    config.parserOptions = {
      ...config.parserOptions,
      ...{ parse: "@typescript-eslint/parser" },
    };
    config.plugins = [...config.plugins, "@typescript-eslint"];
  }
  return `module.exports = ${JSON.stringify(config, null, 2)};\n`;
};
