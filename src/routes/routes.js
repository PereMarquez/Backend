const {Router} = require("express");
const routerEjemplo = Router();
const ctrEj = require("../controller/controller");

routerEjemplo.get('/mostrarMedidas', ctrEj.obtener);

routerEjemplo.post('/agregar', ctrEj.agregar);

module.exports = routerEjemplo
  