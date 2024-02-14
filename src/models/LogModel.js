import Sequelize, { Model } from 'sequelize';

export default class Log extends Model{
  static init(sequelize){
    super.init({
      usuarioId: {
        type: Sequelize.BIGINT,
        foreignKey: true,
        defaultValue: Sequelize.BIGINT,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      log: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo Log deve ter entre 3 e 255 caracteres',
          },
        },
      },
    },{
      sequelize,
      modelName: 'Log',
    });

    return this;
  }
  static associate(models){
    this.belongsTo(models.Usuario);
  }
}
