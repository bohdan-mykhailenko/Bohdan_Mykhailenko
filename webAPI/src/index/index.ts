import fs from 'fs'
import { CONFIG } from '../../config';

export const uploadFile = async (path: string) => {
  const fsPath = '.' + path;
  const fsStats = fs.statSync(fsPath);

  if (fsStats.size / (1024 ^ 2) < 150) {
    try {
      return await CONFIG.DBX.filesUpload({ path: path })
    } catch (error) {
      throw error;
    }
  }
}

export const getFileMetadata = async (path: string) => {
  try {
    return await CONFIG.DBX.filesGetMetadata({ path: path })
  } catch (error) {
    throw error;
  }
}

export const deleteFile = async (path: string) => {
  try {
    return await CONFIG.DBX.filesDeleteV2({ path: path })
  } catch (error) {
    throw error;
  }
}

