import fs from "fs";
import path from "path";

export const resolvePkg = async (context) => {
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
