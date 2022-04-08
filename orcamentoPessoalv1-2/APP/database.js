const mysql = require('mysql2');

//Conexão com o banco de dados
function conectar(){
    const connection = mysql.createConnection({
        host:'localhost',
        user: 'user',
        password: 'pass',
        database: 'orcamentopessoal'
    });
    return connection
}

exports.conectar = conectar; //Exporta a função para outros modulos

function executarQuery(sql, res, req =''){
    try{
        let connection = conectar();
        connection.query(sql, req, (erro, results /*fields*/)=>{
            let respBD = {erro, results /*fields*/};
            res.json(respBD)
            console.log(respBD)
        })
    }catch(error){
        res.send(error)
        console.log(error)
    }
}

exports.executarQuery = executarQuery
