'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coletasEntregadores', {
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
        references:{
          model:{
            tableName: 'coletas',
          },
          key: 'id'
        }
      },
      entregador_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        foreignKey: true,
        references:{
          model:{
            tableName: 'entregadores',
          },
          key: 'id'
        }
      },
      usuario_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        foreignKey: true,
        references:{
          model:{
            tableName: 'usuarios',
          },
          key: 'id'
        }
      },
      criado_em: {
        type: Sequelize.DATE
      },
      descricao: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('coletasEntregadores');
  }
};
