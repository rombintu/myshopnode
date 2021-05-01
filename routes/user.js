const Router = require('express')
const router = new Router()
const User_Controller = require('../controllers/user')

// LOCALS
const auth_mw = require('../middleware/auth_mw')

router.post('/registration', User_Controller.registration)
router.post('/login', User_Controller.login)
router.get('/auth', auth_mw, User_Controller.check)

module.exports = router