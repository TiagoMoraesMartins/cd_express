const path = require('path');

class LandingPageController {
  index(req, res){
    try {
      return res.status(200).render(path.resolve('./src/views/landingpage/index'));
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(e => e.message)});
    }
  }
}

export default new LandingPageController();
