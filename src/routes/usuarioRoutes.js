import { Router} from 'express';
import usuarioController from '../controllers/UsuarioController';

const router = new Router();
router.get('/', usuarioController.index);
router.post('/', usuarioController.store);
router.put('/', usuarioController.update);
router.get('/', usuarioController.show);
router.delete('/', usuarioController.delete);

export default router;
