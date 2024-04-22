import program from "commander";
import { handlerCreateInit } from "./core/actions";

export const createCommands = () => {
  program
    .command("init")
    .description("Command Init")
    .option("-c, --config", "Show config info")
    .action(handlerCreateInit);
};
