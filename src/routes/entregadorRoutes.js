//import { Router} from 'express';
const express = require('express');
import entregadorController from '../controllers/EntregadorController';


const router = express.Router();

router.get('/', entregadorController.index);
router.get('/:id', entregadorController.show);



export default router;
//module.exports = router;





