(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('chalk'), require('ora'), require('fs-extra')) :
    typeof define === 'function' && define.amd ? define(['exports', 'chalk', 'ora', 'fs-extra'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.cliUtils = {}, global.chalk, global.ora, global.fs$1));
})(this, (function (exports, chalk, ora, fs$1) { 'use strict';

    /**
     * chalk控制台输出
     * 风格参照Antd
     */
    //输出
    var cPrimary = function (text) {
        return console.log(chalk.hex("#1890ff").bold(text));
    };
    var cError = function (text) {
        return console.log(chalk.hex("#f5222d").bold(text));
    };
    var cWarning = function (text) {
        return console.log(chalk.hex("#faad14").bold(text));
    };
    var cSuccess = function (text) {
        return console.log(chalk.hex("#52c41a").bold(text));
    };
    //着色
    var wPrimary = function (text) { return chalk.hex("#1890ff").bold(text); };
    var wError = function (text) { return chalk.hex("#f5222d").bold(text); };
    var wWarning = function (text) { return chalk.hex("#faad14").bold(text); };
    var wSuccess = function (text) { return chalk.hex("#52c41a").bold(text); };

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */

    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function () {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    var fs = require("node:fs");
    var path$1 = require("node:path");
    var resolvePkg = function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var filePath, packageJsonContent, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filePath = path$1.join(context, "package.json");
                    if (!fs.existsSync(filePath)) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fs.promises.readFile(filePath, "utf-8")];
                case 2:
                    packageJsonContent = _a.sent();
                    return [2 /*return*/, JSON.parse(packageJsonContent)];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5: return [2 /*return*/, {}];
                case 6: return [2 /*return*/];
            }
        });
    }); };

    var Loading = /** @class */ (function () {
        function Loading() {
            this.load = null;
        }
        Loading.prototype.start = function (options) {
            if (this.load) {
                this.load = null;
            }
            this.load = ora((options = __assign(__assign({}, options), { spinner: "dots" }))).start();
        };
        Loading.prototype.stop = function () {
            this.load && this.load.stop();
        };
        Loading.prototype.clear = function () {
            this.load && this.load.clear();
        };
        Loading.prototype.warn = function (text) {
            this.load && this.load.warn(text);
        };
        Loading.prototype.info = function (text) {
            this.load && this.load.info(text);
        };
        Loading.prototype.succeed = function (text) {
            this.load && this.load.succeed(text);
        };
        Loading.prototype.fail = function (text) {
            this.load && this.load.fail(text);
        };
        return Loading;
    }());
    var loading = new Loading();

    var spawn = require("node:child_process").spawn;
    var commandSpawn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            var childProcess = spawn.apply(void 0, args);
            // 在父进程中显示子进程中的标准输出流输出的信息
            // childProcess.stdout?.pipe(process.stdout)
            // 在父进程中显示子进程中的标准输出流输出的错误信息
            // childProcess.stderr?.pipe(process.stderr)
            childProcess.on("close", function () {
                resolve();
            });
            childProcess.on("error", function (err) {
                reject(err);
            });
        });
    };

    var readFileSync = require("node:fs").readFileSync;
    var path = require("node:path");
    var existsDir = function (path) { return __awaiter(void 0, void 0, void 0, function () {
        var exists, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs$1.pathExists(path)];
                case 1:
                    exists = _a.sent();
                    return [2 /*return*/, exists];
                case 2:
                    err_1 = _a.sent();
                    cError("Check directory existence failed: ".concat(err_1));
                    throw err_1;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var makeDir = function (path_1) {
        var args_1 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args_1[_i - 1] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([path_1], args_1, true), void 0, function (path, showResult) {
            var err_2;
            if (showResult === void 0) { showResult = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs$1.mkdir(path)];
                    case 1:
                        _a.sent();
                        showResult && cSuccess("Successfully create directory: ".concat(path));
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        cError("Create directory failed: ".concat(err_2));
                        throw err_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var removeDir = function (path_1) {
        var args_1 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args_1[_i - 1] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([path_1], args_1, true), void 0, function (path, showResult) {
            var err_3;
            if (showResult === void 0) { showResult = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs$1.remove(path)];
                    case 1:
                        _a.sent();
                        showResult && cSuccess("Successfully remove directory: ".concat(path));
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        cError("Remove directory failed: ".concat(err_3));
                        throw err_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var readFile = function (path) { return __awaiter(void 0, void 0, void 0, function () {
        var file, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, readFileSync(path, "utf8")];
                case 1:
                    file = _a.sent();
                    return [2 /*return*/, file];
                case 2:
                    err_4 = _a.sent();
                    cError("Read directory failed: ".concat(err_4));
                    throw err_4;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var writeFile = function (dir, flieName, fileContent) { return __awaiter(void 0, void 0, void 0, function () {
        var filePath, isExistsDir, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    filePath = path.join(dir, flieName);
                    return [4 /*yield*/, existsDir(filePath)];
                case 1:
                    isExistsDir = _a.sent();
                    if (!isExistsDir) return [3 /*break*/, 3];
                    return [4 /*yield*/, removeDir(filePath)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    fs$1.ensureDirSync(path.dirname(filePath));
                    fs$1.writeFileSync(filePath, fileContent);
                    return [3 /*break*/, 5];
                case 4:
                    err_5 = _a.sent();
                    cError("Write File failed: ".concat(err_5));
                    throw err_5;
                case 5: return [2 /*return*/];
            }
        });
    }); };

    exports.cError = cError;
    exports.cPrimary = cPrimary;
    exports.cSuccess = cSuccess;
    exports.cWarning = cWarning;
    exports.commandSpawn = commandSpawn;
    exports.existsDir = existsDir;
    exports.loading = loading;
    exports.makeDir = makeDir;
    exports.readFile = readFile;
    exports.removeDir = removeDir;
    exports.resolvePkg = resolvePkg;
    exports.wError = wError;
    exports.wPrimary = wPrimary;
    exports.wSuccess = wSuccess;
    exports.wWarning = wWarning;
    exports.writeFile = writeFile;

}));
