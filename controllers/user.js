const Api_Error = require('../error/api_error')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/tables')
const jwt = require('jsonwebtoken')


const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role}, 
        process.env.SECRET_KEY, 
        {expiresIn: '24h'}
    )
}


class User_Controller {
    async registration(req, res) {
        const {email, password, role} = req.body

        if (!email || !password) {
            return next(Api_Error.bad_requiest('Email или Password некорректны'))
        }

        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return nex(Api_Error.bad_requiest('Пользователь уже существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        
        return res.json({token})
    }
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if (!user) {
            return next(Api_Error.bad_requiest('Пользователь не найден'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword) {
            return next(Api_Error.bad_requiest('Пароль неверный'))
        }

        const token = generateJwt(user.id, user.email, user.role)

        return res.json({token})
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new User_Controller()