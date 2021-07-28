const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function () {

    // Agregando nuevo paciente via post
    router.post('/pacientes',
        pacienteController.nuevoCliente,
    );

    // Obtiene todos los registros de pacientes de la base de datos
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    // Obtiene un paciente por su id
    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    // Actualiza un registro con un id especifico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    // Elimina un paciente por su id
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );

    return router;
}
