module.exports = function(app){
    app.get('/transacoes', (req,res)=>{
        res.render('transacoes')
    })
}