import {
    GetFunc as GetFuncDal,GetDataOnlyFunc as GetDataOnlyFuncDal,
    GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    GetFromModalFunc as GetFromModalFuncDal,
    GetIdFunc as GetIdFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = () => {
    return GetFuncDal();
};

let GetDataOnlyFunc = () => {
    return GetDataOnlyFuncDal();
};
let GetIdFunc = ({inId}) => {
    return GetIdFuncDal({inId});
};

let GetFromModalFunc = () => {
    return GetFromModalFuncDal();
};

let GetFromModalUuidFunc = () => {
    return GetFromModalUuidFuncDal();
};

let GetFromModalUuidAndTSFunc = () => {
    return GetFromModalUuidAndTSFuncDal();
};


export {
    GetFunc,GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc
};