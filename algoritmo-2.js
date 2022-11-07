// Enunciado
// Dada la siguiente problemática: ¿puede un número X formarse usando la suma de 2 elementos
// de un array?
// Ejemplo 1
// Input: nums = [1,4,3,9], requiredSum = 8
// Output: False
// Ejemplo 2
// Input: nums = [1,2,4,4], requiredSum = 8
// Output: True
// 2. Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado,
// que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.

function respuestaMasEficiente(arrayDeNumeros, numeroASumar) {
  // filtramos numeros mayores que el numero a sumar
  const numerosMenoresANumeroASumar = arrayDeNumeros.filter((numero) => numero < numeroASumar);
  const numerosOrdenados = ordernarArray(numerosMenoresANumeroASumar);
  return verificaSiDosNumerosDevuelvenSumaEsperada(numerosOrdenados, numeroASumar);
}

function verificaSiDosNumerosDevuelvenSumaEsperada(arrayNumeros, sumaEsperada) {
  let acumulador = 0;
  // Una vez iterados, se guarda el número en un array para no repetirlo
  const numerosYaIteradosI = [];
  for (let i = 0; i < arrayNumeros.length - 1; i++) {
    if (!numerosYaIteradosI.includes(arrayNumeros[i])) {
      // Una vez iterados, se guarda el número en un array para no repetirlo

      const numerosYaIteradosJ = [];
      for (let j = i + 1; j < arrayNumeros.length; j++) {
        // Verifica si la suma ya se realizó y si el valor arrayNumeros[j] ya fue iterado por i
        if (
          !numerosYaIteradosJ.includes(arrayNumeros[j]) ||
          numerosYaIteradosI.includes(arrayNumeros[j])
        ) {
          const numeroI = arrayNumeros[i];
          const numeroJ = arrayNumeros[j];
          const suma = numeroI + numeroJ;
          acumulador++;
          console.log(`suma numero: ${acumulador}; ${numeroI} + ${numeroJ} = ${suma}`);
          if (suma === sumaEsperada) {
            return true;
          }
          numerosYaIteradosJ.push(arrayNumeros[j]);
        }
      }
      numerosYaIteradosI.push(arrayNumeros[i]);
    }
  }
  return false;
}

function ordernarArray(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

const input1 = [1, 4, 3, 9];
const requiredSum1 = 8;

const input2 = [1, 2, 4, 4];
const requiredSum2 = 8;

const input3 = [1, 4, 4, 4, 10, 23, 24, 26, 10, 15, 22, 500, 126, 24, 55, 9999, 234423, 1];
const requiredSum3 = 25;

console.log("Ejercicio 1:");
const ejemplo1 = respuestaMasEficiente(input1, requiredSum1);
console.log(ejemplo1);

console.log("Ejercicio 2:");
const ejemplo2 = respuestaMasEficiente(input2, requiredSum2);
console.log(ejemplo2);

console.log("Ejercicio con array un poco más grande:");
const ejemplo3 = respuestaMasEficiente(input3, requiredSum3);
console.log(ejemplo3);

// Al pasarle como argumento un array de gran tamaño filtrar los números mayor a la suma
// buscada ahorra muchísimas iteraciones.
