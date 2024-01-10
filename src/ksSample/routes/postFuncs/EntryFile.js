import express from 'express';

var router = express.Router();

import {
    PostFunc, PostFromModalFunc,
    PostUploadFunc, PostGetSelectColumnsFunc, PostUploadFromModalFunc
} from '../../controllers/postFuncs/EntryFile.js';

import { PostFunc as PostFuncmiddleware } from '../../middlewares/postFuncs/EntryFile.js';

router.post('/BodyCheck', PostFuncmiddleware, PostFunc);
router.post('/GetSelectColumns', PostGetSelectColumnsFunc);
router.post('/', PostFunc);
router.post('/FromModal', PostFromModalFunc);
router.post('/Upload', PostUploadFunc);
router.post('/UploadFromModal', PostUploadFromModalFunc);

export { router };