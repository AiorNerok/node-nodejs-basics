// @ts-check

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __filename = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__filename, "files/fileToRemove.txt");
    const err_message = 'FS operation failed'

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err_message);
            return;
        }
    });
};

await remove();