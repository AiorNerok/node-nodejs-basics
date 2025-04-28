import fs from 'fs';
import path, { dirname } from 'path';
import { Writable } from 'stream';
import { fileURLToPath } from 'url';

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = path.join(__dirname, "files", "fileToWrite.txt");

    const WritableStream = new Writable();
   
};

await write();