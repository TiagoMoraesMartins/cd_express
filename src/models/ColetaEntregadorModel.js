import Sequelize, { Model } from 'sequelize';

class ColetaEntregador extends Model {
  static init(sequelize) {
    super.init({
      id_coleta: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      id_entregador: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      criadoEm: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
      modelName: 'ColetaEntregador',
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Coleta, {
      foreignKey: 'id_coleta',
      as: 'coleta',
    });

    this.belongsTo(models.Entregador, {
      foreignKey: 'id_entregador',
      as: 'entregador',
    });

    this.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario',
      as: 'usuario',
    });
  }
}

export default ColetaEntregador;
