import { DeleteFunc as DeleteFuncRepo } from '../../repos/DeleteFuncs/EntryFile.js';

let DeleteFunc = (req, res) => {
    let LocalId = req.params.Id;
    let LocalFromRepo = DeleteFuncRepo({ inId: LocalId });
    res.json(LocalFromRepo);
};

export { DeleteFunc };