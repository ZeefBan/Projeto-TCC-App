'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      "dados_usuarios",
      [
        {
          Nome: 'david',
          CPF: 57214316812,
          Email: 'david_fpks@hotmail.com',
          Telefone: 234545617,
          Senha: 'senha123'
        }

      ]
    )

  },

  async down (queryInterface, Sequelize) {
  
  }
};
