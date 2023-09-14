'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Aluno', 
      'id_Professor', 
      {
        type:Sequelize.UUID,
        allowNull: false,
        references:{model:'Professor', key:'id_Professor'},
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      }

    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Aluno', 'id_Professor');
  }
};
