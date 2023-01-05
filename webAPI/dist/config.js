"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
const dropbox_1 = require("dropbox");
const dotenv_1 = require("dotenv");
const app_root_path_1 = __importDefault(require("app-root-path"));
const configuration = () => {
    (0, dotenv_1.config)({ path: `${app_root_path_1.default}/.env` });
    const { DROPBOX_O2AUTH_TOKEN, FILE_PATH } = process.env;
    const DBX = new dropbox_1.Dropbox({
        accessToken: DROPBOX_O2AUTH_TOKEN,
    });
    return {
        DROPBOX_O2AUTH_TOKEN,
        FILE_PATH,
        DBX,
    };
};
const CONFIG = configuration();
exports.CONFIG = CONFIG;
//# sourceMappingURL=config.js.map