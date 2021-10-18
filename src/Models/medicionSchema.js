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