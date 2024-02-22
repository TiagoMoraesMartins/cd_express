import Entrega from '../models/EntregaModel';

class EntregaController{

  async index(req, res){

    try {

      const entregas = await Entrega.findAll();
      console.log(entregas);

      if(entregas.length <= 0){
        return res.status(400).json({
          errors: ["Nenhum registro encontrado"]
        })
      }
      return res.json(entregas);
    } catch (e) {

      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar os dados no banco"]

      });

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
      const entrega = await Entrega.findByPk(id);
      if(!entrega){
        return res.status(400).json({
          errors: ["Entregador não localizado"]
        });
      }

      return res.json(entrega);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar entregador."]

    });
    }
  }// FIM DE SHOW()

  // MÉTODO UPDATE

  async update(req, res){
    try{

       if(!req.params.id){
       return res.status(400).json({
       errors: ['Id não enviado']
       });
     }
     const entrega = await Entrega.findByPk(req.params.id);
     if(!entrega){
       return res.status(400).json({
       errors: ['Dados não existe no db!']
       });
     }


     const updateEntrega = await entrega.update(req.body);
     return res.json(updateEntrega);

    }catch(e){

      return res.json(null);
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

      const entrega = await Entrega.findByPk(id);

      if(!entrega){
        return res.status(400).json({
          errors: ["Entrega não localizada"]
        });
      }

      await entrega.destroy();
      return res.json({
        entrega_apagada: true,
      });

    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao excluir a entrega!"]
      });
    }
  }

  async store(req, res){

    try{
      if(!req.body){
          return res.status(404).json({
            error: ["Objeto entregador inválido"]
            });
          }
      const creatEntrega = await Entrega.create(req.body);
      res.json(creatEntrega);
    }catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao salvar entrega."]
      });
    }


    // try {

    //   if(!req.body){
    //     return res.status(404).json({
    //       error: ["Objeto entregador inválido"]
    //     });
    //   }
    //   const entregador = await Entregador.create(req.body);
    //   return res.json({
    //     entregador_cadastrado: true,
    //     entregador
    //   });
    // } catch (e) {
    //   return res.status(400).json({
    //     errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao cadastrar entregador."]

    //   });
    // }
  }//FIM STORE()


}

export default new EntregaController;
