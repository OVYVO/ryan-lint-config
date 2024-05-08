/**
 * chalk控制台输出
 * 风格参照Antd
 */

import chalk from "chalk";
//输出
export const cPrimary = (text) => console.log(chalk.hex("#1890ff").bold(text));
export const cError = (text) => console.log(chalk.hex("#f5222d").bold(text));
export const cWarning = (text) => console.log(chalk.hex("#faad14").bold(text));
export const cSuccess = (text) => console.log(chalk.hex("#52c41a").bold(text));
//着色
export const wPrimary = (text) => chalk.hex("#1890ff").bold(text);
export const wError = (text) => chalk.hex("#f5222d").bold(text);
export const wWarning = (text) => chalk.hex("#faad14").bold(text);
export const wSuccess = (text) => chalk.hex("#52c41a").bold(text);
