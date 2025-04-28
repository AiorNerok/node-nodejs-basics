import { Readable } from 'stream';
import fs from 'fs';
import path, {dirname} from "path";
import { fileURLToPath } from "url";

const read = async () => {
    const __filename = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__filename, "files", "fileToRead.txt");

    const readableStream = new Readable({read(){}});

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    readableStream.on('end', console.log);
    
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        readableStream.push(data);
        readableStream.push(null);
    });    
};

await read();