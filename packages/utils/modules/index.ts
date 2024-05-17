import * as chalk from "./chalk";
import * as pkg from "./pkg";
import * as loading from "./loading";
import * as terminal from "./terminal";
import * as file from "./file";

export default {
  ...chalk,
  ...pkg,
  ...loading,
  ...terminal,
  ...file,
};
