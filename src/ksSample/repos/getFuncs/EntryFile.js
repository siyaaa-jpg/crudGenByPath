import {
    GetFunc as GetFuncDal,GetDataOnlyFunc as GetDataOnlyFuncDal,
    GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    GetFromModalFunc as GetFromModalFuncDal,
    GetIdFunc as GetIdFuncDal
} from '../../dals/getFuncs/EntryFile.js';

import {
    GetFunc as GetFuncDalsForSequelize
} from '../../dalsForSequelize/getFuncs/EntryFile.js';

import configJson from '../../../Config.json' assert { type: 'json' };

let GetFunc = async () => {
    if (configJson.isSequelize) {
        return await GetFuncDalsForSequelize();
    };

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