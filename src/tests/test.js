/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: test.js
 * 11/10/21
 * Tests 
 */
var controller = require('../controller/controladorMediciones');
var request = require('request')
var chai = require('chai');
var chaiHttp = require('chai-http');
var assert = chai.assert;
const { expect } = require('chai');
let should = chai.should();
chai.use(chaiHttp)


describe("Probando GET", () => {
    it("Obtiene valores de la base de datos", () => {(done) => {
                chai.request('http://localhost:8000/api')
                    .get('/mostrarMedidas')
                    .end((err, res) => {
                        expect(res.statusCode).to.equal(200)
                        expect(res.body.mediciones.length).to.above(0)
                        done();
                    })
                }
    })
})

describe("Probando POST", () => {
    it("Agrega valores a la base de datos", (done) => {
        chai.request('http://localhost:8000/api')
            .post('/agregar')
            .send({
                valor: 22
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200)
                expect(res.body.msj).to.equal("Documento insertado")
                done();
            })
    })
})