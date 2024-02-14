import Log from '../models/LogModel';

class LogController{
  async index(req, res){
    try {

      const logs = await Log.findAll();
      if(logs.length <= 0){
        return res.status(400).json({
          errors: ['Nenhum registro encontrado']
        });
      }

      return res.status(200).json(logs);

    } catch (e) {
    } catch (e) {
      if(!e.errors){
        return res.status(500).json({ errors: e });
      }
      else{
        return res.status(400).json({
          errors: e.errors.map((err) => err.message)
        });
      }
    }
  }

  async show(req, res){
    try {

      const { id } = req.params;
      const log = await Log.findByPk(id);
      if(!log){
        return res.status(400).json({
          errors: ['Log não localizado']
        });
      }

      return res.status(200).json(log);

    } catch (e) {
      if(!e.errors){
        return res.status(500).json({errors: e})
      }
      else{
        return res.status(400).json({
          errors: e.errors.map((err) => err.message)
        });
      }
    }

  }

  async showByUser(req, res){
    try {

      const { idUser } = req.params;
      const logs = Log.findAll({where: { usuarioId : idUser}});
      if(logs.length <= 0){
        return res.status(400).json({
          errors: ['Nenhum registro encontrado']
        });
      }

      return res.status(200).json({ logs });

    } catch (e) {
      if(!e.errors){
        return res.status(500).json({ errors: e });
      }
      else{
        return res.status(400).json({
          errors: e.errors.map((err) => err.message)
        });
      }
    }
  }

}

export default new LogController();
