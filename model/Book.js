const sequelize = require('../db/dataBase');
const { DataTypes } = require('sequelize');
const Imagem = require('./Imagem')

const Book = sequelize.define("Book",{
    name:{
        type: DataTypes.STRING,
        allowNull:false
    }
});

// Book.hasMany(Imagem,{
//     foreignKey: 'bookId'
// });

module.exports = Book;