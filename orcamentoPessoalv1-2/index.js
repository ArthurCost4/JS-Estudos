//Importação do express (servidor HTTP)
const express=require('express');
var app = express();

//Medware que ajusta API para receber dados de formulários
const bodyParser = require('body-parser');

//Configura diretório para arquivos estáticos como CSS e JS de frontend
app.use(express.static('./vielws'));

//Transforma url codificada em objeto
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

//Configura políticas de segurança para aceitar acesso externo
const cors = require('cors');
app.use(cors());

//Operações com o banco de dados
const bd = require('./APP/database');
const { home } = require('nodemon/lib/utils');
const { param } = require('express/lib/request');


app.get('/home', (req, res)=>{
    res.sendFile(__dirname+'/vielws/html/home.html')
})

app.get('/arearestrita', (req, res)=>{
    res.sendFile(__dirname+'/vielws/html/centroscustos.html')
})

app.get('/tipo', function(req, res){
    const sql = `SELECT * FROM tipo`;
    bd.executarQuery(sql, res);
});

app.get('/centrocustos/filtrar', function(req, res){
    let params = [parseInt(req.query['id'])]
    const sql = 'SELECT * FROM centro_custos WHERE idCentroCustos=?';
    bd.executarQuery(sql, res, params)
})
app.get('/centrocustos/consulta', function(req, res){
    const sql = `SELECT c.idCentroCustos, c.idTipo, c.nome, t.idtipo, t.nome AS nomeTipo, t.operacao 
                from centro_custos c, tipo t 
                    WHERE c.idTipo=t.idtipo`;//no MYSQL não é aceitavel por o mesmo nome nas colunas das tabelas, se for o caso ele não aceitara ou ele só vai trazer uma coluna, no meu caso usei o comando "AS" para apelidar uma tabela com outro nome e assim ele volta as duas
    bd.executarQuery(sql, res);
});




app.post('/centrocustos', function(req, res){
    
    let parametros = [parseInt(req.body.idTipo), req.body.nome];
    console.log(parametros)
    const sql = `INSERT INTO centro_custos (idTipo, nome) VALUES (?,?)`;
    bd.executarQuery(sql, res, parametros)
});





app.put('/centrocustos', function(req, res){
    // http://localhost:8180/centroscustos?id=15&nome=Manutenção Veículo&idtipo=1
    let parametros = [parseInt(req.body.idTipo), req.body.nome, parseInt(req.body.id)];
    const sql = `UPDATE centro_custos SET idTipo=?, nome=? WHERE idCentroCustos=?;`
    bd.executarQuery(sql, res, parametros);
});





app.delete('/centrocustos', function(req, res){
    // http://localhost:8180/centroscustos?id=15
    let parametros = [parseInt(req.query['id'])];
    const sql = `DELETE FROM centro_custos WHERE idCentroCustos=?`;
    bd.executarQuery(sql, res, parametros);
})



const porta = 8081;
app.listen(porta, function(){
    console.log(`Servidor rodando na porta ${porta}...`);
});

