import { readFileSync } from "node:fs";
import { cError, cSuccess } from "./chalk.js";
import path from "node:path";
import fse from "fs-extra";

export const existsDir = async (path: string) => {
  try {
    const exists = await fse.pathExists(path);
    return exists;
  } catch (err) {
    cError(`Check directory existence failed: ${err}`);
    throw err;
  }
};

export const makeDir = async (path: string, showResult: boolean = false) => {
  try {
    await fse.mkdir(path);
    showResult && cSuccess(`Successfully create directory: ${path}`);
  } catch (err) {
    cError(`Create directory failed: ${err}`);
    throw err;
  }
};

export const removeDir = async (path: string, showResult: boolean = false) => {
  try {
    await fse.remove(path);
    showResult && cSuccess(`Successfully remove directory: ${path}`);
  } catch (err) {
    cError(`Remove directory failed: ${err}`);
    throw err;
  }
};

export const readFile = async (path: string) => {
  try {
    const file = await readFileSync(path, "utf8");
    return file;
  } catch (err) {
    cError(`Read directory failed: ${err}`);
    throw err;
  }
};

export const writeFile = async (
  dir: string,
  flieName: string,
  fileContent: string
) => {
  try {
    const filePath = path.join(dir, flieName);
    const isExistsDir = await existsDir(filePath);
    if (isExistsDir) await removeDir(filePath);
    fse.ensureDirSync(path.dirname(filePath));
    fse.writeFileSync(filePath, fileContent);
  } catch (err) {
    cError(`Write File failed: ${err}`);
    throw err;
  }
};
