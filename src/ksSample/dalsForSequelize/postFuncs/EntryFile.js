import { StartFunc as StartFuncwriteFile } from '../../kSequelize/WriteFileList/writeFile.js';

let PostFunc = async (inModalObject) => {
    return await StartFuncwriteFile({ inDataToInsert: inModalObject });
};

export {
    PostFunc
};