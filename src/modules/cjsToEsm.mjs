import path from 'node:path';
import {release, version} from 'node:os';
import {createServer as createServerHttp} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';

import('./files/c.js');

const random = Math.random();

const jsonFile = random > 0.5
        ? './files/a.json'
        : './files/b.json';

const unknownObject = JSON.parse(
        await readFile(
                new URL(jsonFile, import.meta.url)
        )
);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};
