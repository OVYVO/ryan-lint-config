const { spawn } = require("node:child_process");

export const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args);
    // 在父进程中显示子进程中的标准输出流输出的信息
    // childProcess.stdout?.pipe(process.stdout)
    // 在父进程中显示子进程中的标准输出流输出的错误信息
    // childProcess.stderr?.pipe(process.stderr)
    childProcess.on("close", () => {
      resolve();
    });
    childProcess.on("error", (err) => {
      reject(err);
    });
  });
};
