import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Empresa extends Model {
  static init(sequelize) {
    super.init({
      razao_social: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      nome_fantasia: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres',
          },
        },
      },
      cnpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [18],
            msg: 'Campo nome deve ter 18 caracteres',
          },
        },
      },
      ie: {
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
      pessoa_de_contato: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      pessoa_de_contato_2: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      telefone_2: {
        type: Sequelize.STRING,
        defaultValue: '',
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
      email_2: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      observacao:{
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
      modelName: 'Empresa',
    });

    return this;
  }
}
