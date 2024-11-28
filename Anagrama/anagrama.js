
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

document.querySelector("button").addEventListener("click", () => {
    const palabra1 = document.querySelector("#palabra1").value.toLowerCase();
    const palabra2 = document.querySelector("#palabra2").value.toLowerCase();
    const resultado = sonAnagramas(palabra1, palabra2);

    document.querySelector("#resultado").textContent = resultado ? "Son anagramas" : "No son anagramas";

});

function sonAnagramas(palabra1, palabra2) {

    if (palabra1.length !== palabra2.length) {
        return false;
    } else if (palabra1 === palabra2) {
        return false;
    }
    
    const letrasOrdenadas1 = palabra1.split("").sort().join();
    const letrasOrdenadas2 = palabra2.split("").sort().join();

    for (let i = 0; i < letrasOrdenadas1.length; i++) {
        if (letrasOrdenadas1[i] !== letrasOrdenadas2[i]) {
            return false;
        }
    }
    return true;
}

/**
 * 
 * *Otra forma de hacerlo un poco más eficaz sin usar el bucle for, y por lo tanto hacer un pequeño cambio en el apartado de join():
 * 
 * document.querySelector("button").addEventListener("click", () => {
    const palabra1 = document.querySelector("#palabra1").value.toLowerCase();
    const palabra2 = document.querySelector("#palabra2").value.toLowerCase();
    const resultado = sonAnagramas(palabra1, palabra2);

    document.querySelector("#resultado").textContent = resultado ? "Son anagramas" : "No son anagramas";
});

function sonAnagramas(palabra1, palabra2) {
    if (palabra1 === palabra2 || palabra1.length !== palabra2.length) {
        return false;
    }

    const letrasOrdenadas1 = palabra1.split("").sort().join("");
    const letrasOrdenadas2 = palabra2.split("").sort().join("");

    return letrasOrdenadas1 === letrasOrdenadas2;

    **Sería como hacer: 
    if (letrasOrdenadas1 === letrasOrdenadas2) {
    return true;
    } else {
        return false;
    }
}

 */

