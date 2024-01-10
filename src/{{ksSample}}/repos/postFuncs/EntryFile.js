import {
    PostFunc as PostFuncDal,
    PostFromModalFunc as PostFromModalFuncDal, 
    PostUploadFunc as PostUploadFuncDal, PostGetSelectColumnsFunc as PostGetSelectColumnsFuncDal,
    PostUploadFromModalFunc as PostUploadFromModalFuncDal
} from '../../{{ksSample}}Dal.js';


let PostFunc = ({ LocalKey1: LocalKeys }) => {
    return PostFuncDal({ LocalKey1: LocalKeys });
};

let PostFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostFromModalFuncDal({ LocalBodyAsModal });
};

let PostUploadFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFuncDal({ LocalBodyAsModal });
};

let PostUploadFromModalFunc = ({ LocalBodyAsModal }) => {
    return PostUploadFromModalFuncDal({ LocalBodyAsModal });
};

let PostGetSelectColumnsFunc = ({ LocalBodyAsModal }) => {
    return PostGetSelectColumnsFuncDal({ LocalBodyAsModal });
};

export {
    PostFunc, PostFromModalFunc, 
    PostUploadFunc, PostGetSelectColumnsFunc,PostUploadFromModalFunc,GetIdFunc
};