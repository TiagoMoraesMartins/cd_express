'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coletasEntregadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  coletasEntregadores.init({
    id_coleta: DataTypes.INTEGER,
    id_entregador: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    criadoEm: DataTypes.DATE,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coletasEntregadores',
  });
  return coletasEntregadores;
};