import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (result) => {
    parentPort.postMessage(result);
};

try {
    const result = nthFibonacci(workerData);
    sendResult(result);
} catch {
    sendResult(null);
}