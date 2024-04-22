import { resolvePkg } from "@utils/pkg";
import program from "commander";

export async function helpOptions() {
  const pkg = await resolvePkg(process.cwd());
  program.name(pkg.name);
  program.version(pkg.version);
  program.usage(`<command> [option]`);
}
