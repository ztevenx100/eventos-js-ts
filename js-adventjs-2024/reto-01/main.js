/* Reto #1: ¡Primer regalo repetido! */
/**
 * En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
 * Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
 * ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
 * En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
 */

function prepareGifts(gifts) {
    return [...new Set(gifts)].sort((a,b) => a-b);
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// No hay regalos, la lista queda vacía