function enviarDatos() {
    let nombre = $("#nombre").val(); //document.getElementById("nombre").value; Equivalente en DOM
    let email = $("#email").val();
    let message = $("#message").val();
    let mensaje = "Gracias por tu registro <b> " + nombre + "</b><br>" + "nos vamos a contactar a tu Email: <b> " + email +  "</b>" + " y así poder enviarte la credencial para retirar tus cervezas mensualmente " + "<br>" + message;
    $("#app").html(mensaje);
}

$("#boton").click(function() {
    enviarDatos();
})