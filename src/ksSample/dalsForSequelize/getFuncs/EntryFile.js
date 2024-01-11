import { StartFunc as StartFuncreadFile } from '../../kSequelize/ReadFileList/readFile.js'; 

let GetFunc = () => {
    return StartFuncreadFile();
};

export {
    GetFunc 
};