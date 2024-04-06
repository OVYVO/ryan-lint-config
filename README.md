> eslint prettier stylelint 公共配置

## 安装前准备工作

> 使用该配置包前请确保已经正确安装 eslint prettier stylelint 包，如果您不知道怎么安装，请自行上网搜索相关文档安装。

## ESLint Config Of RyanYan

## Install

```bash
npm install @yan/eslint-config -D
// or
yarn add @yan/eslint-config -D
// or
pnpm install @yan/eslint-config -D
```

## Usage

```javascript
// .eslintrc.cjs
module.exports = {
  extends: [
    // 引入您的配置包
    "@yan/eslint-config",
    // 其他扩展或自定义规则
    ...
  ],
  // ...
};
```

## Prettier Config Of RyanYan

## Install

```bash
npm install @yan/prettier-config -D
// or
yarn add @yan/prettier-config -D
// or
pnpm install @yan/prettier-config -D
```

## Usage

```javascript
// package.json
{
  "prettier": "@yan/prettier-config"
}
```

## Prettier Config Of RyanYan

## Install

```bash
npm install @yan/stylelint-config -D
// or
yarn add @yan/stylelint-config -D
// or
pnpm install @yan/stylelint-config -D
```

## Usage

> 注意：@yan/stylelint-config 中已引入"stylelint-config-standard"，"stylelint-order"，"stylelint-config-rational-order"常规配置，如您需要支持 less 或 scss 请安装相关 plugin 及 extends。

```javascript
// .stylelintrc.js
module.exports = {
  extends: [
    //配置已引入,
    "@yan/stylelint-config",
    // ...
  ],
  rules: {
    // 自定义规则或覆盖继承来的规则
  },
  // 其他 Stylelint 配置项
};
```
