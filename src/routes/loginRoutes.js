import { Router } from 'express';
import loginController from '../controllers/loginController';

const router = new Router();
router.get('/', loginController.index);
router.get('/register', loginController.registrationForm);
router.get('/recover', loginController.recover);
//router.get('/login/logout', loginController.logout);
//router.post('/login/register', loginController.register);
//router.post('/login/', loginController.access);

export default router;
