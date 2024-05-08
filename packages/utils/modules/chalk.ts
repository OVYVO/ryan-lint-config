/**
 * chalk控制台输出
 * 风格参照Antd
 */

import chalk from "chalk";
//输出
export const cPrimary = (text: string) =>
  console.log(chalk.hex("#1890ff").bold(text));
export const cError = (text: string) =>
  console.log(chalk.hex("#f5222d").bold(text));
export const cWarning = (text: string) =>
  console.log(chalk.hex("#faad14").bold(text));
export const cSuccess = (text: string) =>
  console.log(chalk.hex("#52c41a").bold(text));
//着色
export const wPrimary = (text: string) => chalk.hex("#1890ff").bold(text);
export const wError = (text: string) => chalk.hex("#f5222d").bold(text);
export const wWarning = (text: string) => chalk.hex("#faad14").bold(text);
export const wSuccess = (text: string) => chalk.hex("#52c41a").bold(text);
