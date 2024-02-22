import Sequelize, { Model } from 'sequelize';

class ColetaEntregador extends Model {
  static init(sequelize) {
    super.init({
      criado_em: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
      modelName: 'ColetaEntregador', tableName: 'coletasEntregadores',
    });

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Coleta, {
      foreignKey: 'coleta_id'
    });

    this.belongsTo(models.Entregador, {
      foreignKey: 'entregador_id'
    });
    this.belongsTo(models.Usuario, {
      foreignKey: 'usuario_id'
    });
  }
}

export default ColetaEntregador;
