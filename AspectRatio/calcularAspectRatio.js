/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://via.placeholder.com/1920x1080 , https://via.placeholder.com/800x600 , https://via.placeholder.com/900x600 , 
 *  https://via.placeholder.com/2100x900 y https://via.placeholder.com/500x500
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */



document.querySelector("#calcular").addEventListener("click", function () {
    //Aquí creo una nueva imagen con la url que se ha introducido en el input
    let imagen = new Image();
    // Aquí le digo que la url de la imagen es la que se ha introducido en el input.
    imagen.src = document.querySelector("#url").value;
    //Aquí le digo que cuando la imagen esté cargada, ejecute la función que calcula el aspect ratio
    imagen.onload = function () {
        let anchura = imagen.width;
        let altura = imagen.height;
        document.querySelector("#resultado").innerHTML = `El aspect ratio de la imagen es: ${calcularAspectRatio(anchura, altura)}`;
    }

});
function calcularMCD(anchura, altura) {
    while (altura !== 0) { 
        let resto = anchura % altura; 
        anchura = altura; 
        altura = resto; 
    }
    return anchura; 
}

function calcularAspectRatio(anchura, altura) {
    let mcd = calcularMCD(anchura, altura);
    let aspectRatioAnchura = anchura / mcd;
    let aspectRatioAltura = altura / mcd;
    return `${aspectRatioAnchura}:${aspectRatioAltura}`;

    // Otra forma de hacerlo sin suar template literals sería:   
    //let aspectRatioConjunto = aspectRatioAnchura + ":" + aspectRatioAltura;
}