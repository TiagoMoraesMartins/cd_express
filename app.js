// eslint-disable-next-line
import dotenv from 'dotenv';
dotenv.config();

import './src/database';
import express from 'express';

import usuarioRoutes from './src/routes/usuarioRoutes';
import empresaRoutes from './src/routes/empresaRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import logRoutes from './src/routes/logRoutes';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './src/swagger.json';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  config(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}));
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.app.use('/usuario', usuarioRoutes);
    this.app.use('/empresa', empresaRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/log', logRoutes);
  }

}

export default new App().app;
