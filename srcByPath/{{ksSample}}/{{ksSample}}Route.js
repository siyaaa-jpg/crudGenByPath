import express from 'express';

var router{{ksSample}} = express.Router();

import {
    GetFunc,GetDataOnlyFunc, GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    PostFunc, PostFromModalFunc, GetFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc,PostUploadFromModalFunc,GetIdFunc
} from './{{ksSample}}Controller.js';

import { GetFunc as GetFuncmiddleware } from './{{ksSample}}Middleware.js';

router{{ksSample}}.get('/', GetFunc);
router{{ksSample}}.get('/FromModal', GetFromModalFunc);
router{{ksSample}}.get('/FromModalUuid', GetFromModalUuidFunc);
router{{ksSample}}.get('/FromModalUuidAndTS', GetFromModalUuidAndTSFunc);
router{{ksSample}}.get('/DataOnly', GetDataOnlyFunc);
router{{ksSample}}.get('/:id', GetIdFunc);

router{{ksSample}}.post('/BodyCheck', GetFuncmiddleware, PostFunc);
router{{ksSample}}.post('/GetSelectColumns', PostGetSelectColumnsFunc);
router{{ksSample}}.post('/', PostFunc);
router{{ksSample}}.post('/FromModal', PostFromModalFunc);
router{{ksSample}}.post('/Upload', PostUploadFunc);
router{{ksSample}}.post('/UploadFromModal', PostUploadFromModalFunc);

export { router{{ksSample}} };