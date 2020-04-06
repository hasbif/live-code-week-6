const { User, Food } = require('../models')
var jwt = require('jsonwebtoken');


class OA {
    static authenticate(req, res, next) {
        let token = req.headers.access_token
        if (token) {
            var decoded = jwt.verify(token, process.env.SECRET);
            // console.log(decoded, 'decodedddd')
            req.userId = decoded.userId
            // console.log(req.userId)
            next()
        } else {
            res.status(400).json({ msg: 'log in first' })
        }
    }

    static autherize(req, res, next) {
        console.log('in autherize')
        Food.findByPk(req.params.id)
            .done(found => {
                if (found) {
                    if (found.UserId == req.userId) {
                        console.log('autherized')
                        next()
                    } else {
                        res.status(400).json({ msg: 'access denied' })
                    }

                } else {
                    res.status(404).json({ msg: 'data not found' })
                }
            })

    }
}

module.exports = OA