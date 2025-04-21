import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {

    const __filename = path.dirname(fileURLToPath(import.meta.url));

    const filePath = path.join(__filename, 'files', 'wrongFilename.txt');
    const fileCopyPath = path.join(__filename, 'files', 'properFilename.md');
    const err_message = 'FS operation failed';

    console.log(filePath);
    
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error('err_message');
            return;
        }

        fs.stat(fileCopyPath, (err, stats) => {
            if(stats) {
                console.error(err_message);
                return;
            }
            
            fs.rename(filePath, fileCopyPath, (err) => {
                if (err) {
                    console.error('FS operation failed');
                    return;
                }
            }
            );
        })
    })


};

await rename();