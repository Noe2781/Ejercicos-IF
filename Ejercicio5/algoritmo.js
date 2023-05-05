const mascotaPerro = 1;
const mascotaGato = 2;
const tiempoPaseo1 = 1;
const tiempoPaseo2 = 2;
const costox1Mascota1hr = 2000;
const costox1MascotaMediahr = 1500;




let tipoMascota = prompt ("Si su mascota es perro ingrese: 1 / Si su mascota es un gato ingrese : 2 ");
let cantMascota = prompt("Cuantas mascotas desea pasear? ");
let tiempoLimite = prompt("Tiempo de paseo: para 30 minutos ingrese : 1 / para una hora ingrese : 2 ");

alert("El costo de paseo por una mascota en el tiempo de una hora es de $2000 ");

alert("El costo de paseo por una mascota en el tiempo de media hora es de $1500 ");

confirm("Confirme los datos ingresados");






if ((tipoMascota == 1 && cantMascota <=3) ||(tipoMascota == 2 && cantMascota <= 1 ) && (tiempoLimite == tiempoPaseo1 || tiempoLimite == tiempoPaseo2)) {
    document.write("Podemos pasear a su mascota ");
} else {
    document.write("No podemos pasear a sus mascotas ");


}

const totalCostoPaseo1hr = cantMascota * costox1Mascota1hr;
const totalPaseoMediahr = cantMascota * costox1MascotaMediahr;



if (tiempoLimite == 1) {
    document.write(" Debe abonar a FeriaCoin el total de $ " + totalPaseoMediahr);

} else if (tiempoLimite == 2) {

    document.write(" Debe abonar a FeriaCoin el total de $ " + totalCostoPaseo1hr);

} else {
    document.write(" pero si usted no abona a FeriaCoin no podemos pasear a sus mascotas ");
    
}


