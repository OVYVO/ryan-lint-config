## 脚手架工具函数

## 安装

```bash
npm install @ovyvo/cli-utils
// or
yarn add @ovyvo/cli-utils
// or
pnpm add @ovyvo/cli-utils
```

## 使用

```bash
const u from "@ovyvo/cli-utils";
u.cPrimary('hello')
```

## 工具列表

- chalk模块：控制台打印带颜色的字符串
  | 函数 | 参数 | 描述 | 备注 |
  |--|--|--|--|
  | cPrimary | text:string | 打印默认文本 | #1890ff |
  | cError | text:string | 打印错误文本 | #f5222d |
  | cWarning | text:string | 打印警告文本 | #faad14 |
  | cSuccess | text:string | 打印成功文本 | #52c41a |
  | wPrimary | text:string | 默认文本 | #1890ff |
  | wError | text:string | 错误文本 | #f5222d |
  | wWarning | text:string | 警告文本 | #faad14 |
  | wSuccess | text:string | 成功文本 | #52c41a |

- file模块：文件系统的增删读写
  | 函数 | 参数 | 描述 | 备注 |
  |--|--|--|--|
  | existsDir | path:string | 目录是否存在 | - |
  | makeDir | path:string | 生成目录 | - |
  | removeDir | path:string | 移除目录 | - |
  | readFile | path:string | 读取文件 | - |
  | writeFile | path:string,flieName:string,fileContent:string | 写入文件 | - |

- loading模块：终端loading效果 (export: class loading)
  | 函数 | 参数 | 描述 | 备注 |
  |--|--|--|--|
  | start | config | loading开始 | - |
  | stop | - | loading结束 | - |
  | clear | - | loading清除 | - |
  | warn | - | 警告loading | - |
  | info | - | 信息loading | - |
  | succeed | - | loading成功 | - |
  | fail | - | loading失败 | - |

> config参数详见：[ora关于config的配置](https://www.npmjs.com/package/ora#options)

- pkg模块：读取package.json文件
  | 函数 | 参数 | 描述 | 备注 |
  |--|--|--|--|
  | resolvePkg | context:cwd | 获取当前目录下的package.json文件 | - |

- terminal模块：命令行执行
  | 函数 | 参数 | 描述 | 备注 |
  |--|--|--|--|
  | commandSpawn | ...args | node spawn Api的封装 | - |
