const fs = require("node:fs");
const path = require("node:path");

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
