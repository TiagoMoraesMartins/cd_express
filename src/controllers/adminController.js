const path = require('path');
exports.admin = (req, res) => {
    if(req.session.user){
        return res.render(path.resolve('src/views/admin/index'));
    } 
    else{
        res.redirect('/login');
    }
    
}

exports.error = (req, res) => {
    res.render(path.resolve('src/views/admin/404'));
}