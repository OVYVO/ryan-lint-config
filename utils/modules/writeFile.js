import fs from "fs-extra";
import path from "path";

const deleteRemovedFiles = (directory, newFiles, previousFiles = []) => {
  const filesToDelete = previousFiles.filter((filename) => !newFiles[filename]);
  if (!filesToDelete.length) return;
  return Promise.all(
    filesToDelete.map((filename) => {
      return fs.unlink(path.join(directory, filename));
    })
  );
};

export const writeFileTree = async (dir, files, previousFiles = []) => {
  if (previousFiles.length) {
    await deleteRemovedFiles(dir, files, previousFiles);
  }
  Object.keys(files).forEach((name) => {
    const filePath = path.join(dir, name);
    fs.ensureDirSync(path.dirname(filePath));
    fs.writeFileSync(filePath, files[name]);
  });
};

export const writeFile = async (dir, flieName, fileContent) => {
  const filePath = path.join(dir, flieName);
  try {
    fs.access(filePath, fs.constants.F_OK);
    fs.unlink(filePath);
  } catch (error) {
    console.error;
  }
  fs.ensureDirSync(path.dirname(filePath));
  fs.writeFileSync(filePath, fileContent);
};
