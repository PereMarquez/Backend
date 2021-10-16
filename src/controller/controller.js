const Ejemplo = require("../Models/ejemplo");

exports.agregar = async (req, res) => {
    try {
        const { nombre, correo } = req.body;
        console.log(req.body);


        if( nombre ){
        const nuevoEjemplo = new Ejemplo ( {nombre, correo} );
        await nuevoEjemplo.save();

        res.json({
            msj: "Documento insertado",
            id: nuevoEjemplo._id
        });
        }else{
        res.json({
            isOk: false, msj: "Los datos son requeridos"
        });
        }

    } catch (error) {
        res.json(error);
    }
};

exports.obtener = async (req, res) => {
    try {
        console.log("obtiene");
        const ejemplos = await Ejemplo.find()
        res.status(200).json(ejemplos);
    } catch (error) {
        res.json(error);
    }
}