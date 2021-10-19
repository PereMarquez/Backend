/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: medicionSchema.js
 * 11/10/21
 * Esquema del cuerpo del JSON
 */
const { Schema, model } = require("mongoose");

const MedicionSchema = new Schema ({

    valor : {
        type: Number,
        required: true,
    },
    fecha : {
        type: String,
        required: true,
    },

});

module.exports = model ( "Medicion", MedicionSchema );