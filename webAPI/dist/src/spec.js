"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const index_1 = require("./index");
require("jasmine");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
describe("Test Dropbox API:", () => {
    it("uploading test file(size < 150MB) work properly", async () => {
        const isUploadFile = await (0, index_1.uploadFile)(config_1.CONFIG.FILE_PATH);
        if (isUploadFile) {
            expect(isUploadFile.status).toBe(200);
        }
    });
    it("getting test file metadata work properly", async () => {
        const isGetFileMetadata = await (0, index_1.getFileMetadata)(config_1.CONFIG.FILE_PATH);
        expect(isGetFileMetadata.status).toBe(200);
    });
    it("deleting test file metadata work properly", async () => {
        const isDeleteFile = await (0, index_1.deleteFile)(config_1.CONFIG.FILE_PATH);
        expect(isDeleteFile.status).toBe(200);
    });
});
//# sourceMappingURL=spec.js.map