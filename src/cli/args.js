export const parseArgs = () => {
    const arg = process.argv;
    const parameterStartsWith = '--';
    const parameterList = [];

    while(arg.length) {
        const prop = arg.shift();
        if (prop.startsWith(parameterStartsWith)) {
            const value = arg.shift();
            parameterList.push(`${prop.substring(parameterStartsWith.length)} is ${value}`);
        }
    }

    const result = parameterList.join(', ');
    console.log(result);
};
