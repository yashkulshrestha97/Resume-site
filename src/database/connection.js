const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysite','root','root1234', {
    host: '127.0.0.1', 
    dialect: 'mysql',
    operatorsAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;