// const Sequelize = require('sequelize');
// const sequelize = require('../database/connection'); 
module.exports = (sequelize, dataTypes) => 
{
    const Education =  sequelize.define('education', {
        id: {
            type: dataTypes.INTEGER(11),
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
        institution_name: dataTypes.STRING,
        percentage: dataTypes.INTEGER,
        degree: dataTypes.STRING,
        yop: dataTypes.INTEGER
    }); 

        Education.associate = function(models) {
            // associations can be defined here
            Education.belongsTo(models.users, { foreignKey: 'user_id', required: false });
        };

    }