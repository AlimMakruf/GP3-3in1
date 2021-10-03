const OrderBarangModel = require('../models').orderBarang;
const OrderModel = require('../models').OrderModel;

class OrderBarangController {
    static createOrderBarang = async (req,res,next) => {
        try {
            const { orderId } = req.params
            const { barangId } = req.body;

            if(+orderId != req.current.user) {
                res.status(404).json({
                    message: "Hayoo.. pake id siapa??"
                })
            }

            const newOrderBarangData = {
                barangId: +barangId,
            }

            const newData = await OrderBarangModel.create(newOrderBarangData)

            res.status(201).json({
                message: "New Barang has been added",
                User: newData
            })
        } catch (error) {
            next(error)
        } 
    }
    static deleteOrderBarang = async (req, res, next) => {
        try {
            const { orderId } = req.params
            const { orderBarangId } = req.params

            const data = await OrderBarangModel.findOne({
                where : {
                    id: orderBarangId
                }
            });
            
            if(+orderId !== req.current.user) {
                res.status(404).json({
                    message: "User tidak sesuai"
                })
            }

            await data.destroy()

            res.status(204).json({
                message: "order has been deleted"
            })
        } catch (error) {
            next(error)
        }

    }
}

module.exports = OrderBarangController