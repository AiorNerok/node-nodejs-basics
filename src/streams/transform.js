import { Transform } from 'stream';

const transform = async () => {
    const ReverseTransformStream = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
        }
    });

    process.stdin.pipe(ReverseTransformStream).pipe(process.stdout);
};

await transform();