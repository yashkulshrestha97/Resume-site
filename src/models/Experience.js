// const Sequelize = require('sequelize');
// const sequelize = require('../database/connection');

module.exports = (sequelize, dataTypes) => 
{
    const Experience =  sequelize.define('experience', {
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
    org_name: Sequelize.STRING,
    joining_date: Sequelize.STRING,
    last_date: Sequelize.STRING,
    duration: Sequelize.INTEGER
}); 

    Experience.associate = function(models) {
        // associations can be defined here
        Experience.belongsTo(models.users, { foreignKey: 'user_id', required: false });
    };

}