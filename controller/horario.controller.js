const HorarioModel = require('../models/horario.model');
const { request, response } = require('express');
const moment = require('moment').locale('es');
const { Op } = require('sequelize');

const saveH = async( req = request, res = response ) => {


    try {

        const horario = new HorarioModel(req.body);
        await horario.save();

        return res.status(200).json({
            ok: true, 
            horario
        })

        
    }catch (error) {
        console.log(req.body);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }


}

const editH = async( req = request, res = response ) => {

    const { codigo } = req.params;

    try {

        const horario = await HorarioModel.update(req.body ,{ where: { codigo } })

        return res.status(200).json({
            ok: true, 
            horario
        })

        
    }catch (error) {
        console.log(req.body);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const removeH = async( req = request, res = response ) => {

    const { codigo } = req.params;

    try {

        const horario = await HorarioModel.destroy({ where: { codigo } })

        return res.status(200).json({
            ok: true, 
            horario
        })

        
    }catch (error) {
        console.log(req.body);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const getH = async( req = request, res = response ) => {

    const { search } = req.query;

    try {

        if(!search){
            return res.json({
                ok: false,
                msg: 'Faltan datos de busqueda'
            })
        }

        let horario = await HorarioModel.findAll(
            { 
            where: {
                [Op.or]: [
                    { start:{[Op.like]: `%${search}%`}  },
                    { end:{[Op.like]: `%${search}%`} },
                ]
            }}
        )
        if(horario.length === 0){
            return res.json({
                ok: false,
                msg: 'No hay registros de horarios'
            })
        }
        return res.status(200).json({
            ok: true, 
            horario
        })

        
    }catch (error) {
        console.log(req.body);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const getAll = async( req = request, res = response ) => {

    try {

        let horario = await HorarioModel.findAll();
        return res.status(200).json({
            ok: true, 
            horario
        })

        
    }catch (error) {
        console.log(req.body);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}


const getByPk = async( req = request, res = response ) => {

    const { codigo } = req.params;

    try {

        let horario = await HorarioModel.findByPk(codigo);
        return res.status(200).json({
            ok: false,
            horario
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

    saveH,
    editH,
    removeH,
    getH,
    getAll,
    getByPk

}