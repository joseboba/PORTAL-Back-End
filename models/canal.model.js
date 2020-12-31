const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const DistribuidorModel = require('./distribuidor.model');

const CanalModel = sequelize.define('Canal', {

   
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    }, 
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'El nombre es obligatorio' },
        }
    },
    distribuidorCodigo:{
        type: DataTypes.INTEGER,
        references: {
          model: 'Distribuidores', 
          key: 'codigo', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }

}, {
    timestamps: false,
    tableName: 'Canales'
})


module.exports = CanalModel;