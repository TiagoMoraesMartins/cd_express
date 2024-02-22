import Coleta from '../models/ColetaModel';

class ColetaController{

  async index(req, res){

    try {

      const coletas = await Coleta.findAll();
      console.log(coletas);

      if(coletas.length <= 0){
        return res.status(400).json({
          errors: ["Nenhum registro encontrado"]
        })
      }
      return res.json(coletas);
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
      const coleta = await Coleta.findByPk(id);
      if(!coleta){
        return res.status(400).json({
          errors: ["Entregador não localizado"]
        });
      }

      return res.json(coleta);
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
     const coleta = await Coleta.findByPk(req.params.id);
     if(!coleta){
       return res.status(400).json({
       errors: ['Dados não existe no db!']
       });
     }

     console.log(coleta)

     console.log("Requisião: "+req.body)


     const updateColeta = await coleta.update(req.body);

     return res.json(updateColeta);

    }catch(e){

      return res.json(null);
    }
  }

   async delete(req, res){

    try {
      const { id } = req.params;

      if(!id){
        return res.status(400).json({
          error: ["Id não foi localizado"]
        });
      }

      const coleta = await Coleta.findByPk(id);

     // console.log("Coleta: "+coleta)

      if(!coleta){
        return res.status(400).json({
          errors: ["Coleta não localizada"]
        });
      }
      await coleta.destroy();
      return res.json({
        coleta_apagada: true,
      });

    } catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao excluir a coleta."]
      });
    }
  }

  async store(req, res){

    try{
      console.log("Requisição: "+req.body)

      const creatColeta = await Coleta.create(req.body);

      res.json(creatColeta);
    }catch (e) {
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : ["Erro desconhecido ao salvar coleta."]
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

export default new ColetaController;
