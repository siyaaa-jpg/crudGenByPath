import { StartFunc as StartFuncwriteFile } from '../../kSequelize/WriteFileList/writeFile.js';

let PostFunc = async (inModalObject) => {
    return StartFuncwriteFile({ inDataToInsert: inModalObject });
};

export {
    PostFunc
};