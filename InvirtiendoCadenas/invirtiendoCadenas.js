/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

document.querySelector("#invertir").addEventListener("click", function () {
    let textoEscritoPorUsuario = document.querySelector("#cadena").value;
    
    document.querySelector("#resultado").innerHTML = invertirCadena(textoEscritoPorUsuario);
});

function invertirCadena(cadena) {
    let cadenaInvertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}




