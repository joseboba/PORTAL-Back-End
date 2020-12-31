const CanalModel = require('../models/canal.model');
const { request, response } = require('express');
const { Op } = require('sequelize');



const saveC = async( req = request, res = response ) => {

    try {

        const canal = new CanalModel(req.body);
        await canal.save();

        return res.status(200).json({
            ok: false,
            canal
        })        

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const editC = async( req = request, res = response ) => {

    const { codigo } = req.params;

    try {

       const canal = await CanalModel.update( req.body, { where: { codigo } })   
       return res.status(200).json({
           ok: true,
           canal
       })
       
       

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const removeC = async( req = request, res = response ) => {

    const { codigo } = req.params;

    try {

        const canal = await CanalModel.destroy({ where: { codigo } });
        return res.status(200).json({
            ok: false,
            canal
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const getC = async( req = request, res = response ) => {

    const { search } = req.query;

    try {

        if(!search){
            return res.json({
                ok: false,
                msg: 'Faltan datos de busqueda'
            })
        }

        let canal = await CanalModel.findAll({ where: { nombre:{[Op.like]: `%${search}%`} }})
        if(canal.length === 0){
            return res.json({
                ok: false, 
                msg: 'No hay registros de Canales'
            })
        }
        return res.status(200).json({
            ok: false,
            canal
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }


}

const getAll = async( req = request, res = response ) => {

    try {

        let canal = await CanalModel.findAll();
        return res.status(200).json({
            ok: false,
            canal
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

        let canal = await CanalModel.findByPk(codigo);
        return res.status(200).json({
            ok: false,
            canal
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

    saveC,
    editC,
    removeC,
    getC,
    getAll,
    getByPk

}