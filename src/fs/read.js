import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__filename, "files/fileToRead.txt");
    const err_message = 'FS operation failed'

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err_message);
            return;
        }
        console.log(data);
    });
};

await read();