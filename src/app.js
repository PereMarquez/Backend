//Variables de lectura asignadas a puntero en memoria
const express = require('express')
const routerEjemplo = require('./routes/routes');
const app = express()
const conexionDB = require("./dbconnection");

//Linea para realizar la conexión
conexionDB();

//Configuración de la app
app.set("name", "rest-api-nodejs");
app.set("port", process.env.port || 8000 );
app.use( express.json() )
app.use("/api", routerEjemplo);

app.use(express.static("public"));
  
module.exports = app;



