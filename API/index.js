const express = require('express');

// Creando el servidor
const app = express();

// Asignando puerto y arrancando el servidor
app.listen(4000, () => {
    console.log('Servidor funcionando');
})

