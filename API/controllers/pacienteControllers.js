
// Cuando se crea un nuevo paciente
exports.nuevoCliente = (req, res, next) => {
    // TODO: Insertar en la base de datos
    console.log(req.body);

    res.json({mensaje: 'El cliente se agregó correctamente'});
}
