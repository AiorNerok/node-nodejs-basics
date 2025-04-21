import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __filename = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__filename, "files");
    const err_message = 'FS operation failed'

    fs.readdir(filePath, (err, files) => {
        if (err) {
            console.error(err_message);
            return;
        }
        console.log(files);
    });
};

await list();