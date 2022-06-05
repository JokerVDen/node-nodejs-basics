import {readFile} from "node:fs/promises";
import path from "node:path";
import dirname from "./dirname.js";

export const calculateHash = async () => {
    const { createHash } = await import('crypto');
    const file = path.resolve(dirname, './files/fileToCalculateHashFor.txt');
    const content = await readFile(file);

    const hex = createHash('sha256')
        .update(content)
        .digest('hex');

    console.log(hex);
};

calculateHash();
