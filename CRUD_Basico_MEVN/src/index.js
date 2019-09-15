const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const tasks = require('./routes/tasks');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn_database')
    .then (db => console.log('Base de datos conectada'.cyan))
    .catch (err => console.error(err.red));

// Settings
// process.env.PORT contiene el puerto definido por el Sist Operativo, si no lo hay se usa 3000
app.set('puerto', process.env.PORT || 3000);
const puerto = app.get('puerto');

// Middlewares
// El parámetro dev es para un mensaje corto por consola de la ruta de petición
// Devuelve por ej: GET / 304 25.200 ms - - Petición 'Get' desde ruta '/' devuelve
// código '304' y tardó '25 ms'
app.use(morgan('dev'));
// Para entener información de tipo json
app.use(express.json());

// Routes
// Define /tasks como la raiz de las rutas de tasks.js
app.use('/tasks', tasks);


// Static files
// __dirname es una constante que tiene la ruta completa del SO del proyecto
// Así ya se envía la carpeta public al navegador
app.use(express.static(__dirname + '/public'));

// Servidor escucha en puerto 3000
app.listen(puerto, () =>{
    console.log(`Servidor corriendo en puerto ${puerto}`.inverse);
});

