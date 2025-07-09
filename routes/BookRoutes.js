const router = require('express').Router()

const BookController = require('../controllers/BookController')

router.post('/create', BookController.create)
router.get('/all', BookController.getAll)
router.get('/:bookId', BookController.getBookId)

module.exports = router