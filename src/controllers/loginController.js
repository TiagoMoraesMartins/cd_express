const path = require('path');

class LoginController{
  index(req, res){
    try {
      if(req.session.user) {
        return res.status(200).redirect('/admin/');
      }
      else{
        return res.status(200).render(path.resolve('src/views/admin/login'));
      }
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(e => e.message)});
    }
  }

  registrationForm (req, res){
    res.render(path.resolve('src/views/admin/register'));
  }

  recover (req, res){
    res.render(path.resolve('src/views/admin/recover'));
  }

}

export default new LoginController();
