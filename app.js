// eslint-disable-next-line
import dotenv from 'dotenv';
dotenv.config();

import './src/database';
import express from 'express';
import landingPageRoutes from './src/routes/landingPageRoutes';
import adminRoutes from './src/routes/adminRoutes';
import loginRoutes from './src/routes/loginRoutes';
import usuarioRoutes from './src/routes/usuarioRoutes';
import empresaRoutes from './src/routes/empresaRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import logRoutes from './src/routes/logRoutes';
import path from 'path';
import flash from 'connect-flash';
import csrf from 'csurf';
import session from 'express-session';

const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

//import swaggerUi from 'swagger-ui-express';
//import swaggerDocument from './swagger.json';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  config(){
    this.app.use(flash());
    this.app.set('views', path.resolve(__dirname, 'src', 'views'));
    this.app.use(express.static(path.resolve(__dirname, 'public')));
    this.app.set('view engine', 'ejs');
    this.app.use(session({
      resave: true,
      saveUninitialized: true,
      secret:"secret_secret_secret",
      cookie: { secure: false, maxAge: 14400000 },
    }));
    //TODO: Tratamento para ativar ou não o csrf - VERIFICAR SE É A MELHOR FORMA
    /*this.app.use('/tokens', (req, res, next) =>{
      return next();
      this.app.use(csrf());
    })*/
    //TODO: Desativei o csrf pois qualquer método de POST estava solicitando...
    //TODO:... a ideia é validar somente os formulários
    //this.app.use(csrf());
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(middlewareGlobal);
    //this.app.use(checkCsrfError);
    //this.app.use(csrfMiddleware);
  }

  routes() {
    //this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.app.use('/', landingPageRoutes);
    this.app.use('/login', loginRoutes);
    this.app.use('/admin', adminRoutes);
    this.app.use('/admin/usuario', usuarioRoutes);
    this.app.use('/admin/empresa', empresaRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/log', logRoutes);
  }

}

export default new App().app;
