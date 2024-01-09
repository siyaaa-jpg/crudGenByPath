import fs from 'fs';

let StartFunc = ({ inElement, inFrom, inTo, inTypeName, inSampleString, inColumnsArray }) => {
    let LocalFileName = "ImportToFile.js";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = inSampleString;
    let LocalColumnsArray = inColumnsArray;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalSampleString}/${LocalTypeName}/${LocalSampleString}${LocalFileName}`);
    let LocalToFileData = LocalFileData.toString().replaceAll(LocalSampleString, LocalElement);

    fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalElement}${LocalFileName}`, LocalToFileData);
};

export { StartFunc };