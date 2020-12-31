const UsuarioModel = require('../models/usuario.model');
const { request, response } = require('express');
const { Op } = require('sequelize');



const saveU = async( req = request, res = response ) => {

    const { correo, telefono } = req.body;

    try {

        const usuario = await UsuarioModel.findOrCreate({ where: {[Op.or]:[{ correo }, { telefono }]}, defaults: req.body });
        
        if(!usuario[1]){
            return res.json({
                ok: false,
                msg: 'No se pueden guardar registros repetidos'
            })
        }

        return res.status(200).json({
            ok: true,
            usuario
        })        

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const editU = async( req = request, res = response ) => {

    const { correo = '', telefono = '' } = req.body;
    const { codigo } = req.params;

    try {

        if(correo){
            const usuario = await UsuarioModel.findOne({ where: {[Op.or]:[{ correo }, { telefono }]}});
            if(usuario && (usuario.codigo !== Number(codigo))){
                return res.json({
                    ok: false,
                    msg: 'No se pueden guardar registros repetidos'
                })
            }
        }

       const usuario = await UsuarioModel.update( req.body ,{ where: { codigo } })    
       return res.status(202).json({
           ok: true,
           usuario
       }) 

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const removeU = async( req = request, res = response ) => {

    const { codigo } = req.params;

    try {

        const usuario = await UsuarioModel.destroy({ where: { codigo } });
        return res.status(200).json({
            ok: false,
            usuario
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error
        })
    }

}

const getU = async( req = request, res = response ) => {

    const { search } = req.query;

    try {

        if(!search){
            return res.json({
                ok: false,
                msg: 'Faltan datos de busqueda'
            })
        }

        let usuario = await UsuarioModel.findAll(
            { 
                where:{
                    [Op.or]: [
                        { nombre:{[Op.like]: `%${search}%`} },
                        { correo:{[Op.like]: `%${search}%`} },
                        { telefono:{[Op.like]: `%${search}%`} }
                    ]
                }
            }
        )

        if(usuario.length === 0){
            return res.json({
                ok: false,
                msg: 'No hay registros de usuarioss'
            })
        }
        
        return res.status(200).json({
            ok: true,
            usuario
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

        let usuarios = await UsuarioModel.findAll();
        return res.status(200).json({
            ok: true,
            usuarios
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

        let usuario = await UsuarioModel.findByPk(codigo);
        return res.status(200).json({
            ok: false,
            usuario
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

    saveU,
    editU,
    removeU,
    getU,
    getAll,
    getByPk

}