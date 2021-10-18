module.exports = class Medicion{
    constructor(valor){
        this.valor=valor;
        this.fecha=new Date();
    }

    getValor(){
        return this.valor;
    }

    getFecha(){
        return this.fecha;
    }
}