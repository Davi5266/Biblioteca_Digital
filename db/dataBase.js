const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'../db/books.db',
    logging: false
});

module.exports = sequelize;