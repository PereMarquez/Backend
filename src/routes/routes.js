/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: routes.js
 * 11/10/21
 * Gestión rutas api
 */
const {Router} = require("express");
const routerEjemplo = Router();
const ctrEj = require("../controller/controller");
const controladorMediciones = require("../controller/controladorMediciones");
const controlador = new controladorMediciones();

/**
 * Método peticionario REST para obtener mediciones
 * get()->JSON({Number, Date})
 */
routerEjemplo.get('/mostrarMedidas', (req, res)=>{
    console.log(controlador.getMedicion());
    controlador.getMedicion().then(resp=>{
        res.status(200).json(resp);
    }).catch(error =>{
        res.status(204).json(error);
    })
});

/**
 * Método peticionario REST para agregar mediciones
 * JSON({Number})->post()->
 */
routerEjemplo.post('/agregar', (req, res)=>{
 
    controlador.postMedicion(req.body.valor).then(resp=>{
        console.log(resp);
        res.status(200).json(resp);
    }).catch(error =>{

        res.status(204).send(error);
    })
});

module.exports = routerEjemplo
  