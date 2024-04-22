import { Command } from "commander";
import { handlerCreateInit } from "./actions.js";

const program = new Command();

export const createCommands = () => {
  program
    .command("init")
    .description("Command Init")
    .option("-c, --config", "Show config info")
    .action(() => {
      console.log(111111);
    });
};
