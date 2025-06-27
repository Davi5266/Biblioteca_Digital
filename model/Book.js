const sequelize = require('./database');
const { DataTypes } = require('sequelize');

// const db = require('./database')

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