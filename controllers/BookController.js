const Book = require("../model/Book")

module.exports = class BookController {
    // Criando livro
    static async create(req, res) {
        const sucesso = "BRABOOOOO";
        const name = await req.body.name;
        
        if(!name){
            res.status(401).json({message:"O nome do livro é obrigatório!"})
        }

        const book = new Book({
            name: name,
        })

        try{

            const newBook = await book.save()
            // res.status(200).json({
                // "Sucesso":sucesso
            // })
            res.status(200).json({message: "Sucesso", name: name})
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
}