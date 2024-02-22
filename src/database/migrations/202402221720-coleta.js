'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coletas', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      empresa_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        foreignKey: true,
        references: {
          model:{
          tableName: 'empresas',
          },
          key: 'id'
      },
    },
      usuario_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        foreignKey: true,
        references: {
        model:{
          tableName: 'usuarios',
          },
          key: 'id'
      },
    },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      criado_em: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_da_coleta: {
        type: Sequelize.DATE
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      update_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('coletas');
  }
};
