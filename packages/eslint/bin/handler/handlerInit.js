import * as u from "utils";
import * as t from "../template/index.js";

export const initConfig = async ({ langType, needCreateignoreFile } = {}) => {
  try {
    u.loading.start({ text: "正在为您安装基础依赖..." });
    await u.commandSpawn("pnpm", ["add", "@ovyvo/eslint-config", "-D"], {
      cwd: process.cwd(),
      stdio: "pipe",
    });
    u.loading.succeed("基础依赖安装完毕");
    if (langType == 2) {
      u.loading.start({ text: "正在为您安装附加依赖..." });
      await u.commandSpawn("pnpm", ["add", "@typescript-eslint/parser", "-D"], {
        cwd: process.cwd(),
        stdio: "pipe",
      });
      u.loading.succeed("附加依赖安装完毕");
    }
    u.loading.start({ text: "为您写入.eslint.cjs配置文件..." });
    const eslintFileContent = t.eslintConfig(langType);
    await u.writeFile(process.cwd(), ".eslint.cjs", eslintFileContent);
    u.loading.succeed(".eslint.cjs配置文件写入完毕...");
    if (needCreateignoreFile) {
      u.loading.start({ text: "为您写入.eslintignore配置文件..." });
      const ignoreFileContent = t.eslintIgnore();
      await u.writeFile(process.cwd(), ".eslintignore", ignoreFileContent);
      u.loading.succeed(".eslintignore配置文件写入完毕...");
    }
  } catch (error) {
    u.cError(`抱歉, 初始化失败！报错信息: ${error}`);
    u.loading.clear();
  }
};
