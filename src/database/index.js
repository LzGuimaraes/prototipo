const { Sequelize } = require('sequelize');
const configDatabase = require('./config/config')

const {ProfessorModel} = require ('../Models/professor-model')
const {AlunoModel} = require('../Models/aluno-model');

//iniciando conexão com o banco de Dados
const database = new Sequelize(configDatabase, {logging: false});

//Iniciando o Models 
ProfessorModel.init(database);
AlunoModel.init(database);

//inicando relacionamentos
ProfessorModel.associate(database.models);
AlunoModel.associate(database.models);

module.exports = database ;
