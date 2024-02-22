import { Router } from 'express';
import coletaController from '../controllers/ColetaController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, coletaController.index);
router.get('/:id',loginRequired, coletaController.show);

router.post('/',loginRequired, coletaController.store);

router.put('/:id', loginRequired,coletaController.update);

router.delete('/:id',loginRequired, coletaController.delete);

export default router;
