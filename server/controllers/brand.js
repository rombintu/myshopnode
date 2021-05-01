const {Brand} = require('../models/tables')
const Api_Error = require('../error/api_error')


class Brand_Controller {
    async create(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }
    async get(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
   
}

module.exports = new Brand_Controller()