import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    
    const hash = crypto.createHash('sha256');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error:', err);
            return;
        }

        const result = hash.update(data.toString()).digest('hex');
        console.log(result);
    });
};

await calculateHash();