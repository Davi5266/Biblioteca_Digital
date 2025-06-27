const { DataTypes } = require('sequelize')
const sequelize  = require('./database')

const Book = require('./Book')

const Imagem = sequelize.define('Imagem',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
})




module.exports = Imagem;