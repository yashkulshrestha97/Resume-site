'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.createTable('infos', {
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
      houseNumber: Sequelize.STRING,
      street: Sequelize.STRING,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      country: Sequelize.STRING,
      age: Sequelize.INTEGER,
      mobileNumber: Sequelize.INTEGER,
      status: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }).then(() => {
      queryInterface.addConstraint('infos', {
        fields: ['user_id'],
        type: 'FOREIGN KEY',
        name: 'fk_user_id_1',
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
     return queryInterface.dropTable('infos');

  }
};
