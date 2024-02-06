import Empresa from '../models/EmpresaModel';

class EmpresaController{
  constructor(){
    const errors = [ ];
    const empresa = { };
  }
  async index(req, res){

    try {

      const empresas = await Empresa.findAll();
      if(empresas.length <= 0){
        return res.status(400).json({
          errors: ['Nenhum registro encontrado']
        });
      }

      return res.status(200).json(empresas);

    } catch (e) {

      if(!e.errors){
        return res.status(500).json({ errors: e })
      }
      else{
        return res.status(400).json({
          errors: e.errors.map((err)=>err.message )
        });
      }
    }
  }

  async show(req, res){

    try {

      const { id } = req.params;
      if(!id){
        return res.status(400).json({
          errors: ['Argumento id não foi localizado']
        });
      }

      const empresa = await Empresa.findByPk(id);
      if(!empresa){
        return res.status(400).json({
          errors: ['Empresa não localizada']
        });
      }

      return res.status(200).json({ empresa });

    } catch (error) {

      if(!e.erros){
        return res.status(500).json({ errors: e});
      }
      else{
        return res.status(400).json({
          errors: e.errors.map((err)=> err.message)
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

      const empresa = await Empresa.findByPk(id);
      if(!empresa){
        return res.status(400).json({
          errors: ['Empresa não localizado']
        });
      }

      if(!req.body){
        return res.status(400).json({
          errors: ['Objeto empresa não localizado']
        });
      }

      const empresaAtualizada = await empresa.update(req.body);
      return res.status(200).json(empresaAtualizada);

    } catch (e) {
      if(!e.errors){
        return res.status(500).json({errors: e });
      }
      else{
        return res.status(400).json({
          errors: e.errors.map((err) => err.message)
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

      const empresa = await Empresa.findByPk(id);
      if(!empresa){
        return res.status(400).json({
          errors: ['Empresa não localizada']
        });
      }

      await empresa.destroy();
      return res.status(200).json({
        empresa_apagada: true
      });

    } catch (e) {

      if(!e.errors){
        return res.status(500).json({errors: e});
      }
      else{
        return res.status(400).json({errors: e.errors.map((err) => err.message)
        });
      }
    }
  }

  async store(req, res){

    try {

      if(!req.body){
        return res.status(400).json({
          errors: ['Objeto empresa inválido']
        });
      }

      const { nome_fantasia, pessoa_de_contato, email, ativo} = req.body;
      nome_fantasia = '';
      pessoa_de_contato = '';
      email = '';
      ativo = '';

      if(nome_fantasia){
        this.errors.push('Nome Fantasia está em branco');
      }
      if(pessoa_de_contato){
        this.errors.push('Nome da pessoa de contato está em branco');
      }
      if(email){
        this.errors.push('O email está em branco');
      }
      if(ativo){
        this.errors.push('O campo ativo está em branco');
      }

      if(this.errors){
        return res.status(500).json({errors: errors.array()})
      }
      else{
        const empresa = await Empresa.create(req.body);
        return res.status(200).json({
          empresa_cadastrada: true,
          empresa
        });
      }

    } catch (e) {

      console.log(e);

      if(!e.errors){
        return res.status(500).json({errors: e});
      }
      else{
        return res.status(400).json({
          errors: e.errors.map((err) => err.message)
        });
      }
    }
  }
  validarEmpresa(nome_fantasia){

  }

}

export default new EmpresaController();
