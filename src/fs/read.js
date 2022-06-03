import {readFile} from 'node:fs/promises';
import errorsMessages from "./messages/errors.js";
import path from "node:path";
import dirname from "./dirname.js";

export const read = async () => {
    const neededFile = path.resolve(dirname, './files/fileToRead.txt');

    try {
        const content = await readFile(neededFile);
        console.log('' + content);
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw new Error(errorsMessages.fsOperationFiled);
        }

        throw e;
    }
};
