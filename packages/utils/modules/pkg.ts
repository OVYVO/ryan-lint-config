import path from "node:path";
import { existsDir, readFile } from "./file";

export const resolvePkg = async (context: string) => {
  const filePath = path.join(context, "package.json");
  if (await existsDir(filePath)) {
    try {
      const packageJsonContent = await readFile(filePath);
      return JSON.parse(packageJsonContent);
    } catch (error) {
      console.error(error);
    }
  } else {
    return {};
  }
};
