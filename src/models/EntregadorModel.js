import Sequelize, { Model } from 'sequelize';

export default class Entregador extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique:{
          msg: 'E-mail já existe na base de dados'
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
     telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
     descricao:{
        type: Sequelize.STRING,
        defaultValue: '',
      },
	  criado_em: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      ativo: {
        type: Sequelize.TINYINT,
        defaultValue: true,
      },
    },{
      sequelize,
      modelName: 'Entregador', tableName: 'entregadores',
    });

    return this;
  }
}
