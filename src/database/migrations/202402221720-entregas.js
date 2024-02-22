'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('entregas', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      coleta_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        foreignKey: true,
        references: {
          model:{
            tableName: 'coletas',
          },
          key: 'id'
        },
      },
      nome: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      rua: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      data_de_entrega: {
        type: Sequelize.DATE
      },
      criado_em: {
        type: Sequelize.DATE
      },
      valor_entrega: {
        type: Sequelize.FLOAT
      },
      valor_empresa: {
        type: Sequelize.FLOAT
      },
      valor_entregador: {
        type: Sequelize.FLOAT
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('entregas');
  }
};
