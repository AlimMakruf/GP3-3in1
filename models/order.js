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
      this.belongsTo(models.User, {foreignKey: "userId"})
      this.belongsToMany(models.Barang, {foreignKey: "orderId", through: "orderBarangs"})
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
      type: DataTypes.DATE, 
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