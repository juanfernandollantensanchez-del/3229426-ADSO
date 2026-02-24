function mostrarDia() {
    let numero = parseInt(document.getElementById("numeroDia").value);
    let mensaje;

    switch (numero) {
        case 1:
            mensaje = "Lunes";
            break;
        case 2:
            mensaje = "Martes";
            break;
        case 3:
            mensaje = "Miércoles";
            break;
        case 4:
            mensaje = "Jueves";
            break;
        case 5:
            mensaje = "Viernes";
            break;
        case 6:
            mensaje = "Sábado";
            break;
        case 7:
            mensaje = "Domingo";
            break;
        case 8:
            mensaje = "Festivo";
            break;
        default:
            mensaje = "Número inválido. Por favor ingresa un número del 1 al 7.";
    }

    document.getElementById("resultado").textContent = mensaje;
}