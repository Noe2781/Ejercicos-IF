const USUARIO_NOMBRE_REGISTRADO = "Juan";
const USUARIO_CONTRASENIA_REGISTRADA = "Juanito";

let usuarioNombreIngresado = prompt("Ingrese usuario");
let usuarioContraseniaIngresada = prompt("Ingresar contraseña");

if ( ( usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA)  && (usuarioNombreIngresado == USUARIO_NOMBRE_REGISTRADO)) {
    document.write("Usuario y contraseña correctos");
} else {
    document.write("Usuario y contraseña incorrectos");
}