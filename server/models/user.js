'use strict';
const { encrypt } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeValidate: (user, options) => {
        console.log('hooks')
        user.password = encrypt(user.password)
      }
    }
  });
  User.associate = function (models) {
    User.hasMany(models.Food)
    // associations can be defined here
  };
  return User;
};