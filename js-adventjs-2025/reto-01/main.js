/**
 * 🎁 RETO 1: Filtrar regalos defectuosos
 * 
 * Santa ha recibido una lista de regalos, pero algunos están defectuosos.
 * Un regalo es defectuoso si su nombre contiene el carácter '#'.
 * 
 * OBJETIVO:
 * Escribir una función que filtre los regalos, devolviendo solo
 * aquellos que NO contengan el carácter '#' en su nombre.
 * 
 * RESTRICCIONES:
 * - Los regalos defectuosos contienen '#' en cualquier parte del nombre
 * - Devolver un nuevo array sin modificar el original
 * - Si no hay regalos válidos, devolver array vacío
 */

// 🧩 Ejemplos de uso:
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// Resultado: ['car', 'ball'] - Se filtran 'doll#arm' y '#train'

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// Resultado: [] - Todos los regalos están defectuosos

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// Resultado: [] - Array vacío


/**
 * Filtra los regalos defectuosos de una lista
 * 
 * @param {string[]} gifts - Array de nombres de regalos a filtrar
 * @returns {string[]} Nuevo array con solo los regalos válidos (sin '#')
 * 
 * @example
 * filterGifts(['car', 'doll#arm', 'ball']) // ['car', 'ball']
 * filterGifts(['#broken']) // []
 */
function filterGifts(gifts) {
  // Filtrar regalos que NO contengan el carácter '#'
  // El método includes() verifica si '#' está presente en el string
  return gifts.filter(gift => !gift.includes('#'));
}
