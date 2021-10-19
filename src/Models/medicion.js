/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: medicion.js
 * 11/10/21
 * Clase medicion con constructor y getters
 */
module.exports = class Medicion{
    /**
     * 
     * @param {Number} valor 
     */
    constructor(valor){
        this.valor=valor;
        this.fecha=new Date();
    }

    /**
     * 
     * @returns Number
     */
    getValor(){
        return this.valor;
    }

    /**
     * 
     * @returns Date
     */
    getFecha(){
        return this.fecha;
    }
}