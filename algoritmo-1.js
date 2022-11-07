// Enunciado
// Dada la siguiente problemática: ¿puede un número X formarse usando la suma de 2 elementos
// de un array?
// Ejemplo 1
// Input: nums = [1,4,3,9], requiredSum = 8
// Output: False
// Ejemplo 2
// Input: nums = [1,2,4,4], requiredSum = 8
// Output: True
// 1. Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse
// el programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más
// importante es realizar el desarrollo en el menor tiempo posible.

function verificaSiDosNumerosDevuelvenSumaEsperada(arrayNumeros, sumaEsperada) {
  for (let i = 0; i < arrayNumeros.length - 1; i++) {
    for (let j = i + 1; j < arrayNumeros.length; j++) {
      const numeroI = arrayNumeros[i];
      const numeroJ = arrayNumeros[j];
      const suma = numeroI + numeroJ;
      if (suma === sumaEsperada) {
        return true;
      }
    }
  }
  return false;
}

const input1 = [1, 4, 3, 9];
const requiredSum = 8;

const ejemploUno = verificaSiDosNumerosDevuelvenSumaEsperada(input1, requiredSum);
console.log("Ejercicio 1:")
console.log(ejemploUno);

const input2 = [1, 2, 4, 4];
const requiredSum2 = 8;

const ejemploDos = verificaSiDosNumerosDevuelvenSumaEsperada(input2, requiredSum2);
console.log("Ejercicio 2:")
console.log(ejemploDos);
