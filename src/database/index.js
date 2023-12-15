import { Sequelize } from "sequelize";
import dataBaseConfig from '../config/database';
import Usuario from '../models/UsuarioModel';

const models = [Usuario];
const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
