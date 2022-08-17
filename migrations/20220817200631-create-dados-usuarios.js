'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dados_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome: {
        type: Sequelize.STRING
      },
      CPF: {
        type: Sequelize.BIGINT
      },
      Email: {
        type: Sequelize.STRING
      },
      Telefone: {
        type: Sequelize.BIGINT
      },
      Senha: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dados_usuarios');
  }
};