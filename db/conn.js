const path = require('path');
const { Sequelize } = require('sequelize');

// Define caminho absoluto para 'db/books.db'
const dbPath = path.join(__dirname, '..', 'db', 'books.db');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false
});




module.exports = sequelize;
