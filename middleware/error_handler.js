const Api_Error = require('../error/api_error')

module.exports = function(err, req, res, next) {
    if(err instanceof Api_Error) {
        return res.status(err.status).json({message: err.message})
    }

    return res.status(500).json({message: "Неизвестная ошибка"})
}