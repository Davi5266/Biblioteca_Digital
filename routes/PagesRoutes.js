const router = require('express').Router()

const PagesController = require("../controllers/PagesController")

router.get('/recomendados',PagesController.recomendados)
router.get('/sobre', PagesController.sobre)

module.exports = router;