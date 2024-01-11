import fs from 'fs';

let StartFunc = ({ inTo }) => {
    let LocalTo = inTo;

    fs.mkdirSync("bin");
};

export { StartFunc };