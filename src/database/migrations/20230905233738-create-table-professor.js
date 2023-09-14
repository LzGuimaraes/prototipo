'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Professor', { 
      id_Professor: {
            type:Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
      nome:{ 
            type: Sequelize.TEXT,
            allowNull: false,
        },
      sobrenome:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      matricula:
      {
          type:Sequelize.TEXT,
          allowNull: false,
      },
      CPF:{
        type:Sequelize.TEXT,
        allowNull: false,
    },
      cargo:
      {
        type:Sequelize.TEXT,
        allowNull: false,
      },
      materia_ministrada:
      {
        type:Sequelize.TEXT,
        allowNull: false,
      },
      email:{
        type:Sequelize.TEXT,
        allowNull: false,
        unique: true,
      },
      senha:{
        type:Sequelize.TEXT,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Professor');
  }
};
