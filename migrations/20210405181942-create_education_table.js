'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.createTable('educations', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      }, 
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        foreignKey: true,
        reference: {
          model: 'users',
          key: 'id',
          as: 'user_id'
        }
      },
      institution_name: Sequelize.STRING,
      percentage: Sequelize.INTEGER,
      degree: Sequelize.STRING,
      yop: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }).then(() => {
      queryInterface.addConstraint('educations', {
        fields: ['user_id'],
        type: 'FOREIGN KEY',
        name: 'fk_user_id_2',
        references: {
          table: 'users',
          field: 'id',
        },
        onDelete: 'cascade',
      });
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('educations');
  }
};
