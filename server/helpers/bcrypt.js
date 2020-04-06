var bcrypt = require('bcryptjs');


class Bcrypt {
    static encrypt(password) {
        var salt = bcrypt.genSaltSync(Number(process.env.SALT));
        var hash = bcrypt.hashSync(password, salt);
        return hash
    }

    static decrypt(password, hashed) {
        return bcrypt.compareSync(password, hashed);
    }
}

module.exports = Bcrypt