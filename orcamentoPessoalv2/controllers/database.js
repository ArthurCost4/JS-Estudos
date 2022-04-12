const Sequelize = require('sequelize');

const connection = new Sequelize(
    'orcamento-pessoal-v2', 'root', '123456', {
        host: 'localhost',
        dialect: 'mysql'
    }
)
module.exports = connection;