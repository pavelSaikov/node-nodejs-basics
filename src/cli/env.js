const parseEnv = () => {
    const env = process.env;

    for (const key of Object.keys(env)) {
        if (key.startsWith('RSS_')) {
            console.log(`${key}=${env[key]}`);
        }
    }
};

parseEnv();