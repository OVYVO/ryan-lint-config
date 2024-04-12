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

> 注意：如您想要配合 vscode 实现更加优雅的样式代码格式化，请安装推荐插件，并在您的项目工作区中增加以下配置

```javascript
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": "explicit"
  },
  "stylelint.validate": ["css", "scss", "less", "postcss"]
}
//.vscode/extensions.json
{
  "recommendations": ["stylelint.vscode-stylelint"]
}

```
