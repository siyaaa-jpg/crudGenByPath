import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {

    let LocalFileName = "Data.json";
    let LocalElement = inElement;
    let LocalTo = inTo;
    let LocalFilePath = `${LocalTo}/${LocalElement}/${LocalFileName}`

    let LocalFileData = fs.readFileSync(LocalFilePath);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);
    LocalfileNameJsonData.fileName = `${LocalElement}.json`;

    const res = inColumnsArray.reduce((acc, curr) => (acc[curr] = '', acc), {});

    fs.writeFileSync(LocalFilePath, JSON.stringify(res));
};

export { StartFunc };