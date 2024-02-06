import Sequelize, { Model } from 'sequelize';

class Entrega extends Model {
  static init(sequelize) {
    super.init({
      id_coleta: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      uf: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      cidade: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      bairro: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      rua: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      numero: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      complemento: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      cep: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      data_de_entrega: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      criadoEm: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      valorEntrega: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      valorEmpresa: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      valorEntregador: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
    }, {
      sequelize,
      modelName: 'Entrega',
    });

    return this;
  }
}

export default Entrega;
