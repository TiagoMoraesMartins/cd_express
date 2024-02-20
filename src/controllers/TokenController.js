import Usuario from '../models/UsuarioModel';
import jwt from 'jsonwebtoken';

class TokenController{
  async store(req, res){
    try {
      const { email = '', password = '' } = req.body;

    if(!email || !password){
      return res.status(401).json({
        errors: ['Credenciais inválidas']
      });
    }

    const usuario = await Usuario.findOne({
      where:{
        email
      }
    });

    if(!usuario){
      return res.status(401).json({
        errors: ['Usuário não encontrado']
      });
    }

    if(!(await usuario.passwordIsValid(password))){
      return res.status(401).json({
        errors: ['Senha inválida']
      });
    }

    const { id } = usuario;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET,{
      expiresIn: process.env.TOKEN_EXPIRATION
    });

    return res.json({ token });
    } catch (e) {
      if(!e.errors){
        return res.status(500).json({ errors: e });
      }
      else{
        return res.status(400).json({
          errors: e.errors.map((err) => err.message )
        });
      }
    }
  }
}

export default new TokenController();
