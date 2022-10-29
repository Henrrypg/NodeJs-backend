const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

let UsuarioSchema = new  mongoose.Schema({
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    telefono_fijo: { type: String, required: false },
    correo_electronico: { type: String, required: true },
    telefono_celular: { type: String, required: true },
    contrasena: { type: String, required: false },
    cargo: { type: String, required: false },
    codigo_autenticacion: { type: String, required: false },
    roles: { type: Array, required: false, default: [] },
});

UsuarioSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Usuario', UsuarioSchema);
