const { User, Food } = require('../models')
var jwt = require('jsonwebtoken');


class OA {
    static authenticate(req, res, next) {
        console.log('authen', req.headers.access_token)
        let token = req.headers.access_token
        if (token) {
            var decoded = jwt.verify(token, process.env.SECRET);
            console.log(decoded, 'decodedddd')
            req.userId = decoded.userId
            console.log(req.userId)
            next()
        } else {
            res.status(400).json({ msg: 'log in first' })
        }
    }

    static autherize(req, res, next) {

    }
}

module.exports = OA