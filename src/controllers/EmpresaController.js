import Empresa from '../models/EmpresaModel';

class EmpresaController{
  async index(req, res){
    try {
      //const empresas = await Empresa.findAll({where:{ativo:true}});
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
      const empresa = await Empresa.findByPk(id);
      if(!empresa){
        return res.status(400).json({
          errors: ['Empresa não localizada']
        });
      }

      if(empresa.ativo){
        return res.status(200).json({ empresa });
      }
      else{
        return res.status(200).json({ message: "Empresa não está ativa"});
      }

    } catch (e) {
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
      let errors = [];
      let empresa = {};

      const { id } = req.params;

      empresa = await Empresa.findByPk(id);
      if(!empresa){
        return res.status(400).json({
          errors: ['Empresa não localizado']
        });
      }

      errors = validarCampos(req);
      empresa = removerEspacosEmBranco(req);

      if(!errors){
        return res.status(500).json({ errors: errors });
      }
      else{
        await Empresa.update(empresa, {where: {id: id}}, {multi: true});
        return res.status(200).json({
          empresa_atualizada: true
        });
      }

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

      let empresa = {};

      const { id } = req.params;
      empresa = await Empresa.findByPk(id);
      if(!empresa){
        return res.status(400).json({
          errors: ['Empresa não localizada']
        });
      }

      await Empresa.update({ativo: false}, {where: {id: id}}, {multi: true});
      return res.status(200).json({
        empresa_apagada: true
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

      let errors = [];
      let empresa = {};

      errors = validarCampos(req);
      empresa = removerEspacosEmBranco(req);

      if(!errors){
        return res.status(500).json({errors: errors});
      }
      else{
        empresa = await Empresa.create(empresa);
        return res.status(200).json({
          empresa_cadastrada: true,
          empresa
        });
      }

    } catch (e) {
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
}

function validarCampos(req){
  let errors = [];
  let empresa = req.body;

  if(!empresa.nome_antasia){
    errors.push('Nome Fantasia está em branco');
  }
  if(!empresa.pessoa_de_contato){
    errors.push('Nome da pessoa de contato está em branco');
  }
  if(!empresa.email){
    errors.push('O email está em branco');
  }
  if(!empresa.ativo){
    errors.push('O campo ativo está em branco');
  }

  return errors;
}

function removerEspacosEmBranco(req){
  let empresa = req.body;
  for(let attr in empresa){
    empresa[attr] = empresa[attr].trim();
  }
  return empresa;
}

export default new EmpresaController();
