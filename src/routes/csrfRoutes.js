import { Router } from 'express';

const router = new Router();
router.get('/setCSRFToken', csrfProtection, (req, res) =>{
  const token = req.csrfToken();
  res.send({csrfToken: token});
});

router.post('/checkCSRFToken', csrfProtection, (req, res) =>{
  res.send({ msg: 'CSRF Token is valid.'})
});

export default router;
