'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const UsersTable = queryInterface.createTable("dados_usuarios", {

      Nome:{
        type: Sequelize.STRING,
        allowNull: false        
      },
      CPF:{

        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true
      },
      Email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      Telefone:{
        type: Sequelize.BIGINT,
        allowNull: false
      },
      Senha:{
        type: Sequelize.STRING,
        allowNull: false
      }



    })
  },




  

  async down (queryInterface) { queryInterface.dropTable("dados_usuarios")
   
  }
}
