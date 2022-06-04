import {stdin} from "node:process";
import fs from "node:fs";
import path from "node:path";
import dirname from "./dirname.js";

export const write = async () => {
    const filePath = path.resolve(dirname, './files/fileToWrite.txt');
    const writeStream = fs.createWriteStream(filePath);

    stdin.pipe(writeStream);
};
