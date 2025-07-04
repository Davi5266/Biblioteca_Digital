const Book = require("../model/Book")

module.exports = class BookController {
    // Criando livro
    static async create(req, res) {
        // const name = await req.body.name;
        
        // if(!name){
        //     res.status(401).json({message:"O nome do livro é obrigatório!"})
        // }

        const title = await req.body.title;
        const autor = await req.body.autor;
	    const dtpubli = await req.body.dtpubli;
	    const idioma = await req.body.idioma;
	    const genero = await req.body.genero;
	    const desc = await req.body.desc;
	    const images = await req.body.images;

        if(!title){
            res.status(401).json({message:"O nome do livro é obrigatório!"})
        }

        if(!autor){
            res.status(401).json({message:""})
        }

        const book = new Book({
            title: title,
            autor: autor,
            dtpubli: dtpubli,
            idioma: idioma,
            genero: genero,
            desc: desc,
            images: images,
        })

        try{

            const newBook = await book.save()
            // res.status(200).json({
                // "Sucesso":sucesso
            // })
            res.status(200).json({message: "Sucesso", title:title})
        } catch (error){
            res.status(500).json({message: error})
        }
        return
    }

    static async getAll(req, res) {
        const books = await Book.findAll()
        try{
            console.log(books)
            console.log(books.name)
            res.status(200).json({
                books: books,
            })
        }catch(error){
            res.status(500).json({message: error})
        }
    }

    static async getBookId(req, res) {
        const bookId = await Book.findByPk(req.params.bookId)
        console.log(bookId)
        if (!bookId){
            res.status(403).json({message: "Livro não encontrado!"})
        }

        res.status(200).json({book: bookId})
    }
}