import Usuario from '../models/Usuario';

class UsuarioController{
  async index(req, res){
    try {

      const usuarios = await Usuario.findAll();
      if(usuarios.length <= 0){
        return res.status(400).json({
          errors: ['Nenhum registro encontrado']
        })
      }

      return res.json(usuarios);
    } catch (e) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message )});
    }
  }

  async show(req, res){
    try {

      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          error: ['Parametro id não foi localizado']
        });
      }

      const usuario = await Usuario.findByPk(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      return res.json(usuario);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors.map((err)=> err.message )
    });
    }
  }

  async update(req, res){
    try {
      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          error: ['Parametro id não foi localizado']
        });
      }

      const usuario = await Usuario.findByPk(id);
      if(!usuario){
        return res.status(400).json({
          errors: ['Usuário não localizado']
        });
      }

      const usuarioAtualizado = usuario.update(req.body);
      return res.json(usuarioAtualizado);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message )
      });
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
      return res.json({
        usuario_apagado: true,
      });

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message )
      });
    }
  }

  async store(req, res){
    try {
      if(!req.body){
        return res.status(404).json({
          error: ['Objeto usuario inválido']
        });
      }

      const usuario = Usuario.create(req.body);
      return res.json({
        usuario_cadastrado: true,
        usuario
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err)=> err.message )
      });
    }
  }
}

export default new UsuarioController();
