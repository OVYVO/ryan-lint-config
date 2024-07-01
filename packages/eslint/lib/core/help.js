import { pkg } from "@ovyvo/cli-utils";
export async function helpOptions(program) {
  const pkgFileContent = await pkg.resolvePkg(process.cwd());
  program.name(pkgFileContent.name);
  program.version(pkgFileContent.version);
  program.usage(`<command> [option]`);
}
