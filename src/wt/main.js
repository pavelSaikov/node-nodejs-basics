import os from "node:os";
import {Worker} from "node:worker_threads";

const BASIC_NUMBER = 10;

const performCalculations = async () => {
    const availableProcessors = os.availableParallelism();
    console.log('Threads number: ',availableProcessors, '\n')

    Promise.all(Array.from({length: availableProcessors}).map((_, i) => new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: BASIC_NUMBER + i,
        });

        worker.on('message', (data) => resolve({status: 'resolved', data}));
        worker.on('error', ()=> reject({status: 'error', data: null}));
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${code}`));
        });
    }))).then((results) => console.log(results));
};

await performCalculations();