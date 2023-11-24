const path = require('path');
exports.landingPage = (req, res) =>{
    res.render(path.resolve('src/views/landingpage/index') );
}