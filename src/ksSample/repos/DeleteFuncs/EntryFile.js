import { DeleteFunc as DeleteFuncDal } from '../../dals/DeleteFuncs/EntryFile.js';

let DeleteFunc = ({ Id }) => {
    return DeleteFuncDal({ Id });
};

export { DeleteFunc };