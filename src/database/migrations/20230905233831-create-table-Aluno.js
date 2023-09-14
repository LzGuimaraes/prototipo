'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Aluno', {
       id_Aluno:{
        type:
        Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      nome:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      sobrenome:{
        type: Sequelize.TEXT,
        allowNull: false
      },

      CPF:{
        type: Sequelize.TEXT, 
        allowNull: false},
      turma:{
        type: Sequelize.TEXT, 
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Aluno');
  }
};
