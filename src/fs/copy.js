import {cp} from 'node:fs/promises';
import errorsMessages from './messages/errors.js';
import path from 'node:path';
import dirname from "./dirname.js";

export const copy = async () => {
    const dirFrom = 'files';
    const dirTo = 'files_copy';

    const pathFrom = path.resolve(dirname, dirFrom);
    const pathTo = path.resolve(dirname, dirTo);

    try {
        await cp(pathFrom, pathTo, {recursive: true, errorOnExist: true, force: false});
    } catch (e) {
        if (e.code
            && (e.code === 'ENOENT' || e.code === 'ERR_FS_CP_EEXIST')
        ) {
            throw new Error(errorsMessages.fsOperationFiled);
        }
    }
};
