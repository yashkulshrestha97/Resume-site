'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return queryInterface.createTable('skills', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },  
      user_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        onDelete: 'CASCADE',
        reference: {
            model: 'users',
            key: 'id',
            as: 'user_id'
        }
    },   
      skills: Sequelize.STRING,
      hobbies: Sequelize.STRING,
      status: Sequelize.BOOLEAN,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    }).then(() => {
      queryInterface.addConstraint('skills', {
        fields: ['user_id'],
        type: 'FOREIGN KEY',
        name: 'fk_user_id_4',
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
     return queryInterface.dropTable('skills');
  }
};
