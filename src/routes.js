import express from 'express';

var router = express.Router();

import { router as routerFromFolder } from './ksSample/route.js';

router.use('/ksSample', routerFromFolder);

export { router };