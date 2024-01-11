import express from 'express';

var router = express.Router();

import {
    GetFunc,GetDataOnlyFunc, GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetFromModalFunc,GetIdFunc
} from '../../controllers/getFuncs/EntryFile.js';

router.get('/FromModal', GetFromModalFunc);
router.get('/', GetFunc);
router.get('/FromModalUuid', GetFromModalUuidFunc);
router.get('/FromModalUuidAndTS', GetFromModalUuidAndTSFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/:id', GetIdFunc);

export { router };