import { Router } from 'express';
import landingPageController from '../controllers/landingPageController';

const router = new Router();
router.get('/', landingPageController.index);

export default router;
