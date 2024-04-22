import { resolvePkg } from "utils";
export async function helpOptions(program) {
  const pkg = await resolvePkg(process.cwd());
  program.name(pkg.name);
  program.version(pkg.version);
  program.usage(`<command> [option]`);
}
