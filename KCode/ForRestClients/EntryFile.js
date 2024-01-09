import fs from 'fs';
import { StartFunc as StartFuncForAllMethods } from './ForAllMethods.js';

let StartFunc = ({ inElement, inColumnsArray, inFrom, inTo }) => {
    let LocalElement = inElement;
    let LocalTypeName = "restClients";
    let LocalTo = inTo;
    let LocalFrom = inFrom;
    let LocalFileName = "AllMethods.http";

    fs.mkdirSync(`${LocalTo}/${LocalElement}/${LocalTypeName}`);

    let LocalFileData = fs.readFileSync(`${LocalFrom}/${LocalTypeName}/${LocalFileName}`);

    let LocalFromAllMethods = StartFuncForAllMethods({ inElement, LocalElement, inFileData: LocalFileData.toString(), inColumnsArray: [] });

    fs.writeFileSync(`${LocalTo}/${LocalElement}/${LocalTypeName}/${LocalFileName}`, LocalFromAllMethods);
};

export { StartFunc };