'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dados_usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dados_usuarios.init({
    Nome: DataTypes.STRING,
    CPF: DataTypes.STRING,
    Email: DataTypes.STRING,
    Telefone: DataTypes.BIGINT,
    Senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dados_usuarios',
  });
  return dados_usuarios;
};