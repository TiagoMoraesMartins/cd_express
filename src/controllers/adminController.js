const path = require('path');
exports.admin = (req, res) => {
    res.render(path.resolve('src/views/admin/index'));
}