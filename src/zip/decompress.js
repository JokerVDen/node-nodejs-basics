import path from "node:path";
import fs from "node:fs";
import {createGunzip} from "node:zlib";
import dirname from "./dirname.js";

export const decompress = async () => {
    const inputFilePath = path.resolve(dirname, './files/archive.gz');
    const outputFilePath = path.resolve(dirname, './files/fileToCompress.txt');

    const writeStream = fs.createWriteStream(outputFilePath);
    const gzip = createGunzip();
    fs.createReadStream(inputFilePath).pipe(gzip).pipe(writeStream);
};

decompress();
