const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');


const UsuarioModel = sequelize.define('Usuario', {

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
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'El correo es obligatorio' },
            isEmail: { msg: 'No es un correo válido' }
        }
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'El telfono es obligatorio' },
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

module.exports = UsuarioModel;