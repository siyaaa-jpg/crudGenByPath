import { StartFunc as StartFuncreadFile } from '../../kSequelize/ReadFileList/readFile.js';
import { dataColumns } from '../../kSequelize/modals/prepareColumns.js';

let GetFunc = async () => {
    return await StartFuncreadFile();
};

let GetBodyCheckFunc = async () => {
    return dataColumns;
};

export {
    GetFunc, GetBodyCheckFunc
};