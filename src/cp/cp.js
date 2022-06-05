import {fork} from "node:child_process";
import path from "node:path";
import {stdin, stdout, stderr} from "node:process";
import dirname from "./dirname.js";

export const spawnChildProcess = async (args) => {
    const pathToScript = path.resolve(dirname, './files/script.js');
    fork(`${pathToScript}`, args, {
        stdio: [stdin, stdout, stderr, 'ipc'],
    }).on('exit', code => process.exit(code));
};
