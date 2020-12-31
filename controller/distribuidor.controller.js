const DistribuidorModel = require('../models/distribuidor.model');
const { request, response } = require('express');
const { Op } = require('sequelize');

const saveD = async( req = request, res = response ) =>{
 
    const { correoNotificacion, correoAlertas } = req.body;

    try {

        let distribuidor = await DistribuidorModel.findOrCreate({ where: { [Op.or] :[{correoNotificacion}, {correoAlertas}] }, defaults: req.body })

        if(!distribuidor[1]){
            return res.json({
                ok: false,
                msg: 'No se pueden duplicar registros'
            })
        }

        return res.json({
            ok: true,
            distribuidor: distribuidor[0]
        })


        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: error
        })
    }
 
}

const editD = async( req = request, res = response ) => {

    const { codigo } = req.params;
    const { correoNotificacion, correoAlertas } = req.body;

    try {

        

        if(correoAlertas){    
            const distribuidor = await DistribuidorModel.findOne({ where: { correoAlertas }  })
            if(distribuidor && (distribuidor.codigo !== Number(codigo))){
                return res.json({
                    ok: false,
                    msg: 'No se pueden duplicar correos'
                })
            }
        }else{
            const distribuidor = await DistribuidorModel.findOne({ where: { correoNotificacion }  })
            if(distribuidor && (distribuidor.codigo !== Number(codigo))){
                return res.json({
                    ok: false,
                    msg: 'No se pueden duplicar correos'
                })
            } 
        }

        const distribuidor = await DistribuidorModel.update( req.body , { where: { codigo } } );
        return res.status(200).json({
            ok: true,
            distribuidor
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error
        })
    }

}

const removeD = async( req = request, res = response ) => {

    const { codigo } = req.params;

    try {

        let distribuidor = await DistribuidorModel.findByPk(codigo);
        
        if(!distribuidor){
            return res.status(404).json({
                ok: false,
                msg: 'El distribuidor no existe'
            })
        }

        distribuidor = await DistribuidorModel.destroy({ where: {  codigo } });
        return res.status(200).json({
            ok: true,
            distribuidor
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const getD = async( req = request, res = response ) => {

    const { search } = req.query;

    try {

        if(!search){
            return res.json({
                ok: false,
                msg: 'Faltan datos de busqueda'
            })
        }

        let distribuidor = await DistribuidorModel.findAll(
            { 
            where: {
                [Op.or]: [
                    { nombre:{[Op.like]: `%${search}%`} },
                    { correoNotificacion:{[Op.like]: `%${search}%`} },
                    { correoAlertas:{[Op.like]: `%${search}%`} }
                ]
            }}
        )

        if(distribuidor.length === 0){
            return res.json({
                ok: false,
                msg: 'No hay registros de distribuidor'
            })
        }

        return res.json({
            ok: true,
            distribuidor
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

        const distribuidores = await DistribuidorModel.findAll()

        if(!distribuidores){
            return res.status(404).json({
                ok: false,
                msg: 'No hay registros'
            })
        }

        return res.json({
            ok: true,
            distribuidores
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

        let distribuidor = await DistribuidorModel.findByPk(codigo);
        return res.status(200).json({
            ok: false,
            distribuidor
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
    saveD,
    editD,
    removeD,
    getD,
    getAll,
    getByPk
}