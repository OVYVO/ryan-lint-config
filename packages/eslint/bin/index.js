#! /usr/bin/env node
import { Command } from "commander";
import { helpOptions } from "./core/help.js";
import { createCommands } from "./core/create.js";

const program = new Command();

// 创建辅助指令
helpOptions();
// 添加其他指令
createCommands();

program.parse(process.argv);
