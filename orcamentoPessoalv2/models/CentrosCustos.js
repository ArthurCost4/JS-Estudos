const Sequelize = require('sequelize')
const connection = require('../controllers/database')
const Tipos = require('./Tipos')()
//const tipos = require('./Tipos')
module.exports = function(app){
    const CentrosCustos = connection.define('centros_custos', {
        idCentroCusto:{
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type: Sequelize.INTEGER
        },
        nomeCentroCusto:{
            allowNull:false,
            type:Sequelize.TEXT,
            fedault:null
        }
    },
    {
        timestamps:false
    })
    CentrosCustos.belongsTo(Tipos,{
        allowNull:false,
        constraint:true,
        foreignKey:'idTipo'
    })
    Tipos.hasMany(CentrosCustos,{
        foreignKey:'idTipo'
    })
    //CentrosCustos.sync({force:false})
    return CentrosCustos
}

//Relacionamentos
//hasOne (tem um)1 para 1
//belongsTo (pertence a ) N para 1
//hasMany ( tem muitos) 1 para N
//BelongsToMany (pertence a muitos)

