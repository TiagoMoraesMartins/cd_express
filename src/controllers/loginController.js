const path = require('path');
const Login = require('../models/LoginModel');

exports.login = (req, res) => {
    res.render(path.resolve('src/views/admin/login'));
};

exports.registrationForm = (req, res) => {
    res.render(path.resolve('src/views/admin/register'));
}

exports.recover = (req, res) => {
    res.render(path.resolve('src/views/admin/recover'));
}

exports.register = async function(req, res){
    try{
        const login = new Login(req.body);
        await login.register();

        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', 'Usuário criado com sucesso');
        req.session.save(function(){
            return res.redirect('back');
        });
    }catch(e){
        console.log(e);
        return res.send('404 - Register');

    }
};

exports.access = (req, res) => {
    res.send('access');
};