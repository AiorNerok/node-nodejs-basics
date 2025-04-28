import { Worker } from 'worker_threads';
import os from 'os';
import { fileURLToPath } from 'url';
import path from 'path';


const performCalculations = async () => {
    const numCPUs = os.cpus().length;
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const createWorker = (workerData) => {
        return new Promise((resolve) => {
            const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData });

            worker.on('message', data =>     resolve({ status: 'resolved', data }));
            worker.on('error', () => resolve({ status: 'error', data: null }));
            worker.on('exit', (code) => {
                if (code !== 0) {
                    resolve({ status: 'error', data: null });
                }
            });
        });
    };

    const promises = [];
    for (let i = 0; i < numCPUs; i++) {
        promises.push(createWorker(10 + i));
    }

    const workerResults = await Promise.all(promises);
    console.log(workerResults);
};

await performCalculations();