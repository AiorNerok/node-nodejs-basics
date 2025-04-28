import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
    const __filename = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__filename, 'files', 'fileToCompress.txt');
    const gzPath = path.join(__filename, 'files', 'archive.gz');

    const readStream = createReadStream(gzPath);
    const writeStream = createWriteStream(filePath);
    const gunzip = createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();