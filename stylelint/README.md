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
