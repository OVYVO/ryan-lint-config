import { cPrimary } from "utils";
import inquirer from "inquirer";

export const handlerInit = async () => {
  const { needInstallDependencies } = await inquirer.prompt({
    type: "confirm",
    name: "needInstallDependencies",
    message: `Do you need to install dependencies for you`,
  });
  const { needCreateignoreFile } = await inquirer.prompt({
    type: "confirm",
    name: "needCreateignoreFile",
    message: `Do you need to create the .eslintignore file for you`,
  });
  cPrimary(`安装依赖:${needInstallDependencies}`);
  cPrimary(`生成ignoreFile:${needCreateignoreFile}`);
};
