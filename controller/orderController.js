const OrderModel = require('./../models').order;

class OrderController {
    static getAll = async (req, res, next) => {
        try {
            const orderData = await OrderModel.findAll({include: User});
            res.status(200).json(orderData)
        } catch (error) {
            next(error)
        }
    }
    static createOrder = async (req, res, next) => {
        try {
            const { orderCode } = req.body;

            const newOrderData = {
                orderCode: orderCode,
                orderDate: new Date(),
            }
            console.log(newOrderData)

            const newOrder = await OrderModel.create(newOrderData)

            res.status(201).json({
                message: "Order has been added",
                 User: newOrder,
                include: User
            })

        } catch (error) {
            next(error)
        }
    }
    static getDetail = async (req, res, next) => {
        try {
            const { orderId } = req.params
            const orderData = await OrderModel.findOne({
                where : {
                    id: orderId
                },
            });
            if(!orderData) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }
            res.status(200).json(orderData)
        } catch (error) {
            next(error)
        }
    }
    static patchOrder = async (req, res, next)=> {
        try {
            const { orderId } = req.params
            const { orderCode, orderDate, userId } = req.body;
            const orderData = await OrderModel.findOne({
                where : {
                    id: orderId
                }
            });
            if(!orderData) {
                res.status(404).json({
                    message: "order tidak ditemukan"
                })
            }

            orderData.orderCode = orderCode || orderData.orderCode;
            orderData.orderDate = orderDate || orderData.orderDate,
            orderData.userId = userId || orderData.userId

            await orderData.save()

            res.status(200).json({
                message: "update successful",
                order: orderData
            })
        } catch (error) {
            next(error)
        }
    }
    static removeOrder = async (req, res, next) => {
        try {
            const { orderId } = req.params
            const orderData = await OrderModel.findOne({
                where : {
                    id: orderId
                }
            });
            if(!orderData) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }

            await orderData.destroy()

            res.status(204).json({
                message: "order has been deleted"
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = OrderController