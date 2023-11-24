const express = require('express');
const route = express.Router();
const loginController = require('./src/controllers/loginController');
const landingPageController = require('./src/controllers/landingPageController');
const adminController = require('./src/controllers/adminController');

//Landing-page
route.get('/', landingPageController.landingPage);

//Login
route.get('/login', loginController.login);
route.post('/login/register', loginController.register);
route.post('/login/access', loginController.access);

//Admin
route.get('/admin', adminController.admin);

module.exports = route;