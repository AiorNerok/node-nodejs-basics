const parseEnv = () => {
    const {env} = process;

    const result = [];

    Object.entries(env).map(([key, value]) => {
        if (key.startsWith('RSS_')) {
            result.push(`${key}=${value}`);
        }
    })

    console.log(result.join('; '));
};

parseEnv();