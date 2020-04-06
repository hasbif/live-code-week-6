const { User } = require('../models')
const { decrypt } = require('../helpers/bcrypt')
var jwt = require('jsonwebtoken');


class UserCtrl {

    static register(req, res) {
        let { email, password } = req.body
        User.create({ email, password })
            .then(data => {
                res.status(201).json({ data })
            }).catch(err => {
                res.status(500).json({ err })
            })
    }

    static login(req, res) {
        console.log('login')
        let { email, password } = req.body
        User.findOne({ where: { email } })
            .then(data => {
                if (data) {
                    if (decrypt(password, data.password)) {
                        var access_token = jwt.sign({ userId: data.id, userEmail: data.email }, process.env.SECRET);
                        res.status(200).json({ access_token })
                    } else {
                        res.status(400).json({ msg: 'password/email invalid' })
                    }
                } else {
                    res.status(400).json({ msg: 'password/email invalid' })
                }
            }).catch(err => {
                res.status(500).json({ err })
            })
    }
}

module.exports = UserCtrl