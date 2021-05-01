// const { urlencoded } = require("body-parser")
const Router = require('express')
const router = new Router()
const Device_Controller = require('../controllers/device')


// router.post('/', urlencoded({extended: false}), Device_Controller.create)
router.post('/', Device_Controller.create)

router.get('/', Device_Controller.get_all)

router.get('/:id', Device_Controller.get_on_id)

module.exports = router