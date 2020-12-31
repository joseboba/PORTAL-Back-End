const CanalModel = require('../models/canal.model');
const DistribuidorModel = require('../models/distribuidor.model');
const HorarioModel = require('../models/horario.model');
const ProductoModel = require('../models/producto.model');
const UsuarioModel = require('../models/usuario.model');


DistribuidorModel.hasMany(CanalModel, { as: "canal", foreignKey: "distribuidorCodigo" });
CanalModel.belongsTo(DistribuidorModel, { as: "distribuidor" });

DistribuidorModel.hasMany(HorarioModel, { as: "horario", foreignKey: "distribuidorCodigo" });
HorarioModel.belongsTo(DistribuidorModel, { as: "distribuidor" });

DistribuidorModel.hasMany(ProductoModel, { as: "producto", foreignKey: "distribuidorCodigo" });
ProductoModel.belongsTo(DistribuidorModel, { as: "distribuidor" });

DistribuidorModel.hasMany(HorarioModel, { as: "usuario", foreignKey: "distribuidorCodigo" });
UsuarioModel.belongsTo(DistribuidorModel, { as: "distribuidor" });
