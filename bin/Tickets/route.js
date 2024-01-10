import express from 'express';

var router = express.Router();

import { router as routergetFuncs } from './routes/getFuncs/EntryFile.js';
import { router as routerpostFuncs } from './routes/postFuncs/EntryFile.js';

router.get('/', routergetFuncs);
router.post('/', routerpostFuncs);

export { router };