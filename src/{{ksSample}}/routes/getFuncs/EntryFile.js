import express from 'express';

var router = express.Router();

import {
    GetFunc,GetDataOnlyFunc, GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetFromModalFunc,GetIdFunc
} from './{{ksSample}}Controller.js';

router.get('/', GetFunc);
router.get('/FromModal', GetFromModalFunc);
router.get('/FromModalUuid', GetFromModalUuidFunc);
router.get('/FromModalUuidAndTS', GetFromModalUuidAndTSFunc);
router.get('/DataOnly', GetDataOnlyFunc);
router.get('/:id', GetIdFunc);

export { router };