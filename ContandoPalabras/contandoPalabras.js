/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

// toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

class Palabra {
    constructor(palabra, numRepiticiones) {
        this.palabra = palabra;
        this.numRepiticiones = numRepiticiones;
    }
}

let palabrasAlmacenadas = []; // Array para almacenar los objetos Palabra

document.getElementById("boton").addEventListener("click", function () {
    let textoIntroducido = document.querySelector("#texto").value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,?!¡¿;:"'(){}[\]-]/g, "");
    let palabras = textoIntroducido.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        let palabraActual = palabras[i];

        // Busca si la palabra ya está en el array
        let palabraEncontrada = palabrasAlmacenadas.find(function (p) {
            return p.palabra === palabraActual;
        });

        if (palabraEncontrada) {
            // Si existe, incrementa su contador
            palabraEncontrada.numRepiticiones++;
        } else {
            // Si no existe, crea un nuevo objeto y agrégalo al array
            palabrasAlmacenadas.push(new Palabra(palabraActual, 1));
        }
    }

    // Mostrar los resultados
    mostrarResultados();
});

function mostrarResultados() {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpia resultados anteriores

    palabrasAlmacenadas.forEach(function (p) {
        let resultadoTexto = `${p.palabra}: ${p.numRepiticiones}`;
        let parrafo = document.createElement("p");
        parrafo.textContent = resultadoTexto;
        resultadoDiv.appendChild(parrafo);
    });
}




// nt resultado = numeroInicial + siguienteNumero;
//                 System.out.print(", " + resultado);
//                 numeroInicial = siguienteNumero;
//                 siguienteNumero = resultado;