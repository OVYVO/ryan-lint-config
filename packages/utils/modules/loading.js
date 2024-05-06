import ora from "ora";

class Loading {
  constructor() {
    this.load = null;
  }

  start(options) {
    if (this.load) {
      this.load = null;
    }
    this.load = ora((options = { ...options, spinner: "dots" })).start();
  }
  stop() {
    this.load && this.load.stop();
  }
  clear() {
    this.load && this.load.clear();
  }
  warn(text) {
    this.load && this.load.warn(text);
  }
  info(text) {
    this.load && this.load.info(text);
  }
  succeed(text) {
    this.load && this.load.succeed(text);
  }
  fail(text) {
    this.load && this.load.fail(text);
  }
}

export const loading = new Loading();
