import { Router } from 'express';
import coletaEntregadorController from '../controllers/ColetaEntregadorController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, coletaEntregadorController.index);
router.get('/:id', loginRequired, coletaEntregadorController.show);
// router.post('/', entregadorController.store);
// router.put('/:id', entregadorController.update);
// router.delete('/:id', entregadorController.delete);

export default router;
