import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "kLowDb";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "ksSample";

    LocalFuncForreadFile({ inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom, inTypeName: LocalTypeName, inSampleString: LocalSampleString });
};

let LocalFuncForreadFile = ({ inElement, inFrom, inTo, inTypeName, inSampleString }) => {
    let LocalFileName = "fileName.json";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);
    LocalfileNameJsonData.fileName = `${LocalElement}.json`;
    
    fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));
};

export { StartFunc };