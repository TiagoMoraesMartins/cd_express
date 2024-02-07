import { Router} from 'express';
import usuarioController from '../controllers/UsuarioController';

const router = new Router();
router.get('/', usuarioController.index);
router.get('/:id', usuarioController.show);

router.post('/', usuarioController.store);

router.put('/:id', usuarioController.update);
router.put('/', usuarioController.update);

router.delete('/:id', usuarioController.delete);
router.delete('/', usuarioController.delete);

export default router;
