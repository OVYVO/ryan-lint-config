const { readFileSync } = require("node:fs");
const path = require("node:path");
import fs from "fs-extra";
import { cError, cSuccess } from "./chalk.js";

export const existsDir = async (path) => {
  try {
    const exists = await fs.pathExists(path);
    return exists;
  } catch (err) {
    cError(`Check directory existence failed: ${err}`);
    throw err;
  }
};

export const makeDir = async (path, showResult = false) => {
  try {
    await fs.mkdir(path);
    showResult && cSuccess(`Successfully create directory: ${path}`);
  } catch (err) {
    cError(`Create directory failed: ${err}`);
    throw err;
  }
};

export const removeDir = async (path, showResult = false) => {
  try {
    await fs.remove(path);
    showResult && cSuccess(`Successfully remove directory: ${path}`);
  } catch (err) {
    cError(`Remove directory failed: ${err}`);
    throw err;
  }
};

export const readFile = async (path) => {
  try {
    const file = await readFileSync(path, "utf8");
    return file;
  } catch (err) {
    cError(`Read directory failed: ${err}`);
    throw err;
  }
};

export const writeFile = async (dir, flieName, fileContent) => {
  try {
    const filePath = path.join(dir, flieName);
    const isExistsDir = await existsDir(filePath);
    if (isExistsDir) await removeDir(filePath);
    fs.ensureDirSync(path.dirname(filePath));
    fs.writeFileSync(filePath, fileContent);
  } catch (err) {
    cError(`Write File failed: ${err}`);
    throw err;
  }
};
