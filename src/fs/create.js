import {writeFile} from 'node:fs/promises';
import errorsMessages from './messages/errors.js';
import path from 'node:path';
import dirname from "./dirname.js";

export const create = async () => {
    const neededFile = path.resolve(dirname, './files/fresh.txt');
    const content = 'I am fresh and young';

    try {
        await writeFile(neededFile, content, {flag: 'wx'});
    } catch (e) {
        if (e.code === 'EEXIST') {
            throw new Error(errorsMessages.fsOperationFiled);
        }

        throw e;
    }
};
