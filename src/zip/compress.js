import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
    const __filename = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__filename, 'files', 'fileToCompress.txt');
    const gzPath = path.join(__filename, 'files', 'archive.gz');

    const gzip = createGzip();
    const sourceStream = createReadStream(filePath);
    const destinationStream = createWriteStream(gzPath);

    await pipeline(sourceStream, gzip, destinationStream);
};

await compress();