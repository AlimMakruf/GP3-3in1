'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(Role, {foreignKey:'roleId'})
      this.hasMany(models.order, {foreignKey: "userId"})
    }
  };
  User.init({
    nama: {
     type: DataTypes.STRING(50),
     allowNull: false, 
     validate : {
       notNull: true,
     }
    },
    email:{
      type: DataTypes.STRING(50),
      allowNull: false, 
      validate : {
        notNull: true,
        isEmail: true
      }
     },
    password:{
      type: DataTypes.STRING,
      allowNull: false, 
      validate : {
        notNull: true,
      }
     },
    contact:{
      type: DataTypes.INTEGER(50),
      allowNull: false, 
      validate : {
        notNull: true,
      }
     },
    role:{
      type: DataTypes.STRING,
      allowNull: false, 
      validate : {
        notNull: true,
      }
     }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};