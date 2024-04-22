/**
 * chalk控制台输出
 * 风格参照Antd
 */

import chalk from "chalk";

export const cPrimary = (text) => chalk.hex("#1890ff").bold(text);
export const cError = (text) => chalk.hex("#f5222d").bold(text);
export const cWarning = (text) => chalk.hex("#faad14").bold(text);
export const cSuccess = (text) => chalk.hex("#52c41a").bold(text);
