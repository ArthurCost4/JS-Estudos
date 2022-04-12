const Tipos = require('../../models/Tipos')();
const CentrosCustos = require('../../models/CentrosCustos')()

module.exports = function(app){
    app.get('/centroscustos', (req,res)=>{
        CentrosCustos.findAll({include:[{model:Tipos}]},{raw:true, order:[['idCentroCusto', 'DESC']]})// ASC = Crescente || DESC = Decrescente
        .then(resp=>{
            res.render('centroCustos', {cCustos:resp});
        })
        .catch(err=>{
            console.log(`catch post ${err}`)
        })
        
    });
    app.post('/centroscustos/create', (req, res)=>{
        let nome = req.body.nome;
        let idTipo = req.body.idtipo;
        CentrosCustos.create({
            nomeCentroCusto:nome,
            idTipo:parseInt(idTipo)
        }).then(
            res.redirect('/centroscustos')
        ).catch(err=>{
            console.log(`catch Get ${err}`)
        })
    })
    app.delete('/centroscustos/deletar/:id', (req, res)=>{
        let id = parseInt(req.params.id)
        CentrosCustos.destroy({where:{idCentroCusto:id}})
            .then((resp=>{
                res.render('centroCustos')
            }))
            .catch(err=>{
                console.log(`catch Delete ${err}`)
            })
    })
}