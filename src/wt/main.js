import {Worker} from "node:worker_threads";
import path from "node:path";
import {cpus} from "os";
import dirname from "./dirname.js";

const STATUS_RESOLVED = 'resolved';
const STATUS_ERROR = 'error';

export const performCalculations = async () => {
    /** Change to throw error randomly in the Worker */
    const throwErrorRandomly = false;

    let startNumber = 10;
    const cpuCount = cpus().length;
    const workerPath = path.resolve(dirname, './worker');
    const results = [];
    let exitWorkers = 0;

    const handleMessage = (status, data = null) => {
        results.push({status, data});
    }

    const handleExit = () => {
        if (++exitWorkers === cpuCount) {
            console.log(results);
        }
    }

    for (let i = 0; i < cpuCount; i++) {
        const worker = new Worker(workerPath, {workerData: {throwErrorRandomly}});

        worker.postMessage(startNumber + i);
        worker.on('message', message => handleMessage(STATUS_RESOLVED, message));
        worker.on('error', () => handleMessage(STATUS_ERROR));
        worker.on('exit', () => handleExit());
    }
};

performCalculations();
