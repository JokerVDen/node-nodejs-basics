import {stdin, stdout} from "node:process";
import {Transform} from "stream";

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });

    stdin.pipe(reverse).pipe(stdout);
};
