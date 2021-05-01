const Router = require('express')
const router = new Router()
const Brand_Controller = require('../controllers/brand')

router.post('/', Brand_Controller.create)

router.get('/', Brand_Controller.get)

module.exports = router