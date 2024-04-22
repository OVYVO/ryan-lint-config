import { resolvePkg } from "../utils/pkg.js";
import { Command } from "commander";

const program = new Command();
export async function helpOptions() {
  const pkg = await resolvePkg(process.cwd());
  program.name(pkg.name);
  program.version(pkg.version);
  program.usage(`<command> [option]`);
}
