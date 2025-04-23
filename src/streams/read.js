import { Readable } from 'stream';
import fs from 'fs';
import path,{dirname} from "path";
import { fileURLToPath } from "url";

const read = async () => {
    const __filename = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__filename, "files", "fileToRead.txt");

    const content = fs.readFileSync(filePath, { encoding: 'utf-8' });

    const ReadableStream = new Readable();
    ReadableStream.push(content);
    ReadableStream.push(null);
    ReadableStream.pipe(process.stdout);    
};

await read();