const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');


const HorarioModel = sequelize.define('Horario', {

    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    }, 
    start: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'La fecha de inicio es obligatoria' },
        }
    }, 
    end: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'El fecha de cierre es obligatoria' },
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



module.exports = HorarioModel;