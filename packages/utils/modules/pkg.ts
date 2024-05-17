import fs from "node:fs";
import path from "node:path";

export const resolvePkg = async (context: string) => {
  const filePath = path.join(context, "package.json");
  if (fs.existsSync(filePath)) {
    try {
      const packageJsonContent = await fs.promises.readFile(filePath, "utf-8");
      return JSON.parse(packageJsonContent);
    } catch (error) {
      console.error(error);
    }
  } else {
    return {};
  }
};
