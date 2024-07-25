## ESLint Config Of RyanYan

> @ovyvo/elsint-config当前版本v2.1.0。相较v1.x，本次版本使用ts重构所有的项目代码，并全面拥抱eslint.config.js扁平化配置，工具内置vue2,vue3及对应的javascript、typescrit语言开发支持。当然您也可以不使用任何框架，只需要简单配置即可。

> [!WARNING]
> 本次更新弃用了v1.1.0命令交互式配置，受限于访问npm外网仓库及交互体验问题，现阶段不再支持。

## 使用须知

- 使用该插件您需要使用 Node.js（^18.18.0、^20.9.0 或 >=21.1.0）并支持 SSL。
- 使用该插件您的eslint版本应>=9，如您对此有疑问请参考 [eslint配置迁移指南](https://eslint.nodejs.cn/docs/latest/use/configure/migration-guide#google_vignette)
- 请务必保证代码编辑器安装eslint@3.x插件
- 启动eslint服务时如报错vsCode版本低请升级vsCode版本以获得完整的功能支持

## 安装

```bash
npm install @ovyvo/eslint-config@latest -D
// or
yarn add @ovyvo/eslint-config@latest -D
// or
pnpm add @ovyvo/eslint-config@latest -D
```

## .eslint.config.js配置

```javascript
import { defineConfig } from "@ovyvo/eslint-config";

export default defineConfig(options);
```

## options参数

| 属性         | 描述                             | 类型                             | 默认值       |
| ------------ | -------------------------------- | -------------------------------- | ------------ |
| frameType    | 框架类型                         | enum<'vue'\|'pure'>              | 'vue'        |
| frameVersion | 框架版本(frameType为vue时可选)   | enum<2\|3>                       | 3            |
| scriptType   | script类型                       | enum<'javascript'\|'typescript'> | 'javascript' |
| ignores      | 忽略文件(插件内置忽略文件见下表) | string[]                         | -            |
| overrides    | 重置或定制rules                  | String[]                         | -            |

## 内置忽略文件

```javascript
"*.sh",
"*.md",
"*.woff",
"*.ttf",
".vscode",
".husky",
".github",
"**/node_modules",
"**/dist",
"**/package-lock.json",
"**/yarn.lock",
"**/pnpm-lock.yaml",
"**/bun.lockb",
"**/CHANGELOG*.md",
"**/LICENSE*",
"**/auto-import?(s).d.ts",
"**/components.d.ts",
```
