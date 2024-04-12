> eslint prettier stylelint 公共配置

## 安装前准备工作

> 使用该配置包前请确保已经正确安装 eslint prettier stylelint 包，如果您不知道怎么安装，请自行上网搜索相关文档安装。

## ESLint Config Of RyanYan

## Install

```bash
npm install @ovyvo/eslint-config -D
// or
yarn add @ovyvo/eslint-config -D
// or
pnpm install @ovyvo/eslint-config -D
```

## Usage

```javascript
// .eslintrc.cjs
module.exports = {
  extends: [
    // 引入您的配置包
    "@ovyvo/eslint-config",
    // 其他扩展或自定义规则
    ...
  ],
  // ...
};
```

## Prettier Config Of RyanYan

## Install

```bash
npm install @ovyvo/prettier-config -D
// or
yarn add @ovyvo/prettier-config -D
// or
pnpm install @ovyvo/prettier-config -D
```

## Usage

```javascript
// package.json
{
  "prettier": "@ovyvo/prettier-config"
}
```

## StyleLint Config Of RyanYan

## Install

```bash
npm install @ovyvo/stylelint-config -D
// or
yarn add @ovyvo/stylelint-config -D
// or
pnpm install @ovyvo/stylelint-config -D
```

## Usage

> 注意：@ovyvo/stylelint-config 中已引入"stylelint-config-standard"，"stylelint-order"，"stylelint-config-rational-order"常规配置，如您需要支持 less 或 scss 请安装相关 plugin 及 extends。

```javascript
// .stylelintrc.js
module.exports = {
  extends: [
    //配置已引入,
    "@ovyvo/stylelint-config",
    // ...
  ],
  rules: {
    // 自定义规则或覆盖继承来的规则
  },
  // 其他 Stylelint 配置项
};
```
