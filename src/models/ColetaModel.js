import Sequelize, { Model } from 'sequelize';

class Coleta extends Model {
  static init(sequelize) {
    super.init({
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
      criado_em: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      data_da_coleta: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    }, {
      sequelize,
      modelName: 'Coleta', tableName: 'coletas'
    });

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Empresa, {foreignKey: 'empresa_id'});
    this.belongsTo(models.Usuario, {foreignKey: 'usuario_id'});

},
//   static associate(models) {
//     this.belongsTo(models.Usuario, {foreignKey: 'usuario_id'});
// }


}

export default Coleta;
