const Sequelize = require('sequelize');

const connection = new Sequelize(
    'orcamento-pessoal-v2', 'user', 'password', {
        host: 'localhost',
        dialect: 'mysql'
    }
)
module.exports = connection;
