/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

/**
 * Pre-calculo:
 * 1. Obtenemos lo que ha puesto el usuario.
 * 2. Comprobar si es un número entero o si es un número decimal 
 * 3. Si es un número entero ya podemos pasar a calcular.
 * 4. Si es decimal separar en dos partes: una parte el número entero, el otro el número decimal
 * 5. Pasar a calcular
 * 
 *  Calcular entero:
 *  1.Divides el número entre 2.
    2.Tomas la parte entera del cociente. (Ignoras los decimales).
    3.Guardas el residuo.
    4.Repetir hasta que el cociente sea 0.
    5.Cuando el cociente sea 0 termina el proceso y tendrémos que coger todos los residuos guardados y leer al reves (ejemplo: 0101 -> 1010)
    6.Guardarlo.
    7. Si había decimales entonces tenemos que pasar a calcular los decimales.
    
*  Calcular decimal:

   1.Multiplicas la parte decimal por 2.
   2.Guardas la parte entera (0 o 1).
   3.Actualizas la parte fraccionaria (restas la parte entera del resultado).
   4.Repetir hasta que la parte fraccionaria sea 0 o llegues a un límite de precisión.
   5.Guardar los resultados (los dígitos binarios).

   Resultado:
   Devolvemos el resultado que es la fusión entre el calcular entero + el calcular decimal
   La fusión entre:
   Parte entera (convertida e invertida).
   Parte decimal (calculada usando multiplicaciones sucesivas).
 */

   $("#transformar").click(function(event) {
      let numeroEscritoPorUsuario = $("#url").val(); // Obtenemos la entrada como cadena
      let numeroIntegro, numeroDecimal, numeroIntegroTransformado, numeroDecimalTransformado, partes;
      let numeroTransformadoCompleto;
  
      // Verificamos si el número contiene punto o coma para separarlo
      if (numeroEscritoPorUsuario.includes(".") || numeroEscritoPorUsuario.includes(",")) {
          partes = numeroEscritoPorUsuario.split(/[.,]/); // Dividimos en partes
          numeroIntegro = parseInt(partes[0]); // Parte entera
          numeroDecimal = parseInt(partes[1]) / Math.pow(10, partes[1].length); // Parte decimal
          numeroIntegroTransformado = transfNumIntegroABinario(numeroIntegro);
          numeroDecimalTransformado = transfNumDecimalABinario(numeroDecimal);
          if (numeroIntegro === 0) {
            numeroTransformadoCompleto = `${numeroDecimalTransformado}`;
        } else {
            numeroTransformadoCompleto = `${numeroIntegroTransformado}.${numeroDecimalTransformado}`;
        }
      } else {
          numeroIntegro = parseInt(numeroEscritoPorUsuario);
          numeroDecimal = 0; // No hay parte decimal
          numeroIntegroTransformado = transfNumIntegroABinario(numeroIntegro);
          numeroTransformadoCompleto = `${numeroIntegroTransformado}.${numeroDecimal}`;
      }
      escribirResultado(numeroTransformadoCompleto);
  });

  function transfNumIntegroABinario(numIntegro) {
    let cociente;
    let residuo = [];

    while (numIntegro !== 0) {
        cociente = Math.floor(numIntegro / 2); // Math.floor para redondear hacia abajo y evitar decimales.
        residuo.push(numIntegro % 2);
        numIntegro = cociente;
    }

    residuo.reverse();
    
    return residuo.join(""); 
  }

  function transfNumDecimalABinario(numDecimal, precision = 10) {
    let binarioDecimal = [];
    let fraccion = numDecimal; // Comienza con la parte decimal
    let iteraciones = 0;

    while (fraccion !== 0 && iteraciones < precision) {
        fraccion *= 2; // Multiplicamos por 2
        let bit = Math.floor(fraccion); 
        binarioDecimal.push(bit); // Guardamos el bit
        fraccion -= bit; // Restamos la parte entera para obtener la nueva fracción
        iteraciones++;
    }

    return binarioDecimal.join(""); // Retornamos los bits como string
  }

  function escribirResultado(numeroTransformadoCompleto) {
    $("#resultado").text(numeroTransformadoCompleto);
  }