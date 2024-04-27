import { cPrimary } from "utils";
import inquirer from "inquirer";
import { initConfig } from "../handler/handlerInit.js";

export const handlerInit = async () => {
  const { langType } = await inquirer.prompt({
    type: "list",
    name: "langType",
    message: `Which language is used in your project`,
    choices: [
      { name: "JavaScript", value: 1 },
      { name: "TypeScript", value: 2 },
    ],
  });
  const { needCreateignoreFile } = await inquirer.prompt({
    type: "confirm",
    name: "needCreateignoreFile",
    message: `Do you need to create the .eslintignore file for you`,
  });
  // cPrimary(`安装依赖:${needInstallDependencies}`);
  // cPrimary(`生成ignoreFile:${needCreateignoreFile}`);
  // cPrimary(`使用哪种语言:${langType}`);
  initConfig({ langType, needCreateignoreFile });
};
