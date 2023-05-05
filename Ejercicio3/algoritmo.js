let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("Ingrese el segundo numero");
let num3 = prompt("Ingrese el tercer numero");

 if ((num1 == num2) && (num1 == num3)){
    document.write("Felicidades!! Has ganado el primer premio!!");
}else if ((num1 == num2)|| (num1 == num3) || (num2 == num3)){
    document.write("Felicidades!! Has ganado el segundo premio!!");
}else {
    document.write("Has ganado un helado!!");
}