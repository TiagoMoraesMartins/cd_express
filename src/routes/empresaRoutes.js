import { Router } from 'express';
import empresaController from '../controllers/empresaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, empresaController.index);
router.get('/:id', loginRequired, empresaController.show);

router.post('/', loginRequired, empresaController.store);

router.put('/:id', loginRequired, empresaController.update);
router.put('/', loginRequired, empresaController.update);

router.delete('/:id', loginRequired, empresaController.delete);
router.delete('/', loginRequired, empresaController.delete);

export default router;
