import { Sequelize } from "sequelize";
import dataBaseConfig from '../config/database';
import Usuario from '../models/UsuarioModel';
import Empresa from '../models/EmpresaModel';
import Log from '../models/LogModel';
import Entregador from '../models/EntregadorModel';
import Coleta from '../models/ColetaModel';
import Entrega from "../models/EntregaModel";
import ColetaEntregador from '../models/ColetaEntregadorModel';

const models = [Usuario, Empresa, Log, Entregador, Coleta, Entrega, ColetaEntregador];
const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
