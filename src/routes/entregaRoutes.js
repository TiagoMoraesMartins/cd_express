import { Router } from 'express';
import entregaController from '../controllers/EntregaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, entregaController.index);
router.get('/:id', loginRequired, entregaController.show);

router.post('/', loginRequired, entregaController.store);

router.put('/:id', loginRequired, entregaController.update);

router.delete('/:id', loginRequired, entregaController.delete);

export default router;
