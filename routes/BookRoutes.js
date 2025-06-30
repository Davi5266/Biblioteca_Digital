const router = require('express').Router()

const BookController = require('../controllers/BookController')

router.post('/teste', BookController.create)
router.get('/all', BookController.getAll)

module.exports = router