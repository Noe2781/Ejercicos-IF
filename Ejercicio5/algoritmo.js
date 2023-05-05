const mascotaPerro = 1;
const mascotaGato = 2;
const tiempoPaseo1 = 1;
const tiempoPaseo2 = 2;
const costox1Mascota1hr = 2000;
const costox1MascotaMediahr = 1500;
const costox1Gato1hr = 3400;
const costox1GatoMediahr = 2550;




let tipoMascota = prompt ("Si su mascota es perro ingrese: 1 / Si su mascota es  gato ingrese : 2 ");
let cantMascota = prompt("Cuantas mascotas desea pasear? ");
let tiempoLimite = prompt("Tiempo de paseo: para 30 minutos ingrese : 1 / para una hora ingrese : 2 ");

alert("El costo de paseo por un perro en el tiempo de una hora es de $2000 ");

alert("El costo de paseo por un gato en el tiempo de una hora es de $3400 ");

alert("El costo de paseo por una perro en el tiempo de media hora es de $1500 ");

alert("El costo de paseo por una gato en el tiempo de media hora es de $2550 ");

confirm("Confirme los datos ingresados");






if ((tipoMascota == 1 && cantMascota <=2) ||(tipoMascota == 2 && cantMascota <= 2 ) && (tiempoLimite == tiempoPaseo1 || tiempoLimite == tiempoPaseo2)) {
    document.write("Podemos pasear a su mascota ");
} else {
    document.write("No podemos pasear a sus mascotas ");


}

const totalCostoPaseo1hr = cantMascota * costox1Mascota1hr;
const totalPaseoMediahr = cantMascota * costox1MascotaMediahr;
const totalPaseoGato1hr = cantMascota * costox1Gato1hr;
const totalpaseoGatoMediahr = cantMascota * costox1GatoMediahr;



if ((tiempoLimite == 1  && tipoMascota == 1 && cantMascota <=2 ) ) {
    document.write(" Debe abonar a FeriaCoin el total de $ " + totalPaseoMediahr);

} else if ((tiempoLimite == 2 && tipoMascota == 1 && cantMascota <=2)) {

    document.write(" Debe abonar a FeriaCoin el total de $ " + totalCostoPaseo1hr);

} else if ((tiempoLimite == 1 && tipoMascota == 2 && cantMascota <=2)) {

    document.write(" Debe abonar a FeriaCoin el total de $ " + totalpaseoGatoMediahr );

} else if ((tiempoLimite == 2 && tipoMascota == 2 && cantMascota <=2)) {

    document.write(" Debe abonar a FeriaCoin el total de $ " + totalPaseoGato1hr );


} else {
    document.write(" No realize el pago por favor ");
    
}


