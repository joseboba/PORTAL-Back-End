const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');



const DistribuidorModel = sequelize.define('Distribuidor', {

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
    correoNotificacion:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Este parametro es obligatorio' },
            isEmail: { msg: 'No es un correo valido' }
        }
    }, 
    correoAlertas: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Este parametro es obligatorio' },
            isEmail: { msg: 'No es un correo valido' }
        }
    }

}, {
    timestamps: false,
    tableName: 'Distribuidores',
})



module.exports = DistribuidorModel;