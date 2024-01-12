import { StartFunc as StartFuncreadFile } from '../../kSequelize/ReadFileList/readFile.js'; 

let GetFunc = async () => {
    return await StartFuncreadFile();
};

export {
    GetFunc 
};