const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

const sequelize = require('./db/dataBase')
const Book = require('./model/Book')
const Imagem = require('./model/Imagem')

const path = require('path')

const basePath = path.join(__dirname, 'viwer')

app.get('/',(req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

// 🔗 Relacionamento 1:N definido AQUI
Book.hasMany(Imagem,{
    foreignKey: 'bookId'
})

// Relacionamento: uma Imagem pertence a um Livro
Imagem.belongsTo(Book, {
  foreignKey: 'bookId',
  onDelete: 'CASCADE'
});


(async () => {
  try {
    await sequelize.sync({ force: true }); // Cria as tabelas do zero
    console.log('Tabelas sincronizadas com sucesso!');

    // Exemplo de criação:
    const book = await Book.create({ name: 'Davi Souza' });

    // const fs = require('fs');
    const buffer = fs.readFileSync('./foto.jpg');

    await Imagem.create({
      name: 'foto.jpg',
      data: buffer,
      bookId: book.id
    });

    console.log('Imagem salva com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar:', error);
  }
})();

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})