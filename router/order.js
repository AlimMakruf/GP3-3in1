"use strict"

const OrderRouter = require('express').Router();
const OrderController = require('../controller/orderController')
const auth = require('./../middleware/authMiddleware')

OrderRouter.get('/', auth.authentication, auth.authorization(['user', 'admin']), OrderController.getAll)
OrderRouter.get('/:orderId', auth.authentication, auth.authorization(['user']), OrderController.getDetail)
OrderRouter.post('/', auth.authentication, auth.authorization(['user']), OrderController.createOrder)
OrderRouter.patch('/:orderId', auth.authentication, auth.authorization(['user']), OrderController.patchOrder)
OrderRouter.delete('/:orderId', auth.authentication, auth.authorization(['user']), OrderController.removeOrder)
// auth.authentication, auth.authorization(['admin']), 

module.exports = OrderRouter