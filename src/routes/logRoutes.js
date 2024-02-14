import { Router } from 'express';
import logController from '../controllers/LogController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
router.get('/', loginRequired, logController.index);
router.get('/:id', loginRequired, logController.show);
router.get('/usuario/:id', loginRequired , logController.showByUser);

export default router;
