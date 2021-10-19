/**
 * Autor: Pere Márquez Barber
 * Nombre del fichero: logicaMedicionFake.js
 * 11/10/21
 * Archivo que muestra todas las mediciones en la web
 */
$(function obtenerTodasMediciones() {
    $.ajax({
        // hago una peticion Get a la api para obtener la lista de sensores
        type: "GET",
        url: "http://172.20.10.9:8000/api/mostrarMedidas",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        dataType: "json",
        data: {},
        success: function (arrayMediciones) {
            arrayMediciones.mediciones.forEach(function (medicion) {
                console.log(medicion)
                mostrarMedicion(medicion);
            });
            
        },
        error: function () {
            console.log("error");
        },
        crossDomain: true
    })
})

/**
 * 
 * @param {Medicon} medicion 
 * @returns Object
 */
 function mostrarMedicion(medicion) {
     console.log(medicion.valor)
    var html = '<li id="sensor-" style="display:flex;">' +
        '            <p class="nombre-sensor" style="margin-right:auto;width: 25%;">' + medicion.valor + '</p>' +
        '            <p class="dioxido" style="margin-right:auto;width: 25%;">' + medicion.fecha + '</p>' +
        '        </li>';
    $('#listaMediciones').append(html);
}