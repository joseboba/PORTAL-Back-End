const ProductoModel = require('../models/producto.model');
const { request, response } = require('express');
const { Op } = require('sequelize');

const saveP = async( req = request, res = response ) => {


    try {

        const producto = new ProductoModel(req.body);
        await producto.save();

        return res.status(200).json({
            ok: true,
            producto: producto
        })
        
    }catch (error) {
        console.log(req.body);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }


}

const editP = async( req = request, res = response ) => {

    const { codigo } = req.params;

    try {

        let producto;

        producto = await ProductoModel.update( req.body ,{ where: { codigo } });
        return res.status(200).json({
            ok: true,
            producto
        })
        
    }catch (error) {
        console.log(error);
        return res.status(500).send({
            ok: false,
            msg: error
        })
    }


}

const removeP = async (req = request, res = response) => {

    const { codigo } = req.params;

    try {

        let producto = await ProductoModel.destroy({ where: { codigo } });

        return res.json({
            ok: true,
            producto
        })

        
    }catch (error) {
        console.log(error);
        return res.status(500).send({
            ok: false,
            msg: error
        })
    }
}

const getP = async( req = request, res = response ) => {

    const {search}  = req.query;

    try {


        if(!search){
            return res.json({
                ok: false,
                msg: 'Faltan datos de busqueda'
            })
        }

        let producto = await ProductoModel.findAll(
            { 
                where: 
                { 
                    [Op.or]:
                    [
                        { descripcion:{[Op.like]: `%${search}%`} },
                        { monto:{[Op.like]: `%${search}%`} }
                    ]
                   
                }
            }
        )

        if(producto.length === 0){
            return res.json({
                ok: false,
                msg: 'No hay registros de productos'
            })
        }

        return res.json({
            ok: true,
            producto
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false, 
            msg: error
        })
    }

}

const getAll = async(req = request, res = response) => {

    try {

        const productos = await ProductoModel.findAll()

        if(!productos){
            return res.status(404).json({
                ok: false,
                msg: 'No hay registros'
            })
        }

        return res.json({
            ok: true,
            productos
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false, 
            msg: error
        })
    }

}

const getByPk = async( req = request, res = response ) => {

    const { codigo } = req.params;

    try {

        let producto = await ProductoModel.findByPk(codigo);
        return res.status(200).json({
            ok: false,
            producto
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }


}




module.exports = {

    saveP,
    editP,
    removeP,
    getP,
    getAll,
    getByPk

}