/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 * Apunte: Técnicamente no cumplo con la consigna de que sea una única función, ya que he querido hacerlo intereactivo. Quitando eso, la función calcularAreaPoligono() es la única que realiza el cálculo.
 */

let numeroBotones = document.querySelectorAll(".poligono").length;
for (let i = 0; i < numeroBotones; i++) {
    document.querySelectorAll(".poligono")[i].addEventListener("click", function () {
        let poligono = this.innerHTML.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        calcularAreaPoligono(poligono);
    });
}

function calcularAreaPoligono(poligono) {
    let area;
    let base = 10;
    let altura = 5;
    let lado = 10;

    switch (poligono) {
        case "triangulo":
            area = 0.5 * base * altura;
            break;
        case "cuadrado":
            area = lado * lado;
            break;
        case "rectangulo":
            area = base * altura;
            break;
        default:
            console.log("Poligono no soportado");
            break;
    }
    document.querySelector("#resultado").innerHTML = `El área del ${poligono} es: ${area}`;

}