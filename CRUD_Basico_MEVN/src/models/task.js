const mongoose = require('mongoose');
// Se requiere sólo la parte Schema de la biblioteca porque ya está conectada la BD
const { Schema } = mongoose;

// Se crea el Schema que es cómo van a lucir los datos
const Task = new Schema({
    title: String,
    description: String
});

// Después se crea el modelo, que es una instancia del Schema 
// y es dondse se almacenará la información
module.exports = mongoose.model('Task', Task);

