const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Creando el servidor
const app = express();

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Habilitando routing
app.use('/', routes());

// Asignando puerto y arrancando el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
})

