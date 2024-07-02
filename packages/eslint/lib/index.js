#! /usr/bin/env node
import { Command } from "commander";
import { createCommands } from "./core/create.js";

const program = new Command();

// 添加其他指令
createCommands(program);

program.parse(process.argv);
