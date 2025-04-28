import path, { dirname } from 'path';
import { Writable } from 'stream';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

    const fileStream = createWriteStream(filePath);

    const customWritable = new Writable({
        write(chunk, encoding, callback) {
            fileStream.write(chunk, encoding, callback);
        },
        
        final(callback) {
            fileStream.end(callback);
        }
    });

    process.stdin.pipe(customWritable);

    return new Promise((resolve, reject) => {
        customWritable.on('finish', resolve);
        customWritable.on('error', reject);
    });
};

await write();