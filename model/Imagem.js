const { DataTypes } = require('sequelize')
const sequelize  = require('../db/conn')

const Book = require('./Book')

const Imagem = sequelize.define('Imagem',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
})




module.exports = Imagem;