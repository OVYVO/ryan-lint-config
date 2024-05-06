export const eslintConfig = (langType = 1) => {
  let cExtends = ["@ovyvo/eslint-config"];
  let cParserOptions = {};
  let plugins = [];
  if (langType == 2) {
    cExtends.push("plugin:@typescript-eslint/recommended");
    cParserOptions.parser = "@typescript-eslint/parser";
    plugins.push("@typescript-eslint");
  }
  return `module.exports = {
  extends: ${JSON.stringify(cExtends)},
  parserOptions: ${JSON.stringify(cParserOptions)},
  plugins: ${JSON.stringify(plugins)}
};`;
};
