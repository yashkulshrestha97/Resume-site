// const Sequelize = require('sequelize');
// const sequelize = require('../database/connection');
const { Sequelize, DataTypes } = require('sequelize');
module.exports  = (sequelize, dataTypes) => 
{ 
    const User = sequelize.define('users', {
    id: {
        type: dataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    }, 
    name : {
        type: dataTypes.STRING(35),
        allowNull: false,
        unique: true
    },
    email: {
        type: dataTypes.STRING(50),
        allowNull: false,
    },
    password: {
        type: dataTypes.STRING(20),
        allowNull: false,
    },
    date: {
        type: dataTypes.DATE,
    }
});

    User.associate = function (models) {
        User.hasOne(models.infos, {foreignKey: 'user_id', required: false });
        User.hasMany(models.education, { foreignKey: 'user_id', required: false });
        // User.hasMany(models.Education, { foreignKey: 'user_id', required: false });
        User.hasMany(models.experience, { foreignKey: 'user_id', required: false });
        User.hasMany(models.skills, { foreignKey: 'user_id', required: false });
    };
}
