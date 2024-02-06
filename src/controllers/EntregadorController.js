import Entregador from '../models/EntregadorModel';

class EntregadorController{

  async index(req, res){
    try {

      const entregadores = await Entregador.findAll();
      if(entregadores.length <= 0){
        return res.status(400).json({
          errors: ["Nenhum registro encontrado"]
        })
      }

      return res.json(entregadores);
    } catch (e) {

      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar os dados no banco"]

      });
      console.log(e)

        
    }
  }

  async show(req, res){
    try {

      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          errors: ["Parametro id não foi localizado"]
        });
      }

      const entregador = await Entregador.findByPk(id);
      if(!entregador){
        return res.status(400).json({
          errors: ["Entregador não localizado"]
        });
      }

      return res.json(entregador);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar entregador."]
      //errors: e.errors.map((err)=> err.message )
    });
    }
  }

  async update(req, res){
    try {
      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          error: ["Parametro id não foi localizado"]
        });
      }

      const entregador = await Entregador.findByPk(id);
      if(!entregador){
        return res.status(400).json({
          errors: ["Entregador não localizado"]
        });
      }

      const entregadorAtualizado = entregador.update(req.body, {where: {id}});
      return res.json(entregadorAtualizado);

    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao atualizar entregador."]
        //errors: e.errors.map((err) => err.message )
      });
    }
  }

  async delete(req, res){
    try {
      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          error: ["Parametro id não foi localizado"]
        });
      }

      const entregador = await Entregador.findById(id);
      if(!entregador){
        return res.status(400).json({
          errors: ["Entregador não localizado"]
        });
      }

      await entregador.destroy({where: {id}});
      return res.json({
        uentregador_apagado: true,
      });

    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao excluir entregador."]
       
      });
    }
  }

  async store(req, res){
    try {
      if(!req.body){
        return res.status(404).json({
          error: ["Objeto entregador inválido"]
        });
      }
      const entregador = Entregador.create(req.body);
      return res.json({
        entregador_cadastrado: true,
        entregador
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao cadastrar entregador."]
       
      });
    }
  }     
      

}

export default new EntregadorController;