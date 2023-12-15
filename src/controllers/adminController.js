const path = require('path');

class AdminController {
  index(req, res){
    try {
      return res.status(200).render(path.resolve('src/views/admin/index'));
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(e => e.message)});
    }
  }

  error(req, res){
    try {
      return res.status(200).render(path.resolve('src/views/admin/index'));
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(e => e.message)});
    }
  }
}

export default new AdminController();
