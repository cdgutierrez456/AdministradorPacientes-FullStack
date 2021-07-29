const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

// Creando el servidor
const app = express();

// Condiciones para el uso del dominio
const whiteList = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whiteList.some(dominio => dominio === origin);
        if(existe) {
            callback(null, true)
        } else {
            callback(new Error('No permitido por CORS'))
        }
    }
}

// Habilitando cors
// app.use(cors(corsOptions));
app.use(cors());

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// Habilitar el body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Habilitando routing
app.use('/', routes());

// Asignando puerto y arrancando el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
})

