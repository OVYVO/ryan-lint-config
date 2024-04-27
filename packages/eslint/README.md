## ESLint Config Of RyanYan

## Install

> 🎉🎉🎉最新版本支持使用npx命令初始化eslint配置啦！！！

执行npx命令会自动帮您安装依赖并在项目的根目录下创建.eslint.cjs文件及.eslintignore文件。并且根据项目使用语言自动添加依赖

- 目前仅支持Vue3项目配置
- 目前仅提供javaScript及typeScript的基础配置

```bash
npx @ovyvo/eslint-config@latest init
```

> 当然您也可以选择手动安装

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
