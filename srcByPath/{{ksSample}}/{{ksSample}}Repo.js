import {
    GetFunc as GetFuncDal,GetDataOnlyFunc as GetDataOnlyFuncDal,
     GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal, GetFromModalFunc as GetFromModalFuncDal,
    PostUploadFunc as PostUploadFuncDal
} from './{{ksSample}}Dal.js';

let GetFunc = () => {
    return GetFuncDal();
};

let GetDataOnlyFunc = () => {
    return GetDataOnlyFuncDal();
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

let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return PostFuncDal({ LocalKey1: LocalKeys });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostFromModalFuncDal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFuncDal({ LocalBodyAsModal });
};

export {
    GetFunc,GetDataOnlyFunc, PostFunc, PostFromModalFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    PostUploadFunc
};