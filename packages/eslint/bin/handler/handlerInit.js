import * as u from "@ovyvo/cli-utils";
import * as t from "../template/index.js";

export const initConfig = async ({ langType, needCreateignoreFile } = {}) => {
  try {
    u.loading.start({ text: "👷正在为您安装基础依赖..." });
    await u.commandSpawn("pnpm", ["add", "@ovyvo/eslint-config", "-D"], {
      cwd: process.cwd(),
      stdio: "pipe",
    });
    u.loading.succeed(u.wSuccess("🚀 基础依赖安装完毕"));
    if (langType == 2) {
      u.loading.start({ text: "👷正在为您安装附加依赖..." });
      await u.commandSpawn("pnpm", ["add", "@typescript-eslint/parser", "-D"], {
        cwd: process.cwd(),
        stdio: "pipe",
      });
      u.loading.succeed(u.wSuccess("🚀 附加依赖安装完毕"));
    }
    u.loading.start({ text: "👷为您写入.eslint.cjs配置文件..." });
    const eslintFileContent = t.eslintConfig(langType);
    try {
      await u.writeFile(process.cwd(), ".eslint.cjs", eslintFileContent);
      u.loading.succeed(u.wSuccess("🚀 .eslint.cjs配置文件写入完毕..."));
    } catch (err) {
      u.loading.fail(u.wSuccess("🚨 .eslint.cjs文件写入错误..."));
    }
    if (needCreateignoreFile) {
      u.loading.start({ text: "👷为您写入.eslintignore配置文件..." });
      const ignoreFileContent = t.eslintIgnore();
      try {
        await u.writeFile(process.cwd(), ".eslintignore", ignoreFileContent);
        u.loading.succeed(u.wSuccess("🚀 .eslintignore配置文件写入完毕..."));
      } catch (err) {
        u.loading.fail(u.wSuccess("🚨 .eslintignore文件写入错误..."));
      }
    }
  } catch (error) {
    u.cError(`🚨抱歉, 初始化失败！报错信息: ${error}`);
    u.loading.clear();
  }
};
