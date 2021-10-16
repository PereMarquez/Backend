const app = require('./app');

app.listen(app.get("port"), () => {
    console.log(`Example app listening at http://localhost:${app.get("port")}`)
    console.log("nombre de la app", app.get("name"));
  })
