/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: test.js
 * 11/10/21
 * Tests 
 */
var controller = require('../controller/controller');
var request = require('request')
var expect = require('chai').expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = chai.assert;

chai.use(chaiHttp)


describe("Probando obtener", () => {
    it("Obtiene valores de la base de datos", () => {
        request('http://localhost:8000/api/mostrarMedidas', (error, response, body) => {
            expect(response.statusCode).to.equal(200)            

        })
    })
})

describe("Probando agregar", () => {
    it("Agrega valores a la base de datos", () => {
            chai.request('http://localhost:8000/api')
            .post('/agregar')
            .send({
            })
            .end( function(err,res){
                assert.equal(res.status, 200)
                /*if(res.statusCode == 204) {
                    assert.equal(res.statusCode, 200, "No")
                } else if (res.statusCode == 200) {
                    assert.isOk(true, "Funciona")
                }*/
            })
    })
})