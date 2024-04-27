import inquirer from "inquirer";
import { initConfig } from "../handler/handlerInit.js";

export const handlerInit = async () => {
  const { langType } = await inquirer.prompt({
    type: "list",
    name: "langType",
    message: `您的项目使用什么语言？`,
    choices: [
      { name: "JavaScript", value: 1 },
      { name: "TypeScript", value: 2 },
    ],
  });
  const { needCreateignoreFile } = await inquirer.prompt({
    type: "confirm",
    name: "needCreateignoreFile",
    message: `需要为您创建.gitignore文件吗？`,
  });
  initConfig({ langType, needCreateignoreFile });
};
