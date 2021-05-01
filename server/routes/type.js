const Router = require('express')
const router = new Router()
const Type_Controller = require('../controllers/type')
const check_role = require('../middleware/check_role')

router.post('/', check_role('ADMIN'), Type_Controller.create)

router.get('/', Type_Controller.get)


module.exports = router