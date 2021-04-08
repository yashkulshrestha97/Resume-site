'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.createTable('experiences', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      org_name: Sequelize.STRING,
      joining_date: Sequelize.STRING,
      last_date: Sequelize.STRING,
      duration: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }).then(() => {
      queryInterface.addConstraint('experiences', {
        fields: ['user_id'],
        type: 'FOREIGN KEY',
        name: 'fk_user_id_3',
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
    return queryInterface.dropTable('experiences');
  }
};
