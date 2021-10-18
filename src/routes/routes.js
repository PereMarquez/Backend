/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: routes.js
 * 11/10/21
 * Gestión rutas api
 */
const {Router} = require("express");
const routerEjemplo = Router();
const controladorMediciones = require("../controller/controladorMediciones");
const controlador = new controladorMediciones();
var cors = require('cors');
/**
 * Método peticionario REST para obtener mediciones
 * get()->JSON({Number, Date})
 */
routerEjemplo.get('/mostrarMedidas', cors(), (req, res)=>{
    console.log(controlador.getMedicion());
    controlador.getMedicion().then(resp=>{
        if(resp!=false){
            res.status(200).json(resp);
        }else{
            res.status(204).send({
                error:"error"
            });
        }
    }).catch(error =>{
        console.log("400", error);
        res.status(400).json(error);
    })
});

/**
 * Método peticionario REST para agregar mediciones
 * JSON({Number})->post()->
 */
routerEjemplo.post('/agregar', cors(), (req, res)=>{
 
    controlador.postMedicion(req.body.valor).then(resp=>{
        console.log(resp);
        res.status(200).json(resp);
    }).catch(error =>{
        res.status(204).send(error);
    })
});

module.exports = routerEjemplo
  