/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
let numerosPrimos = esPrimo();
document.querySelector("button").addEventListener("click", () => {
    document.getElementById("resultado").textContent = "Los números primos entre 1 y 100 son: " + numerosPrimos;
});


function esPrimo() {
    let numerosPrimos = [];
    for (let i = 1; i <= 100; i++) {
        let contador = 0;
        for (let j = 1; j <= i; j++) {
            if(i % j == 0) {
                contador++;
                if (contador > 2) {
                    break;
                }
            }
        }
        if (contador == 2) {
            numerosPrimos.push(i);
        }
    }
    return numerosPrimos;
}



