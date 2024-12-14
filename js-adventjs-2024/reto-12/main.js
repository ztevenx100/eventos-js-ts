/* Reto #12: 💵 ¿Cuánto cuesta el árbol? */
/** 
 * Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. Cada uno viene decorado con una serie de adornos muy peculiares, y el precio del árbol se determina en función de los adornos que tiene.
 * *: Copo de nieve - Valor: 1
 * o: Bola de Navidad - Valor: 5
 * ^: Arbolito decorativo - Valor: 10
 * #: Guirnalda brillante - Valor: 50
 * @: Estrella polar - Valor: 100
 * Normalmente se sumarían todos los valores de los adornos y ya está…
 * Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.
 */

/** 
 * @param {string} ornaments 
 * @return {number | undefined} - The price of the tree, or undefined if there's an invalid ornament
 */
function calculatePrice(ornaments) {
  const values = {
    '*': 1,   // Copo de nieve
    'o': 5,   // Bola de Navidad
    '^': 10,  // Arbolito decorativo
    '#': 50,  // Guirnalda brillante
    '@': 100  // Estrella polar
  };

  // Validar si hay adornos inválidos
  if (![...ornaments].every(char => char in values)) {
    return undefined;
  }

  // Usar map para calcular las diferencias entre adornos consecutivos
  const differences = [...ornaments].map((current, index, arr) => {
    const currentValue = values[current];
    const previousValue = values[arr[index - 1]] || 0;
    return currentValue > previousValue 
      ? currentValue - 2 * previousValue 
      : currentValue;
  });

  // Usar reduce para sumar las diferencias
  return differences.reduce((total, value) => total + value, 0);
}

/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  const values = {
    '*': 1,   // Copo de nieve
    'o': 5,   // Bola de Navidad
    '^': 10,  // Arbolito decorativo
    '#': 50,  // Guirnalda brillante
    '@': 100  // Estrella polar
  };

  let total = 0;

  for (let i = 0; i < ornaments.length; i++) {
    const current = values[ornaments[i]];
    const previous = values[ornaments[i - 1]] || 0;

    if (current === undefined) return undefined; // Adorno desconocido
    total += current > previous ? current - 2 * previous : current;
  }

  return total;
}

/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
  if (!/^[*o^#@]*$/.test(ornaments)) return undefined;
  const decorations = {
    '*': 1,
    o: 5,
    '^': 10,
    '#': 50,
    '@': 100,
  };

  return ornaments
    .split('')
    .reduce(
      (acc, item, i, arr) =>
        decorations[item] < decorations[arr[i + 1]]
          ? acc - decorations[item]
          : acc + decorations[item],
      0,
    );
}

// Ejemplos de uso:
console.log(calculatePrice('***'));    // ➞ 3   (1 + 1 + 1)
console.log(calculatePrice('*o'));     // ➞ 4   (5 - 1)
console.log(calculatePrice('o*'));     // ➞ 6   (5 + 1)
console.log(calculatePrice('*o*'));    // ➞ 5   (-1 + 5 + 1)
console.log(calculatePrice('**o*'));   // ➞ 6   (1 - 1 + 5 + 1)
console.log(calculatePrice('o***'));   // ➞ 8   (5 + 3)
console.log(calculatePrice('*o@'));    // ➞ 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'));     // ➞ 49  (-1 + 50)
console.log(calculatePrice('@@@'));    // ➞ 300 (100 + 100 + 100)
console.log(calculatePrice('#@'));     // ➞ 50  (-50 + 100)
console.log(calculatePrice('#@Z'));    // ➞ undefined (Z es desconocido)
