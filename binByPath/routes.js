import express from 'express';

var router = express.Router();

import { routercustomers } from './customers/customersRoute.js';
import { routerTickets } from './Tickets/TicketsRoute.js';

router.use('/customers', routercustomers);
router.use('/Tickets', routerTickets);

export { router };