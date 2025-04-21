import fs from "fs";
import path,{dirname} from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  // Write your code here
  const __filename = dirname(fileURLToPath(import.meta.url));

  const filePath = path.join(__filename, "files");
  const fileCopyPath = path.join(__filename, "files_copy");

  const err_message = 'FS operation failed'

    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error(err_message);
            return;
        }

        fs.stat(fileCopyPath, (err, stats) => {
            if (err) {
                fs.cp(filePath, fileCopyPath, { recursive: true }, (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                });
                return;
            }    
        })   

        console.error(err_message);
    })  
};

await copy();
