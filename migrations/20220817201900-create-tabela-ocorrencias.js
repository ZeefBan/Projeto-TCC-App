'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tabela_ocorrencias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Ocorrencia: {
        type: Sequelize.BIGINT
      },
      CPF: {
        type: Sequelize.BIGINT
      },
      Rua: {
        type: Sequelize.STRING
      },
      CEP: {
        type: Sequelize.BIGINT
      },
      Ocorrencia: {
        type: Sequelize.INTEGER
      },
      Descricao: {
        type: Sequelize.STRING
      },
      Observacao: {
        type: Sequelize.STRING
      },
      Data: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('tabela_ocorrencias');
  }
};