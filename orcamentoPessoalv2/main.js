const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { application } = require('express');
const consign = require('consign');
const connection = require('./controllers/database')

const app = express();//instancia do express ferramenta/biblioteca que traz o sistema http de requisição para nosso projeto

app.use(cors())//configuraçoes de diretivas de segurança

//CONEXÃO COM O BANCO DE DADOS
connection
    .authenticate()
    .then(()=>{'conectado ao Banco'})
    .catch((err)=>{err})

app.set('view engine', 'ejs')//configura o ejs como motor de views

app.use(express.static('public'))//define diretorio para arquivos estaticos(de leitura por exemplo o HTML || CSS...)

//Transforma url codificada(dados de requisição) em objetos
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

consign()
    .include('./models')//Inclui modulos dentro do diretorio de modelos
    .include('./controllers/rotas')// Inclui modulos dentro do diretorio rotas
    .into(app) //Insere os modulos acima incluidos do express

const porta = 8182
app.listen(porta, ()=>{
    console.log(`Servidor rodando no link HTTP://localhost:${porta}...`)
})