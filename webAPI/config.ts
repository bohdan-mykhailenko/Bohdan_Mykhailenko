// @ts-ignore
import { Dropbox } from 'dropbox'
import { config } from 'dotenv';
import rootPath from 'app-root-path';


interface IConfig {
  DROPBOX_O2AUTH_TOKEN: any;
  FILE_PATH: any;
  DBX: any;
}

const configuration = (): IConfig => {
  config({ path: `${rootPath}/.env` });
  const { DROPBOX_O2AUTH_TOKEN, FILE_PATH } = process.env;

  const DBX = new Dropbox({
    accessToken: DROPBOX_O2AUTH_TOKEN,
  })

  return {
    DROPBOX_O2AUTH_TOKEN,
    FILE_PATH,
    DBX,
  };
};

const CONFIG = configuration();

export { CONFIG };