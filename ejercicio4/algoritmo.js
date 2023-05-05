let ingredVerdura = confirm("Tengo verdura?");
let ingredAgua = confirm("Tengo agua?");

let ingredPollo = confirm("Tengo pollo ?");
let ingredCarne = confirm("Tengo carne ?");

let ingredCondimentos = confirm("Tengo condimentos ?");
let ingredCuboCaldo = confirm(" Tengo cubo de caldo ?");


if( ((ingredVerdura && ingredAgua) && (ingredPollo || ingredCarne)) && (ingredCondimentos || ingredCuboCaldo)){
    document.write("A preparar la sopa!");
}else{
    document.write("Faltan ingredientes  para preparar la sopa!");
}


