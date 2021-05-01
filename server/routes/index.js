const Router = require('express')
const router = new Router()

// IMPORT ROUTERS
const device_router = require('./device')
const user_router = require('./user')
const brand_router = require('./brand')
const type_router = require('./type')


router.use('/user', user_router)
router.use('/type', type_router)
router.use('/brand', brand_router)
router.use('/device', device_router)
// route.use('/user', )


module.exports = router