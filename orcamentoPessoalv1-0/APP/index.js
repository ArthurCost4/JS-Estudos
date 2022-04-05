const express = require('express');
var app = express();

//configura politica de seguranca para aceitar acesso externo
const cors = require('cors');
app.use(cors())


//conexao com o banco
const bd = require('./database.js');
let connection = bd.conectar();

const sql = 'SELECT * FROM centro_custos'

app.get('/centrocustos', (req,res)=>{
    try{
        connection.query(sql, (erro, results, fields)=>{
            console.log(results)
            res.json(results)
        })
    }catch(error){
        console.log(`erro: ${error}`)
    }
})



app.post('/centrocustos', function(req, res){

    //http://localhost:8081/centrocustos?nome=telha&idTipo=2
    let nome = req.query['nome'];
    let idtipo = req.query['idTipo'];
    let sql = `INSERT INTO centro_custos (idTipo, nome) VALUES (?, ?)`;//sintaxe para passar valores direto pro banco de dados

    //abaixo estamos fazando a conexao com dos parametros com o banco de dados e tacando na nossa tabela do banco de dados
    try{
        connection.query(sql, [parseInt(idtipo), nome], (erro, results, fields)=>{
            if(parseInt(results.affectedRows)>=1){
                res.send(`${results.affectedRows} registro(s) foram gravado(s) com sucesso!`)
            } else{
                res.send(`O registro não pode ser gravado`+erro)
            }
            
        })
    }catch(error){
        res.send('resposta: ' + error)
    }
})

app.put('/centrocustos', (req, res)=>{
    //http://localhost:8081/centrocustos?id=6&nome=PetShop&idTipo=3
    let id = req.query['id'];
    let nome = req.query['nome'];
    let idtipo=req.query['idTipo'];
    let params = [parseInt(idtipo), nome, parseInt(id)]
    const sql = `UPDATE centro_custos SET idTipo=?, nome=? WHERE idCentroCustos=?`

    try{
        connection.query(sql, params, (erro, resultado, campos)=>{ //comando SQL, parametros que serão passados para o SQL e a função de callback de retorno de resposta
            if(parseInt(resultado.affectedRows)>=1 && (!erro)){
                res.send(`${resultado.affectedRows} registro(s) foram gravado(s) com sucesso!`)
            } else{
                res.send(`O registro não pode ser gravado`+erro)
            }
        })
    }catch(error){
        res.send('resposta: ' + error)
    }
});

app.delete('/centrocustos', (req, res)=>{

    let idParams =[parseInt(req.query['id'])]
    let sql = 'DELETE FROM centro_custos WHERE idCentroCustos=?'

    try{
        connection.query(sql, idParams, (erro, resultado, campos)=>{
            if(!erro && parseInt(resultado.affectedRows)>=1){
                res.send(`${resultado.affectedRows} registro(s) foram excluido(s) com sucesso!`)
            }else{
                res.send('o registro não pode ser excluido'+erro)
            }
        })
    }catch(error){
        res.send('o registro não pode ser apagado: ' + error)
    }

})

app.listen(8081, ()=>{
    console.log('sevidor rodando na porta 8081')
})