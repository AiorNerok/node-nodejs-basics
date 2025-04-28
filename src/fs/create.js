import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const text = 'I am fresh and young';
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    fs.stat(path.join(__dirname, 'files', 'fresh.txt'), (err) => {
        if (err === null) {
            console.error('FS operation failed');
            return;
        }

        fs.writeFile(path.join(__dirname, 'files', 'fresh.txt'), text, (err) => {
            if (err) {
                console.error('Error:', err);
            }
        });    
    })    
};

await create();