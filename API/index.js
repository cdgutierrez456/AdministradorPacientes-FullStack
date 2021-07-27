const express = require('express');
const mongoose = require('mongoose');

// Creando el servidor
const app = express();

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// Asignando puerto y arrancando el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
})

