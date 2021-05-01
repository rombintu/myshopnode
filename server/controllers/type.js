const {Type} = require('../models/tables')
const Api_Error = require('../error/api_error')


class Type_Controller {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }
    
    async get(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }
   
}

module.exports = new Type_Controller()