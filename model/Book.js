const sequelize = require('../db/conn');
const { DataTypes } = require('sequelize');

// const db = require('./database')

const Imagem = require('./Imagem')

// const Book = sequelize.define("Book",{
//     name:{
//         type: DataTypes.STRING,
//         allowNull:false
//     }
// });

const Book = sequelize.define("Book",{
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    autor:{
        type: DataTypes.STRING,
        allowNull:false

},
    dtpubli:{
        type: DataTypes.STRING,
        allowNull:false

},
    idioma:{
        type: DataTypes.STRING,
        allowNull:false

},
    genero:{
        type: DataTypes.STRING,
        allowNull:false

},
    desc:{
        type: DataTypes.STRING,
        allowNull:false

},
    images:{
        type: DataTypes.STRING,
        allowNull:false

},
});

// Book.hasMany(Imagem,{
//     foreignKey: 'bookId'
// });

module.exports = Book;