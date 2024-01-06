import fs from 'fs';

import { StartFunc as StartFuncReadFileFromModal } from './readFileFromModal.js';
import { StartFunc as StartFuncWriteFile } from './writeFile.js';
import { StartFunc as StartFuncwriteFileFromModal } from './writeFileFromModal.js';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "kLowDb";
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = "{{ksSample}}";
    let LocalColumnsArray = inColumnsArray;

    fs.mkdirSync(`${LocalTo}/${LocalElement}/${LocalTypeName}`);

    LocalFuncForreadFile({ inElement: LocalElement, inTo: LocalTo, inFrom: LocalFrom, inTypeName: LocalTypeName, inSampleString: LocalSampleString });

    StartFuncReadFileFromModal({
        inElement: LocalElement, inFrom: LocalFrom, inTo: LocalTo,
        inTypeName: LocalTypeName, inSampleString: LocalSampleString, inColumnsArray: LocalColumnsArray
    });

    StartFuncWriteFile({
        inElement: LocalElement, inFrom: LocalFrom, inTo: LocalTo,
        inTypeName: LocalTypeName, inSampleString: LocalSampleString, inColumnsArray: LocalColumnsArray
    });

    StartFuncwriteFileFromModal({
        inElement: LocalElement, inFrom: LocalFrom, inTo: LocalTo,
        inTypeName: LocalTypeName, inSampleString: LocalSampleString, inColumnsArray: LocalColumnsArray
    });

    fs.copyFileSync(`${LocalFrom}/ToConfig.json`, `${LocalTo}/${LocalElement}/Config.json`);
};

let LocalFuncForreadFile = ({ inElement, inFrom, inTo, inTypeName, inSampleString }) => {
    let LocalFileName = "readFile.js";
    let LocalElement = inElement;
    let LocalTypeName = inTypeName;
    let LocalFrom = inFrom;
    let LocalTo = inTo;
    let LocalSampleString = inSampleString;

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalSampleString}/${LocalTypeName}/${LocalSampleString}${LocalFileName}`);
    let LocalToFileData = LocalFileData.toString().replaceAll(LocalSampleString, LocalElement);

    fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalElement}${LocalFileName}`, LocalToFileData);
};

export { StartFunc };