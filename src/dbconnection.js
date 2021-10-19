/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: dbconnection.js
 * 11/10/21
 * Conexión a la bbdd
 */
//Variables de lectura asignadas a puntero en memoria
const mongoose = require('mongoose');

const conexionDB = async () => {
    try {
        const DB = await mongoose.connect('mongodb://localhost:27017/test');
        console.log("Conectado con Mongo, ", DB.connection.name);
    } catch (error) {
        console.log(error);
    }
}

module.exports = conexionDB;