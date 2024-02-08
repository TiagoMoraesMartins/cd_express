import { Router} from 'express';
import usuarioController from '../controllers/UsuarioController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
router.get('/', loginRequired, usuarioController.index);
router.get('/:id', loginRequired, usuarioController.show);

router.post('/', loginRequired, usuarioController.store);

router.put('/:id', loginRequired, usuarioController.update);
router.put('/', loginRequired, usuarioController.update);

router.delete('/:id', loginRequired, usuarioController.delete);
router.delete('/', loginRequired, usuarioController.delete);

export default router;
