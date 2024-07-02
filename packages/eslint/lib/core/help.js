import { resolvePkg } from "@ovyvo/cli-utils";
export async function helpOptions(program) {
  const pkgFileContent = await resolvePkg(process.cwd());
  program.name(pkgFileContent.name);
  program.version(pkgFileContent.version);
  program.usage(`<command> [option]`);
}
