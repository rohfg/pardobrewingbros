
const URLGET = "js/datos.json";

$("main").prepend('<button id="btn1">GET</button>');

$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
        if (estado === "success") {
        let misDatos = respuesta;
        console.log(misDatos);
        for (const dato of misDatos) {
            $("main").prepend(`<div>
                                <h3>(${dato.id}) ${dato.nombre}</h3>
                                <p> ${dato.descripcion}</p>
                                <p><img src=${dato.imagen}></p>
                                <p>${dato.precio}</p>
                                </div>`);
        }  
        }
    });
});



