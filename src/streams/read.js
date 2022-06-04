import path from "node:path";
import fs from "node:fs";
import {stdout} from "node:process";
import dirname from "./dirname.js";

export const read = async () => {
    const filePath = path.resolve(dirname, './files/fileToRead.txt');

    fs.createReadStream(filePath).pipe(stdout);
};
