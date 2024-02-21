import Sequelize, { Model } from 'sequelize';

export default class Empresa extends Model {
  static init(sequelize) {
    super.init({
      razao_social: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo Razão Social deve ter entre 3 e 255 caracteres',
          },
        },
      },
      nome_fantasia: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo Nome Fantasia deve ter entre 3 e 255 caracteres',
          },
        },
      },
      cnpj: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [18],
            msg: 'Campo CNPJ deve ter no máximo 18 caracteres',
          },
        },
      },
      ie: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [20],
            msg: 'Campo IE deve ter no máximo 20 caracteres',
          },
        },
      },
      uf: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [2],
            msg: 'Campo UF deve ter no máximo 2 caracteres',
          },
        },
      },
      cidade: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo Cidade deve ter entre 3 e 255 caracteres',
          },
        },
      },
      bairro: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo Bairro deve ter entre 3 e 255 caracteres',
          },
        },
      },
      rua: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [2, 255],
            msg: 'Campo Rua deve ter entre 2 e 255 caracteres',
          },
        },
      },
      numero: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [1, 10],
            msg: 'Campo Número deve ter entre 1 e 10 caracteres',
          },
        },
      },
      complemento: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo Complemento deve ter entre 3 e 255 caracteres',
          },
        },
      },
      cep: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [8,10],
            msg: 'Campo CEP deve ter entre 8 e 10 caracteres',
          },
        },
      },
      pessoa_de_contato: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo Pessoa de Contato deve ter entre 3 e 255 caracteres',
          },
        },
      },
      pessoa_de_contato_2: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 255],
            msg: 'Campo Pessoa de Contato deve ter entre 3 e 255 caracteres',
          },
        },
      },
      telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [25],
            msg: 'Campo Telefone deve ter no máximo 25 caracteres',
          },
        },
      },
      telefone_2: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [25],
            msg: 'Campo Telefone deve ter no máximo 25 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [10, 255],
            msg: 'Campo E-mail deve ter entre 10 e 255 caracteres',
          },
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      email_2: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [10, 255],
            msg: 'Campo E-mail deve ter entre 10 e 255 caracteres',
          },
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      observacao:{
        type: Sequelize.STRING,
        defaultValue: '',
        len: {
          args: [3, 255],
          msg: 'Campo Observação deve ter entre 3 e 255 caracteres',
        },
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    }, {
      sequelize,
      modelName: 'Empresa',
    });

    return this;
  }
  static associate(models) {
    this.hasMany(models.Usuario,{ foreignKey: 'empresaId'});
  }
}
