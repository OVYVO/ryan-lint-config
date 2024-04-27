import ora from "ora";
import { cPrimary, cError, cWarning, cSuccess } from "./chalk.js";

class Loading {
  constructor() {
    this.load = null;
  }

  start(options) {
    if (this.load) {
      this.load = null;
    }
    this.load = ora(
      (options = {
        ...options,
        spinner: "dots",
      })
    ).start();
  }
  stop() {
    this.load && this.load.stop();
  }
  clear() {
    this.load && this.load.clear();
  }
  warn(text) {
    this.load && this.load.warn(cWarning(text));
  }
  info(text) {
    this.load && this.load.info(cPrimary(text));
  }
  succeed(text) {
    this.load && this.load.succeed(cSuccess(text));
  }
  fail(text) {
    this.load && this.load.fail(cError(text));
  }
}

export const loading = new Loading();
