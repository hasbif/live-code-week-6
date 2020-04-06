const { Food } = require('../models')

class FoodCtrl {

    static add(req, res) {
        const { title, price, ingredients, tag } = req.body
        console.log(req.body, title, price, ingredients, tag)
        Food.create({ title, price, ingredients, tag, UserId: req.userId })
            .then(data => {
                console.log('done', data)
                res.status(201).json({ data: data.dataValues })
            })
            .catch(err => {
                console.log('fail')
                res.status(500).json({ err })
            })
    }
    //add masuk ke create di database tp error di client kayaknya

    static show(req, res) {
        Food.findAll({ where: { UserId: req.userId } })
            .then(data => {
                res.status(200).json({ data })
            }).catch(err => {
                res.status(500).json({ err })
            })
    }

    static delete(req, res) {

        Food.destroy({ where: { id: req.params.id } })
            // Food.destroy({ where: { id: req.params.id } })
            .then(data => {
                res.status(200).json({ data })
            }).catch(err => {
                res.status(500).json({ err })
            })



    }
}

module.exports = FoodCtrl