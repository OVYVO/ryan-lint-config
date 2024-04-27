import path from "path";
import * as u from "utils";
import { eslintConfig, eslintIgnore } from "../template";

export const initConfig = async ({ langType, needCreateignoreFile } = {}) => {
  //执行命令直接安装@ovyvo/eslint-config
  //1.判断是否是ts 安装相关依赖 修改项目模板中的内容 @typescript-eslint
  //2.判断是否需要ignore文件将ignore文件添加到项目的根目录
  //3.添加执行脚本
  try {
    u.cPrimary("正在为您安装基础依赖");
    u.loading.start({ text: "请稍等..." });
    await u.commandSpawn(pnpm, ["add", "@ovyvo/eslint-config"], {
      cwd: process.cwd(),
      stdio: "pipe",
    });
    u.loading.succeed("安装完毕!");
    if (langType == 2) {
      u.cPrimary("正在为您安装附加依赖");
      u.loading.start({ text: "请稍等..." });
      await u.commandSpawn(pnpm, ["add", "@typescript-eslint/parser"], {
        cwd: process.cwd(),
        stdio: "pipe",
      });
      u.loading.succeed("安装完毕!");
    }
    u.loading.start({ text: "为您写入.eslint.cjs配置文件..." });
    const eslintFileContent = eslintConfig(langType);
    await u.writeFile(process.cwd(), "eslint.cjs", eslintFileContent);
    u.loading.succeed({ text: "eslint.cjs配置文件写入完毕..." });
    if (needCreateignoreFile) {
      u.loading.start({ text: "为您写入.eslintignore配置文件..." });
      const ignoreFileContent = eslintIgnore();
      await u.writeFile(process.cwd(), ".eslintignore", ignoreFileContent);
      u.loading.succeed({ text: ".eslintignore配置文件写入完毕..." });
    }
  } catch (error) {
    cError("抱歉, 初始化失败！报错信息: ${error}");
  }
};
