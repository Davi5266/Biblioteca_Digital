const express = require('express')
const fs = require('fs')
const path = require('path');
const app = express()
const port = 3000

const sequelize = require('./model/database')
const Book = require('./model/Book')
const Imagem = require('./model/Imagem')

// CSS
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
//HTML
const basePath = path.join(__dirname, 'viwer')
// app.use(express.static('public'))

app.get('/',(req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/livro/:book',async (req,res)=>{
  const bookId = await req.params.book
  console.log(bookId)
  res.sendFile(path.join(__dirname, 'viewer', 'livros.html'));
})

app.get('/livro/data/:title', async(req,res)=>{
  const BookName = await req.params.title
  book = {    "o-pequeno-principe": {
    "title": "O Pequeno Príncipe",            
    "autor":"<b>Autor:</b> Antoine de Saint-Exupéry",
    "dtpubli":"<b>Data de publicação:</b> Abril de 1943",
    "idioma":"<b>Idioma:</b> Português",
    "genero":"<b>Gênero:</b> Literatura infantil, Novela, Fábula, Ficção especulativa, Fantasia científica",
    "desc": "<b>Resumo sobre o livro:</b> O Pequeno Príncipe é uma obra atemporal de Antoine de Saint-Exupéry, publicada em 1943. Apesar de parecer um livro infantil, sua narrativa poética e filosófica traz reflexões profundas sobre a vida, a amizade, o amor e a essência humana.A história acompanha um aviador que, após uma pane no deserto, encontra um pequeno príncipe vindo de um asteroide distante. Durante a conversa, o menino compartilha suas experiências ao visitar diferentes planetas, onde conhece personagens que representam traços humanos, como a vaidade, o poder e a ambição. Na Terra, ele aprende sobre a importância dos laços afetivos com uma raposa, que lhe ensina que o essencial é invisível aos olhos.Com uma linguagem simples e simbólica, o livro convida o leitor a enxergar o mundo com os olhos da infância, valorizando sentimentos genuínos e questionando a rigidez da vida adulta.",
    "images": ["./src/img/o_pequeno-principe/Antoine de Saint-Exupéry-O Pequeno Principe.jpeg",
             "./src/img/o_pequeno-principe/o_pequeno_principe.png",
             "./src/img/o_pequeno-principe/o-pequeno-principe2.png",
             "./src/img/o_pequeno-principe/o_pequeno_principe3.png"] }}
  res.json()
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

/*
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
*/
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})