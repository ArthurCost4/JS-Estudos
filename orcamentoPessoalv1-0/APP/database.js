const mysql = require('mysql2');

//Conexão com o banco de dados
function conectar(){
    const connection = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '1234',
        database: 'orcamentopessoal'
    });
    return connection
}

exports.conectar = conectar; //Exporta a função para outros modulos