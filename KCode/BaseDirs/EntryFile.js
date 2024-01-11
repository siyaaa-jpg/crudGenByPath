import fs from 'fs';

let StartFunc = () => {
    try {
        fs.mkdirSync("bin");
    } catch (error) {

    };
};

export { StartFunc };