
const express = require('express');
import entregadorController from '../controllers/EntregadorController';
import loginRequired from '../middlewares/loginRequired';

const router = express.Router();


router.get('/', entregadorController.index);
router.get('/:id', entregadorController.show);

router.post('/',loginRequired, entregadorController.store);
router.put('/:id',loginRequired, entregadorController.update);
router.delete('/:id',loginRequired, entregadorController.delete);



export default router;
//module.exports = router;
