import Usuario from '../models/UsuarioModel';
import Log from '../models/LogModel';
class UsuarioController{
  async index(req, res){
    try {
      //const usuarios = await Usuario.findAll({where:{ativo:true}});
      const usuarios = await Usuario.findAll({attributes:['id','empresaId','nome','email','tipo_de_acesso','ativo', 'created_at','updated_at']});
      if(usuarios.length <= 0){
        return res.status(400).json({
          errors: ['Nenhum registro encontrado']
        });
      }

      return res.status(200).json(usuarios);

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

  async show(req, res){
    try {
      const { id } = req.params;
      const usuario = await Usuario.findByPk(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      if(usuario.ativo){
        return res.status(200).json(usuario);
      }
      else{
        return res.status(200).json({message: "Usuário não está ativo"});
      }

  } catch (e) {
    if(!e.errors){
      return res.status(500).json({errors: e });
    }
    else {
      return res.status(400).json({
        errors: e.errors.map((err)=> err.message )
        });
      }
    }
  }

  async update(req, res){
    try {

      let errors = [];
      let usuario = {};

      const { id } = req.params;

      usuario = await Usuario.findByPk(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      errors = validarCampos(req);
      usuario = removerEspacosEmBranco(req);

      if(!errors){
        return res.status(500).json({ errors: errors});
      }
      else{
        await Usuario.update(usuario, {where: {id: id}}, {multi:true});

        const usuarioId = req.userId;
        const email = req.userEmail;
        const log = {
          "usuarioId": usuarioId,
          "email": email,
          "log": "Usuário atualizado: " + id
        }

        await Log.create(log);
        return res.status(200).json({
          "usuario":{
            usuario_atualizado: true
          },
          "log":{
            log_criado: true,
            log
          }
        });
      }

    } catch (e) {
      if(!e.errors){
        return res.status(500).json({errors: e });
      }
      else{
        return res.status(400).json({
          errors: e.errors.map((err) => err.message )
          });
        }
      }
  }

  async delete(req, res){
    try {

      let usuario = {};

      const { id } = req.params;
      usuario = await Usuario.findByPk(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      await Usuario.update({ativo:false}, {where:{id:id}},{multi:true});
      const usuarioId = req.userId;
      const email = req.userEmail;
      const log = {
        "usuarioId": usuarioId,
        "email": email,
        "log": "Usuario desativado: " + usuario.id,
      }

      await Log.create(log);

      return res.status(200).json({
        "usuario": {
          usuario_apagado: true
        },
        "log":{
          log_criado: true,
          log
        }
      });

    } catch (e) {
      console.log(e);
      if(!e.errors){
        return res.status(500).json({errors: e});
      }
      else{
        return res.status(400).json({
          errors: e.errors.map((err) => err.message )
        });
      }
    }
  }

  async store(req, res){
    try {
      console.log(req.body);
      let errors = [];
      let usuario = {};

      errors = validarCampos(req);
      usuario = removerEspacosEmBranco(req);

      if(!errors){
        return res.status(500).json({errors: errors});
      }
      else{

        usuario = await Usuario.create(usuario);

        const usuarioId = req.userId;
        const email = req.userEmail;
        const log = {
          "usuarioId": usuarioId,
          "email": email,
          "log": "Usuário cadastrado: " + usuario.id
        }

        await Log.create(log);

        return res.status(200).json({
          "usuario": {
          usuario_cadastrado: true,
          usuario
        },
          "log": {
            log_criado: true,
            log
          }
        });
      }

    } catch (e) {
      if(!e.errors){
        console.log('erro');
        return res.status(500).json({errors: e });
      }
      else {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message )
        });
      }
    }
  }
}

function validarCampos(req){
  let errors = [];
  let usuario = req.body;

  if(!usuario.nome){
    errors.push('Nome está em branco');
  }
  if(!usuario.email){
    errors.push('E-mail está em branco');
  }
  return errors;

}

function removerEspacosEmBranco(req){
  let usuario = req.body;
    for(let attr in usuario){
    usuario[attr] = usuario[attr].trim();
  }

  return usuario;
}

export default new UsuarioController();
