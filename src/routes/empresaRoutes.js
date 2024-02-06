import { Router } from 'express';
import empresaController from '../controllers/EmpresaController';

const router = new Router();
router.get('/', empresaController.index);
router.get('/:id', empresaController.show);

router.post('/', empresaController.store);

router.put('/', empresaController.update);

router.delete('/:id', empresaController.delete);

export default router;
