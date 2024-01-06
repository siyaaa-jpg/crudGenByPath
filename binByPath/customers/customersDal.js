import { StartFunc as StartFuncreadFile } from './kLowDb/customersreadFile.js';
import { StartFunc as StartFuncReadFileFromModal } from './kLowDb/customersreadFileFromModal.js';
import { StartFunc as StartFuncwriteFile } from './kLowDb/customerswriteFile.js';
import { StartFunc as StartFuncWriteFileFromModal } from './kLowDb/customerswriteFileFromModal.js';

let GetFunc = () => {
    return StartFuncreadFile();
};

let GetFromModalFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidAndTSFunc = () => {
    return StartFuncReadFileFromModal();
};

let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return StartFuncwriteFile({ LocalKey1: LocalKeys });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return StartFuncWriteFileFromModal({ LocalBodyAsModal });
};

export {
    GetFunc, PostFunc, PostFromModalFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc
};