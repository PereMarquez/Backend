/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: controladorMediciones.js
 * 11/10/21
 * Logica
 */
 medicion = require("../Models/medicion");
 logicaMedicion = require("../logica/logicaMediciones");

module.exports = class controladorMediciones{

    logica = new logicaMedicion();

     /**
      * Método para añadir mediciones a la bbdd
      * Number -> postMedicion() ->
      * @param {Number} valor 
      * @returns 
      */
     async postMedicion(valor){
         const medicionObj = new medicion(valor);
         console.log(medicionObj);
         return new Promise((resolve, reject)=>{
            this.logica.postMedicion(medicionObj).then((obj)=>{
                console.log("probando", obj);
                if(obj){
                    resolve({
                       msj: "Documento insertado"
                    });
                }else{
                    reject({
                       msj: "Los datos son requeridos"
                    });
                }
            });
             
         });
     }
 
     /**
      * Método para obtener todas las mediciones de la bbdd
      * ->getMediciones()->[Medicion]
      * @returns [Medicion]
      */
     async getMedicion(){
         return new Promise((resolve, reject)=>{
            this.logica.getMediciones().then((meds)=>{
                if(meds.length > 0){
                    resolve({
                      mediciones:meds
                    });
                }else{
                    reject({
                       mediciones:[]
                    });
                }
            }).catch(()=>{
                resolve(false);
            })
            
         });
     }
 }