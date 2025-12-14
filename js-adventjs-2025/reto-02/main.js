/**
 * 🏭 RETO 2: Manufactura de juguetes
 * 
 * La fábrica de Santa ha empezado a recibir la lista de producción de juguetes.
 * Cada entrada indica qué juguete fabricar y cuántas unidades.
 * 
 * PROBLEMA:
 * Los elfos han anotado algunas cantidades inválidas que debemos ignorar.
 * 
 * ESTRUCTURA DE DATOS:
 * - toy: nombre del juguete (string)
 * - quantity: unidades a fabricar (number)
 * 
 * OBJETIVO:
 * Crear una función que procese la lista de producción y devuelva un array
 * con cada juguete repetido según su cantidad válida.
 * 
 * REGLAS:
 * ✅ Repetir cada juguete tantas veces como indique quantity
 * ✅ Mantener el orden de aparición original
 * ❌ Ignorar cantidades <= 0 o que no sean números
 */
//🧩 Ejemplos
const production1 = [
  { toy: 'car', quantity: 3 },
  { toy: 'doll', quantity: 1 },
  { toy: 'ball', quantity: 2 }
]

const result1 = manufactureGifts(production1)
console.log(result1)
// ['car', 'car', 'car', 'doll', 'ball', 'ball']

const production2 = [
  { toy: 'train', quantity: 0 }, // no se fabrica
  { toy: 'bear', quantity: -2 }, // tampoco
  { toy: 'puzzle', quantity: 1 }
]

const result2 = manufactureGifts(production2)
console.log(result2)
// ['puzzle']

const production3 = []
const result3 = manufactureGifts(production3)
console.log(result3)
// []

/**
 * Procesa la lista de producción y manufactura los juguetes válidos
 * 
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce - Lista de juguetes a producir
 * @returns {string[]} Array con juguetes manufacturados en el orden correcto
 * 
 * @example
 * const production = [{ toy: 'car', quantity: 2 }, { toy: 'doll', quantity: 1 }]
 * manufactureGifts(production) // ['car', 'car', 'doll']
 */
function manufactureGifts(giftsToProduce) {
  const result = [];

  // Iterar por cada elemento de la lista de producción
  for (const item of giftsToProduce) {
    // Validar que quantity sea un número positivo
    if (typeof item.quantity === 'number' && item.quantity > 0) {
      // Añadir el juguete tantas veces como indique quantity
      for (let i = 0; i < item.quantity; i++) {
        result.push(item.toy);
      }
    }
    // Si quantity es inválida (<=0 o no es número), se ignora este item
  }

  return result;
}