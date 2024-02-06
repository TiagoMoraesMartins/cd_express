import { Router } from 'express';
import adminController from '../controllers/AdminController';

//#TODO: VERIFICAR COMO VAMOS REALIZAR A VALIDAÇÃO SE O USUÁRIO ESTÁ LOGADO OU NÃO
const { loginRequired } = require('../middlewares/middleware');

const router = new Router();
//#TODO: VERIFICAR COMO VAMOS REALIZAR A VALIDAÇÃO SE O USUÁRIO ESTÁ LOGADO OU NÃO
//router.get('/', loginRequired, adminController.index);
router.get('/', adminController.index);

export default router;
