export const parseEnv = () => {
    let rssList = [];
    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            rssList.push(key + '=' + process.env[key]);
        }
    }

    const result = rssList.join('; ')

    console.log(result);
};
