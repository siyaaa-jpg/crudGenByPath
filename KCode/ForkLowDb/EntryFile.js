import fs from 'fs';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "kLowDb";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "ksSample";
    let LocalColumnsArray = inColumnsArray;

    // fs.mkdirSync(`${LocalTo}/${LocalElement}/${LocalTypeName}`);

    LocalFuncForreadFile({ inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom, inTypeName: LocalTypeName, inSampleString: LocalSampleString });


    // fs.copyFileSync(`${LocalFrom}/ToConfig.json`, `${LocalTo}/${LocalElement}/Config.json`);
};

let LocalFuncForreadFile = ({ inElement, inFrom, inTo, inTypeName, inSampleString }) => {
    let LocalFileName = "fileName.json";
    let LocalSampleString = inSampleString;
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalFrom = inFrom;
    let LocalTo = inTo;

    let LocalFileData = fs.readFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalFileName}`);
    let LocalfileNameJsonData = JSON.parse(LocalFileData);
    LocalfileNameJsonData.fileName = `${LocalElement}.json`;
    // let LocalToFileData = LocalFileData.toString().replaceAll(LocalSampleString, LocalfileNameJsonData);
    console.log("LocalfileNameJsonData:", LocalfileNameJsonData);
    fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalFileName}`, JSON.stringify(LocalfileNameJsonData));

    // let LocalFileData = fs.writeFileSync(`${LocalFrom}/${LocalSampleString}/${LocalTypeName}/${LocalFileName}`);

    // fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalElement}${LocalFileName}`, LocalToFileData);
};

export { StartFunc };