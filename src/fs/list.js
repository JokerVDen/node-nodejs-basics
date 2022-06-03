import {readdir} from 'node:fs/promises';
import errorsMessages from "./messages/errors.js";
import path from "node:path";
import dirname from "./dirname.js";

export const list = async () => {
    const neededFolder = path.resolve(dirname, './files');

    try {
        const files = await readdir(neededFolder);
        for (const file of files) {
            console.log(file);
        }
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw new Error(errorsMessages.fsOperationFiled);
        }

        throw e;
    }
};
