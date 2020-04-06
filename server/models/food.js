'use strict';
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'cannot be empty' }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: 'cannot be empty' }
      }
    },
    ingredients: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'cannot be empty' }
      }
    },
    tag: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'cannot be empty' }
      }
    },
    UserId: DataTypes.INTEGER
  }, {});
  Food.associate = function (models) {
    Food.belongsTo(models.User)
    // associations can be defined here
  };
  return Food;
};