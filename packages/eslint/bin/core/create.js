import { handlerInit } from "./actions.js";

export const createCommands = (program) => {
  program
    .command("init")
    .description("Initialize eslint configuration. Currently only supports Vue")
    .action(handlerInit);
};
