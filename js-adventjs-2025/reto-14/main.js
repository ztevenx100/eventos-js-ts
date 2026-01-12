// Reto #14: 🗃️ Encuentra el camino al regalo
// En el Polo Norte, los elfos han simplificado su sistema de almacenamiento para evitar errores.
// Ahora guardan los regalos en un objeto mágico con profundidad limitada, donde cada valor aparece una sola vez.
// Santa necesita una forma rápida de saber qué camino de claves debe seguir para encontrar un regalo concreto.
// Tu tarea es escribir una función que, dado un objeto y un valor, devuelva el array de claves que hay que recorrer para llegar a ese valor.

// Reglas:
// El objeto tiene como máximo 3 niveles de profundidad.
// El valor a buscar aparece como mucho una vez.
// El objeto solo contiene otros objetos y valores primitivos (strings, numbers, booleans).
// Si el valor no existe, devuelve un array vacío.
// Ejemplos:

const workshop = {
  storage: {
    shelf: {
      box1: 'train',
      box2: 'switch'
    },
    box: 'car'
  },
  gift: 'doll'
}

findGiftPath(workshop, 'train')
// ➜ ['storage', 'shelf', 'box1']

findGiftPath(workshop, 'switch')
// ➜ ['storage', 'shelf', 'box2']

findGiftPath(workshop, 'car')
// ➜ ['storage', 'box']

findGiftPath(workshop, 'doll')
// ➜ ['gift']

findGiftPath(workshop, 'plane')
// ➜ []

/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
  function search(current, path) {
    for (const key in current) {
      const value = current[key];

      if (value === gift) {
        return [...path, key];
      }

      if (typeof value === 'object' && value !== null) {
        const result = search(value, [...path, key]);
        if (result.length) return result;
      }
    }
    return [];
  }

  return search(workshop, []);
}
