const express = require('express');
const cors = require('cors');
const { connectDB } = require('./database/config');
const app = express();
const port = 4000;


//Base de datos
connectDB();
require('./database/asosiaciones');

//Directorio publico
app.use(express.static('public'))

//CORS
app.use(cors());

//Parseo 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/distribuidor', require('./routes/distribuidor.routes'));
app.use('/producto', require('./routes/producto.routes'));
app.use('/horario', require('./routes/horario.routes'));
app.use('/canal', require('./routes/canal.routes'));
app.use('/usuario', require('./routes/usuario.routes'));


//Escuchando peticiones
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`)
})




