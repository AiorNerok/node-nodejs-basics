const parseArgs = () => {
    const argv  = process.argv.slice(2);

   const len = argv.length / 2;

    const result = [];

    for (let i = 0; i < len; i++) {
        const key = argv[i * 2];
        const value = argv[i * 2 + 1];

        if (key.startsWith('--')) {
            result.push(`${key} is ${value}`);
        }
    }

    console.log(result.join(', '));
};

parseArgs();