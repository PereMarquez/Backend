const { Schema, model } = require("mongoose");

const EjemploSchema = new Schema ({

    nombre : {
        type: String,
        required: true,
    },
    correo : {
        type: String,
        required: true,
    },

});

module.exports = model ( "Ejemplo", EjemploSchema );