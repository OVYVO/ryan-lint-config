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
  initConfig({ langType });
};
