import {parentPort, workerData} from "node:worker_threads";

if (workerData.throwErrorRandomly && Math.random() > 0.6) {
    throw new Error();
}

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = number => parentPort.postMessage(nthFibonacci(number));

parentPort.once('message', message => sendResult(message));
