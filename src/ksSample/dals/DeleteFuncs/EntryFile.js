import { StartFunc as StartFuncwriteFile } from '../../kLowDb/WriteFileList/DeleteFile.js';

let DeleteFunc = ({ Id }) => {
    return StartFuncwriteFile({ Id });
};

export { DeleteFunc };