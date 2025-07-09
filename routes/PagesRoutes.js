const router = require('express').Router()

const PagesController = require("../controllers/PagesController")

router.get('/recomendados',PagesController.recomendados)
router.get('/sobre', PagesController.sobre)
router.get('/register', PagesController.createBook)
router.get('/:bookId', PagesController.idBook)

module.exports = router;