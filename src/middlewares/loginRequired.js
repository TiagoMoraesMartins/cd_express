import jwt from 'jsonwebtoken';

export default(req, res, next)=>{
  try {
    const { authorization } = req.headers;
    if(!authorization){
      return res.status(401).json({
        errors: ['Loguin requerido'],
      });
    }

    const [, token] = authorization.split(' ');
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email} = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ["Token inválido ou expirado"],
    });

  }
}
