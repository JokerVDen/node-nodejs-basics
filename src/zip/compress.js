import path from "node:path";
import fs from "node:fs";
import {createGzip} from "node:zlib";
import dirname from "./dirname.js";

export const compress = async () => {
    const inputFilePath = path.resolve(dirname, './files/fileToCompress.txt');
    const outputFilePath = path.resolve(dirname, './files/archive.gz');

    const writeStream = fs.createWriteStream(outputFilePath);
    const gzip = createGzip();
    fs.createReadStream(inputFilePath).pipe(gzip).pipe(writeStream);
};
