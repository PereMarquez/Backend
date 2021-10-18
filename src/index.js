/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: index.js
 * 11/10/21
 * Define el servidor 
 */
const app = require('./app');

app.listen(app.get("port"), () => {
    console.log(`Example app listening at http://localhost:${app.get("port")}`)
    console.log("nombre de la app", app.get("name"));
  })
