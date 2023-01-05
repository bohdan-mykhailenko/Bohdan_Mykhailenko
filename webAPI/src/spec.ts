import { CONFIG } from "../config";
import { deleteFile, getFileMetadata, uploadFile } from "./index"
import 'jasmine';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe("Test Dropbox API:", () => {
  it("uploading test file(size < 150MB) work properly", async () => {
    const isUploadFile = await uploadFile(CONFIG.FILE_PATH);
    if (isUploadFile) {
      expect(isUploadFile.status).toBe(200);
    }
  })

  it("getting test file metadata work properly", async () => {
    const isGetFileMetadata = await getFileMetadata(CONFIG.FILE_PATH);
    expect(isGetFileMetadata.status).toBe(200);
  })

  it("deleting test file metadata work properly", async () => {
    const isDeleteFile = await deleteFile(CONFIG.FILE_PATH);
    expect(isDeleteFile.status).toBe(200)
  })
})