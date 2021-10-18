/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: logicaMediciones.js
 * 11/10/21
 * Logica
 */
var medicion = require("../Models/medicion");
var medicionSchema = require("../Models/medicionSchema");
module.exports = class logicaMediciones{
    /**
     * Método para añadir mediciones a la bbdd
     * Medicion -> postMedicion() ->
     * @param {Medicion} medicion 
     * @returns 
     */
    async postMedicion(medicion){
        var valor = medicion.getValor();
        var fecha = medicion.getFecha();
        return new Promise((resolve, reject)=>{
            if(valor!=undefined){
                const newMedicion = new medicionSchema ( {valor, fecha} );
                    newMedicion.save().then((obj)=>{
                        if(obj._id){
                            resolve(true);
                        }else{
                            reject(false);
                        }
                    });
                    }else{
                        reject(false);
                    }
                });
        
    }

    /**
     * Método para obtener todas las mediciones de la bbdd
     * ->getMediciones()->[Medicion]
     * @returns [Medicion]
     */
    async getMediciones(){
        return new Promise((resolve, reject)=>{
            medicionSchema.find().then((mediciones)=>{
                if(mediciones.length>0){
                    resolve(mediciones);
                }else{
                    reject(false);
                }
                
            })
            .catch(()=>{
                reject(false);
            })
        });
    }
}