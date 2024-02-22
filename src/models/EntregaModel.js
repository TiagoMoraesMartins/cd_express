import Sequelize, { Model } from 'sequelize';

class Entrega extends Model {
  static init(sequelize) {
    super.init({
      coleta_id: {
        type: Sequelize.BIGINT,
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
      criado_em: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      valor_entrega: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      valor_empresa: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      valor_entregador: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
    }, {
      sequelize,
      modelName: 'Entrega', tableName: 'entregas',
    });

    return this;
  }
}

export default Entrega;
