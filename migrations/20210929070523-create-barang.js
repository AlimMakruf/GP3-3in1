'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Barangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      barangNama: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate : {
          notNull: true ,
        }
      },
      barangPrice: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        validate : {
          notNull: true ,
        }
      },
      barangDes: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate : {
          notNull: true ,
        }
      },
      barangBrand: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate : {
          notNull: true ,
        }
      },
      barangQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        validate : {
          notNull: true ,
        }
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        validate : {
          notNull: true ,
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Barangs');
  }
};