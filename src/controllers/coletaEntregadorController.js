import ColetaEntregador from '../models/ColetaEntregadorModel';

class ColetaEntregadorController{

  async index(req, res){

    try {

      const coletasEntregadores = await ColetaEntregador.findAll();
      console.log(coletasEntregadores);

      if(coletasEntregadores.length <= 0){
        return res.status(400).json({
          errors: ["Nenhum registro encontrado"]
        })
      }
      return res.json(coletasEntregadores);
    } catch (e) {

      console.log(e)

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
      const coletaEntregador = await ColetaEntregador.findByPk(id);
      if(!coletaEntregador){
        return res.status(400).json({
          errors: ["Dado não localizado"]
        });
      }

      return res.json(coletaEntregador);
  } catch (e) {
    return res.status(400).json({
      errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao buscar entregador."]

    });
    }
  }// FIM DE SHOW()

  // MÉTODO UPDATE

  // async update(req, res){
  //   try{

  //      if(!req.params.id){
  //      return res.status(400).json({
  //      errors: ['Id não enviado']
  //      });
  //    }
  //    const entregador = await Entregador.findByPk(req.params.id);
  //    if(!entregador){
  //      return res.status(400).json({
  //      errors: ['Dados não existe no db!']
  //      });
  //    }


  //    const updateEntregador = await entregador.update(req.body);
  //    return res.json(updateEntregador);

  //   }catch(e){

  //     return res.json(null);
  //   }
  // }

  //  async delete(req, res){

  //   try {

  //     const { id } = req.params;

  //     if(!id){
  //       return res.status(400).json({
  //         error: ["Parametro id não foi localizado"]
  //       });
  //     }

  //     const entregador = await Entregador.findByPk(id);

  //     if(!entregador){
  //       return res.status(400).json({
  //         errors: ["Entregador não localizado"]
  //       });
  //     }

  //     await entregador.destroy();
  //     return res.json({
  //       entregador_apagado: true,
  //     });

  //   } catch (e) {
  //     return res.status(400).json({
  //       errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao excluir entregador!"]
  //     });
  //   }
  // }

  // async store(req, res){

  //   try{
  //     const creatEntregador = await Entregador.create(req.body);
  //     res.json(creatEntregador);
  //   }catch (e) {
  //     return res.status(400).json({
  //       errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao salvar entregador."]
  //     });
  //   }


  //   // try {

  //   //   if(!req.body){
  //   //     return res.status(404).json({
  //   //       error: ["Objeto entregador inválido"]
  //   //     });
  //   //   }
  //   //   const entregador = await Entregador.create(req.body);
  //   //   return res.json({
  //   //     entregador_cadastrado: true,
  //   //     entregador
  //   //   });
  //   // } catch (e) {
  //   //   return res.status(400).json({
  //   //     errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao cadastrar entregador."]

  //   //   });
  //   // }
  // }//FIM STORE()


}

export default new ColetaEntregadorController;
