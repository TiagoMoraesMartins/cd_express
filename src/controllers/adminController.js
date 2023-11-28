const path = require('path');
exports.admin = (req, res) => {
    res.render(path.resolve('src/views/admin/index'));
}

exports.error = (req, res) => {
    res.render(path.resolve('src/views/admin/404'));
}