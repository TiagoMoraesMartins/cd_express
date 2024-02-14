import { Sequelize } from "sequelize";
import dataBaseConfig from '../config/database';
import Usuario from '../models/UsuarioModel';
import Empresa from '../models/EmpresaModel';
import Log from '../models/LogModel';

const models = [Usuario, Empresa, Log];
const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
