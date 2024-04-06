> eslint prettier stylelint 公共配置

## 安装前准备工作

> 使用该配置包前请确保已经正确安装 eslint prettier stylelint 包，如果您不知道怎么安装，请自行上网搜索相关文档安装。

## 安装

```shell
npm install @yan/lint-config -D
// or
yarn add @yan/lint-config -D
// or
pnpm install @yan/lint-config -D
```

## 使用

- **ESLint**:

  ```javascript
  // .eslintrc.cjs
  module.exports = {
    extends: [
      // 引入您的配置包
      "@yan/lint-config/eslint",
      // 可能还有其他扩展或自定义规则
    ],
    // ...
  };
  ```

- **Prettier**: 如果您的配置包仅包含 Prettier 配置文件，用户可以直接使用；如果还包含 ESLint 规则，则可能需要额外处理。通常情况下，Prettier 的配置相对独立，无需显式“继承”。

- **Stylelint**:

  ```javascript
  // .stylelintrc.js
  module.exports = {
    extends: [
      // 引入您的配置包
      "@yan/lint-config/stylelint",
      // 可能还有其他扩展或自定义规则
    ],
    // ...
  };
  ```

## LICENSE

[MIT](LICENSE)
