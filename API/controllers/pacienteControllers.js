const Paciente = require('../models/Paciente');

// Cuando se crea un nuevo paciente
exports.nuevoCliente = async (req, res, next) => {

    // Crear objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();
        res.json({mensaje: 'El cliente se agregó correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }

}
