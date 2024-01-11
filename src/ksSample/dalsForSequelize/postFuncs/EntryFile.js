import { StartFunc as StartFuncwriteFile } from '../../kSequelize/WriteFileList/writeFile.js';

let PostFunc = async ({ inBodyKeys }) => {
    return StartFuncwriteFile({ inDataToInsert: inBodyKeys });
};

export {
    PostFunc
};