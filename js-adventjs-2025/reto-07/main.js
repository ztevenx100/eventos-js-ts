// Reto #7: 🎄 Montando el árbol
// ¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

// height → la altura del árbol (número de filas).
// ornament → el carácter del adorno (por ejemplo, "o" o "@").
// frequency → cada cuántas posiciones de asterisco aparece el adorno.
// El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.

// El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

// El árbol debe estar centrado y tener un tronco # de una línea al final. Cuidado con los espacios en blanco, nunca hay al final de cada línea.

// 🧩 Ejemplos
drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #

/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let result = [];
  let position = 1; // contador global de posiciones

  for (let i = 1; i <= height; i++) {
    const starsCount = 2 * i - 1;
    const spaces = ' '.repeat(height - i);

    let row = '';

    for (let j = 0; j < starsCount; j++) {
      if (position % frequency === 0) {
        row += ornament;
      } else {
        row += '*';
      }
      position++;
    }

    result.push(spaces + row);
  }

  // Tronco
  result.push(' '.repeat(height - 1) + '#');

  return result.join('\n');
}
