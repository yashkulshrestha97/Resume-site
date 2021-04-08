// const Sequelize = require('sequelize');
// const sequelize = require('../database/connection');

module.exports = (sequelize, dataTypes) => 
{
    const Skills =  sequelize.define('skills', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },  
    user_id: {
        type: dataTypes.INTEGER,
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
    status: Sequelize.BOOLEAN
}); 

Skills.associate = function(models) {
    // associations can be defined here
    Skills.belongsTo(models.users, { foreignKey: 'user_id', required: false });
};

}