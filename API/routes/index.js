const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function () {

    // Agregando nuevo paciente via post
    router.post('/pacientes',
        pacienteController.nuevoCliente,
    )

    return router;
}
