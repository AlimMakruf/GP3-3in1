const BarangModel = require('../models').Barang;

class BarangController {
    static getAll = async (req, res, next) => {
        try {
            const barang = await BarangModel.findAll();
            res.status(200).json(barang)
        } catch (error) {
            next(error)
        }
    }
    static createBarang = async (req, res, next) => {
        try {
            const { barangNama, barangPrice, barangDes, barangBrand, barangQuantity, categoryId } = req.body;

            const newBarangData = {
                barangNama: barangNama,
                barangPrice: barangPrice,
                barangDes: barangDes,
                barangBrand: barangBrand,
                barangQuantity: barangQuantity,
                categoryId: +categoryId,
            }

            const newBarang = await BarangModel.create(newBarangData)

            res.status(201).json({
                message: "New Barang has been added",
                User: newBarang
            })

        } catch (error) {
            next(error)
        }
    }
    static getDetail = async (req, res, next) => {
        try {
            const { barangId } = req.params
            const barang = await BarangModel.findOne({
                where : {
                    id: barangId
                }
            });
            if(!barang) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }
            res.status(200).json(barang)
        } catch (error) {
            next(error)
        }
    }
    static patchBarang = async (req, res, next)=> {
        try {
            const { barangId } = req.params;
            const { barangNama, barangPrice, barangDes, barangBrand, barangQuantity, barangCategoryName } = req.body;
            const barang = await BarangModel.findOne({
                where : {
                    id: barangId
                }
            });
            if(!barang) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }

            barang.barangNama = barangNama || barang.barangNama;
            barang.barangPrice = barangPrice || barang.barangPrice;
            barang.barangDes = barangDes || barang.barangDes;
            barang.barangBrand = barangBrand || barang.barangBrand;
            barang.barangQuantity = barangQuantity || barang.barangQuantity;
            barang.barangCategoryName = barangCategoryName || barang.barangCategoryName;            
            
            await barang.save()

            res.status(200).json({
                message: "update successful",
                barang: barang
            })

        } catch (error) {
            next(error)
        }
    }
    static removeBarang = async (req, res, next) => {
        try {
            const { barangId } = req.params
            const barang = await BarangModel.findOne({
                where : {
                    id: barangId
                }
            });
            if(!barang) {
                res.status(404).json({
                    message: "barang tidak ditemukan"
                })
            }

            await barang.destroy()

            res.status(204).json({
                message: "Data has been deleted"
            })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = BarangController