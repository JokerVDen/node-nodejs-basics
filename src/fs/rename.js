import fs from 'node:fs/promises';
import {fileExist, FILE_EXIST} from "./helpers/file_exists.js";
import errorsMessages from './messages/errors.js';
import path from 'node:path';
import dirname from "./dirname.js";

export const rename = async () => {
    const filesDir = './files';
    const fileFrom = 'wrongFilename.txt';
    const fileTo = 'properFilename.md';

    const pathFrom = path.resolve(dirname, filesDir, fileFrom);
    const pathTo = path.resolve(dirname, filesDir, fileTo);

    if (await fileExist(pathTo)) {
        throw new Error(errorsMessages.fsOperationFiled);
    }

    try {
        await fs.rename(pathFrom, pathTo);
    } catch (e) {
        if (e.code && (e.code === 'ENOENT' || e.code === FILE_EXIST)) {
            throw new Error(errorsMessages.fsOperationFiled);
        }

        throw new e;
    }
};
