const path = require('path');
const Login = require('../models/LoginModel');

exports.login = (req, res) => {
    if(req.session.user) {
        return res.redirect('/admin');
    }
    else{
        res.render(path.resolve('src/views/admin/login'));
    }
    
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

        req.flash('success', 'Usuário cadastrado com sucesso');
        req.session.save(function(){
            return res.redirect('back');
        });
    }catch(e){
        console.log(e);
        return res.send('404 - Register');

    }
};

exports.access = async function(req, res){
    try{
        const login = new Login(req.body);
        await login.logar();

        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('back');
            });
            return;
        }

        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('back');
        });
    }catch(e){
        console.log(e);
        return res.send('404 - Logar');
    }
};

exports.logout = (req, res) =>{
    req.session.destroy();
    res.redirect('/login')
}