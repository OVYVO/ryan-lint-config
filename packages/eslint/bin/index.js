import process from "node:process";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import pkgJson from "../package.json";

yargs(hideBin(process.argv))
  .scriptName("@ovyvo/eslint-config")
  .command("*", "Run the initialization", (args) =>
    args.option("yes", {
      alias: "y",
      description: "Skip prompts and use default values",
      type: "boolean",
    })
  )
  .showHelpOnFail(false)
  .alias("h", "help")
  .version("version", pkgJson.version)
  .alias("v", "version");
