import express from 'express';

var router = express.Router();

import { router as routerFromFolder } from './Tickets/route.js';

router.use('/Tickets', routerFromFolder);

export { router };