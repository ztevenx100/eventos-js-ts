// Reto #8: 🎁 Encuentra el juguete único
// Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.
// Escribe una función que reciba un string y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.
// Si no hay ninguna, devuelve una cadena vacía ("").

// Ejemplos:

findUniqueToy('Gift') // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

findUniqueToy('sS') // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

findUniqueToy('reindeeR') // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
findUniqueToy('AaBbCc') // ''
findUniqueToy('abcDEF') // 'a'
findUniqueToy('aAaAaAF') // 'F'
findUniqueToy('sTreSS') // 'T'
findUniqueToy('z') // 'z'

/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  const counts = {};

  // 1️⃣ Contar ocurrencias ignorando mayúsculas
  for (const char of toy) {
    const lower = char.toLowerCase();
    counts[lower] = (counts[lower] || 0) + 1;
  }

  // 2️⃣ Encontrar la primera letra no repetida
  for (const char of toy) {
    if (counts[char.toLowerCase()] === 1) {
      return char;
    }
  }

  return '';
}