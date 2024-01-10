import express from 'express';

var router = express.Router();

import {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc
} from '../../controllers/postFuncs/EntryFile.js';

import { GetFunc as GetFuncmiddleware } from './Middleware.js';

router.post('/BodyCheck', GetFuncmiddleware, PostFunc);
router.post('/GetSelectColumns', PostGetSelectColumnsFunc);
router.post('/', PostFunc);
router.post('/FromModal', PostFromModalFunc);
router.post('/Upload', PostUploadFunc);
router.post('/UploadFromModal', PostUploadFromModalFunc);

export { router };