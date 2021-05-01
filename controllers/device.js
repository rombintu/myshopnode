const uuid = require('uuid')
const path = require('path')

// LOCALS
const {Device, Device_info} = require('../models/tables')
const Api_Error = require('../error/api_error')


class Device_Controller {
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            console.log(req.body)
            const {img} = req.files
            let file_name = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', file_name))

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => 
                    Device_info.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    }))
            }

            const device = await Device.create({name, price, typeId, brandId, img: file_name})
            return res.json(device)
        } catch (err) {
            next(Api_Error.bad_requiest(err.message))
        }
    }
    async get_all(req, res) {
        let {typeId, brandId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }
    async get_on_id(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id}, 
                include: [{model: Device_info, as: 'info'}]
            }
        )
        return res.json(device)
    }
}

module.exports = new Device_Controller()