const path = require('path');

exports.login = (req, res) => {
    res.render(path.resolve('src/views/admin/login'));
};

exports.register = (req, res) => {
    res.send('register');
};

exports.access = (req, res) => {
    res.send('access');
};