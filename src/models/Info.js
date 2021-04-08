// const Sequelize = require('sequelize');
// const sequelize = require('../database/connection');
module.exports = (sequelize, dataTypes) => 
{
    const Info = sequelize.define('infos', {
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
        houseNumber: dataTypes.STRING,
        street: dataTypes.STRING,
        city: dataTypes.STRING,
        state: dataTypes.STRING,
        country: dataTypes.STRING,
        age: dataTypes.INTEGER,
        mobileNumber: dataTypes.INTEGER,
        status: dataTypes.BOOLEAN
    }); 
    Info.associate = function(models) {
        // associations can be defined here
        Info.belongsTo(models.users, { foreignKey: 'user_id', required: false });
    };
}


