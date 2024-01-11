import { DeleteFunc as DeleteFuncRepo } from '../../repos/DeleteFuncs/EntryFile.js';

let DeleteFunc = (req, res) => {
    let LocalId = req.params.Id;
    console.log("LocalId:",LocalId);
    let LocalFromRepo = DeleteFuncRepo({ Id: LocalId });
    res.json(LocalFromRepo);
};

export { DeleteFunc };