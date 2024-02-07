import { Router } from 'express';
import empresaController from '../controllers/EmpresaController';

const router = new Router();
router.get('/', empresaController.index);
router.get('/:id', empresaController.show);

router.post('/', empresaController.store);

router.put('/:id', empresaController.update);
router.put('/', empresaController.update);

router.delete('/:id', empresaController.delete);
router.delete('/', empresaController.delete);

export default router;
