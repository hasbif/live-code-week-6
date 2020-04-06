const { Food } = require('../models')

class FoodCtrl {

    static add(req, res) {
        const { title, price, ingredients, tag } = req.body
        Food.create({ title, price, ingredients, tag, UserId: req.userId })
            .done(data => {
                res.status(201).json({ data })
            }).catch(err => {
                res.status(404).json({ err })
            })
    }
}

module.exports = FoodCtrl