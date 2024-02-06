import Usuario from '../models/UsuarioModel';

class UsuarioController{

  async index(req, res){

    try {

      const usuarios = await Usuario.findAll();
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
    console.log('show');
    try {

      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          errors: ['Argumento id não foi localizado']
        });
      }

      const usuario = await Usuario.findByPk(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      return res.status(200).json(usuario);

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

      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          error: ['Argumento id não foi localizado']
        });
      }

      const usuario = await Usuario.findByPk(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      if(!req.body){
        return res.status(400).json({
          errors: ['Objeto usuário náo localizado']
        });
      }

      const usuarioAtualizado = await usuario.update(req.body);
      return res.json(usuarioAtualizado);

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

      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          error: ['Parametro id não foi localizado']
        });
      }

      const usuario = await Usuario.findById(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      await usuario.destroy();
      return res.status(200).json({
        usuario_apagado: true,
      });

    } catch (e) {

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

      if(!req.body){
        return res.status(400).json({
          errors: ['Objeto usuario inválido']
        });
      }

      const usuario = await Usuario.create(req.body);
      return res.status(200).json({
        usuario_cadastrado: true,
        usuario
      });

    } catch (e) {

      if(!e.errors){
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

export default new UsuarioController();
