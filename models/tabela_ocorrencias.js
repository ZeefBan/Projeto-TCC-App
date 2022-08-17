'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tabela_ocorrencias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tabela_ocorrencias.init({
    ID_Ocorrencia: DataTypes.BIGINT,
    CPF: DataTypes.BIGINT,
    Rua: DataTypes.STRING,
    CEP: DataTypes.BIGINT,
    Ocorrencia: DataTypes.INTEGER,
    Descricao: DataTypes.STRING,
    Observacao: DataTypes.STRING,
    Data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tabela_ocorrencias',
  });
  return tabela_ocorrencias;
};