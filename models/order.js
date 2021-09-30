'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  order.init({
    orderCode: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    orderDate: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    userId: {
      type: DataTypes.INTEGER, 
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};