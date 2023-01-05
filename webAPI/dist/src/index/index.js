"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.getFileMetadata = exports.uploadFile = void 0;
const fs_1 = __importDefault(require("fs"));
const config_1 = require("../../config");
const uploadFile = async (path) => {
    const fsPath = '.' + path;
    const fsStats = fs_1.default.statSync(fsPath);
    if (fsStats.size / (1024 ^ 2) < 150) {
        try {
            return await config_1.CONFIG.DBX.filesUpload({ path: path });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.uploadFile = uploadFile;
const getFileMetadata = async (path) => {
    try {
        return await config_1.CONFIG.DBX.filesGetMetadata({ path: path });
    }
    catch (error) {
        throw error;
    }
};
exports.getFileMetadata = getFileMetadata;
const deleteFile = async (path) => {
    try {
        return await config_1.CONFIG.DBX.filesDeleteV2({ path: path });
    }
    catch (error) {
        throw error;
    }
};
exports.deleteFile = deleteFile;
//# sourceMappingURL=index.js.map