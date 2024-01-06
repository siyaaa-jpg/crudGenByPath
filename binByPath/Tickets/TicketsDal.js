import { StartFunc as StartFuncreadFile } from './kLowDb/TicketsreadFile.js';
import { StartFunc as StartFuncReadFileFromModal } from './kLowDb/TicketsreadFileFromModal.js';
import { StartFunc as StartFuncwriteFile } from './kLowDb/TicketswriteFile.js';
import { StartFunc as StartFuncWriteFileFromModal } from './kLowDb/TicketswriteFileFromModal.js';

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