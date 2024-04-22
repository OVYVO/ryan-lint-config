import fs from "fs";
import path from "path";
import { readPackage } from "read-pkg";

export const resolvePkg = async (context) => {
  if (fs.existsSync(path.join(context, "package.json"))) {
    return await readPackage({ cwd: context });
  }
  return {};
};
