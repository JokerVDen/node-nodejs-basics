import {rm} from 'node:fs/promises';
import errorsMessages from "./messages/errors.js";
import path from "node:path";
import dirname from "./dirname.js";

export const remove = async () => {
    const fileToRemove = path.resolve(dirname, './files/fileToRemove.txt');

    try {
        await rm(fileToRemove);
    } catch (e) {
        if (e.code === 'ENOENT') {
            throw new Error(errorsMessages.fsOperationFiled);
        }

        throw e;
    }
};
