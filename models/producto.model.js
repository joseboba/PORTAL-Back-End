const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');


const ProductoModel = sequelize.define('Producto', {

    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    }, 
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'El nombre es obligatorio' },
        }
    },
    monto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'El monto es obligatorio' },
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
    timestamps: false
})

module.exports = ProductoModel;