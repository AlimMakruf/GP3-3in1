'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.category, {foreignKey:'categoryId'})
      this.belongsToMany(models.order, {foreignKey:'barangId', through: 'orderBarangs'})
    }
  };
  Barang.init({
    barangNama: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate : {
        notNull: true ,
      }
    },
    barangPrice: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      validate : {
        notNull: true ,
      }
    },
    barangDes: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate : {
        notNull: true ,
      }
    },
    barangBrand: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate : {
        notNull: true ,
      }
    },
    barangQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      validate : {
        notNull: true ,
      }
    },
    barangCategoryName: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate : {
        notNull: true ,
      }
    }
  }, {
    sequelize,
    modelName: 'Barang',
  });
  return Barang;
};