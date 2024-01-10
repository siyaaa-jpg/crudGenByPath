import {
    GetFunc as GetFuncRepo,GetDataOnlyFunc as GetDataOnlyFuncRepo,
    GetFromModalUuidFunc as GetFromModalUuidFuncRepo,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncRepo, GetFromModalFunc as GetFromModalFuncRepo,
    GetIdFunc as GetIdFuncRepo
} from './{{ksSample}}Repo.js';


let GetFunc = (req, res) => {
    let LocalFromRepo = GetFuncRepo();
    res.json(LocalFromRepo);
};

let GetDataOnlyFunc = (req, res) => {
    let LocalFromRepo = GetDataOnlyFuncRepo();
    res.json(LocalFromRepo);
};
let GetIdFunc = (req, res) => {
    let LocalParams=req.params;
    let LocalIfFromParam=LocalParams.id;

    console.log("LocalParams : ",LocalParams);
    let LocalFromRepo = GetIdFuncRepo({inId:LocalIfFromParam});
    res.json(LocalFromRepo);
};

let GetFromModalFunc = (req, res) => {
    let LocalFromRepo = GetFromModalFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalUuidFunc = (req, res) => {
    let LocalFromRepo = GetFromModalUuidFuncRepo();
    res.json(LocalFromRepo);
};

let GetFromModalUuidAndTSFunc = (req, res) => {
    let LocalFromRepo = GetFromModalUuidAndTSFuncRepo();
    res.json(LocalFromRepo);
};


export {
    GetFunc,GetDataOnlyFunc,GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc
};