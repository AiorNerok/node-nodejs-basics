import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';


const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    
    const scriptPath = path.join(__dirname, 'files', 'script.js');

    const child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess( ['someArgument1', 'someArgument2']);
