import { Router } from 'express';
import adminController from '../controllers/adminController';

const { loginRequired } = require('../middlewares/middleware');

const router = new Router();
router.get('/admin/', loginRequired, adminController.index);

export default router;
