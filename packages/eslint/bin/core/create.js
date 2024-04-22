import { handlerCreateInit } from "./actions.js";

export const createCommands = (program) => {
  program
    .command("init")
    .description("Command Init")
    .option("-c, --config", "Show config info")
    .action(handlerCreateInit);
};
