let cantCarnes = prompt("Ingresar la cantidad de productos comprados en carnes");
let cantLacteos = prompt("Ingresar la cantidad de productos comprados en lacteos ");
let cantEnlatados = prompt("Ingresar la cantidad de productos comprados en enlatados");


alert("El precio de cada producto en carnes es de $1800 ");
alert("El precio de cada producto en lacteos es de $800 ");
alert("El precio de cada producto en enlatados es de $500 ");

confirm("Confirme los datos ingresados");


const precioCarnes = 1800;
const precioLacteos = 800;
const precioEnlat= 500;
const totalCarne= cantCarnes * precioCarnes;
const totalLacteos= cantLacteos * precioLacteos;
const totalEnlat = cantEnlatados * precioEnlat;
const descuentoCarne = 25/100;
const descuentoLacteos = 50/100;
const descuentoEnlat = 70/100;
const totalDescCarnes = totalCarne * descuentoCarne ;
const totalDescLacteos = totalLacteos * descuentoLacteos;
const totalDescEnlat = totalEnlat * descuentoEnlat;
const montoTotalCarne = totalCarne - totalDescCarnes;
const montoTotalLacteos = totalEnlat - totalDescLacteos;
const montoTotalEnlat = totalEnlat - totalDescEnlat;
const totalPagar= (montoTotalCarne + montoTotalLacteos + montoTotalEnlat);
const subtotal= (totalCarne + totalLacteos + totalEnlat);
const descuentoTotal= (totalDescCarnes + totalDescLacteos + totalDescEnlat);

document.write("El subtotal de la compra es de $ " + subtotal);
document.write(" Descuento total en Carnes $ " + totalDescCarnes );
document.write(" Descuento total en Lacteos $ " + totalDescLacteos );
document.write(" Descuento total en Enlatados $ " + totalDescEnlat );
document.write("A usted se le bonificara un total de :  $ " + descuentoTotal  );
document.write(" El total de su compra  es de $ " + totalPagar);

