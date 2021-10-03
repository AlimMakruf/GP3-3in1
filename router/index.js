"use strict"

const MainRouter = require('express').Router();
const BarangRouter = require('./barang')
const OrderRouter = require('./order')
const UserRouter = require('./user')
const CategoryRouter = require('./category')

MainRouter.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Ready'
    })
})

MainRouter.use('/barang', BarangRouter)
MainRouter.use('/order', OrderRouter)
MainRouter.use('/users', UserRouter)
MainRouter.use('/category', CategoryRouter)

module.exports = MainRouter

