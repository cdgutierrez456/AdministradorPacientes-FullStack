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

// Obtiene todos los pacientes
exports.obtenerPacientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
    }
}

// Obtiene un paciente por su id
exports.obtenerPaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

