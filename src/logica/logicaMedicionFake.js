/**
 * Obtiene todas las mediciones
 */
$(function obtenerTodasMediciones() {
    $.ajax({
        // hago una peticion Get a la api para obtener la lista de sensores
        type: "GET",
        url: "http://192.168.31.98:8000/api/mostrarMedidas",
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
 * Añade una medicion en el html
 * @param {*} medicion 
 * 
 */
 function mostrarMedicion(medicion) {
     console.log(medicion.valor)
    var html = '<li id="sensor-" style="display:flex;">' +
        '            <p class="nombre-sensor" style="margin-right:auto;width: 25%;">' + medicion.valor + '</p>' +
        '            <p class="dioxido" style="margin-right:auto;width: 25%;">' + medicion.fecha + '</p>' +
        '        </li>';
    $('#listaMediciones').append(html);
}