module.exports = function(app){
    app.get('/tipos', (req,res)=>{
        res.render('tipos')
    })
}