'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderCode: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      orderDate: {
        type: Sequelize.DATE, 
        allowNull: false,
        validate: {
          notNull: true
        }
      },
      userId: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        validate: {
          notNull: true
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
    await queryInterface.dropTable('orders');
  }
};