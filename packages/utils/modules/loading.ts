import ora, { Options, Ora } from "ora";

class Loading {
  load: null | Ora;
  constructor() {
    this.load = null;
  }

  start(options: Options | string) {
    if (this.load) {
      this.load = null;
    }
    this.load = ora(
      (options = { ...(options as Options), spinner: "dots" })
    ).start();
  }
  stop() {
    this.load && this.load.stop();
  }
  clear() {
    this.load && this.load.clear();
  }
  warn(text: string) {
    this.load && this.load.warn(text);
  }
  info(text: string) {
    this.load && this.load.info(text);
  }
  succeed(text: string) {
    this.load && this.load.succeed(text);
  }
  fail(text: string) {
    this.load && this.load.fail(text);
  }
}

export const loading = new Loading();
