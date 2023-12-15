const express = require('express');
const route = express.Router();
const path = require('path');

//Controllers
const loginController = require('./src/controllers/loginController');
const landingPageController = require('./src/controllers/landingPageController');
const adminController = require('./src/controllers/adminController');

//Middlewares
const { loginRequired } = require('./src/middlewares/middleware');



//Landing-page
route.get('/', landingPageController.landingPage);

//Login
route.get('/login', loginController.login);
route.get('/login/register', loginController.registrationForm);
route.get('/login/recover', loginController.recover);
route.get('/logout', loginController.logout);
route.post('/login/register', loginController.register);
route.post('/login', loginController.access);

//Admin
route.get('/admin', loginRequired, adminController.admin);

//404 - Admin
//route.get('/admin/*', function(req, res){
//    res.render(path.resolve('src/views/admin/404'));
//});

//TODO: Arrumar a rota para quando o usuário digitar somente admin/

//404 - Login
//route.get('/login/*', function(req, res){
//    res.render(path.resolve('src/views/admin/404'));
//});

//TODO: Arrumar a rota para quando o usuário digitar somente login/

//404 - Landing page
//route.get('/*', function(req, res){
//    res.render(path.resolve('src/views/landingpage/404'));
//});

module.exports = route;