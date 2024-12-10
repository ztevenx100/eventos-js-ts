/* Reto #8: 🦌 La carrera de renos */
/** 
 * ¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
 * Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.
 * Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.
 * La información que recibes:
 * indices: Un array de enteros que representan el progreso de cada reno en la pista:
 * 0: El carril está vacío.
 * Número positivo: La posición actual del reno desde el inicio de la pista.
 * Número negativo: La posición actual del reno desde el final de la pista.
 * length: La longitud de cada carril.
 * Devuelve un string que represente la pista de la carrera:
 * Cada carril tiene exactamente length posiciones llenas de nieve (~).
 * Cada reno se representa con la letra r.
 * Los carriles están numerados al final con /1, /2, etc.
 * La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.
 * Ejemplos:

drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

function drawRace(indices, length) {
  return indices.map((position, i) => {
    // Creamos una pista vacía llena de nieve (~)
    let track = Array(length).fill('~');
    
    // Calculamos la posición del reno
    let renoPos = position >= 0 ? position : length + position;

    // Colocamos al reno 'r' en su posición
    if (renoPos >= 0 && renoPos < length && position !== 0) {
      track[renoPos] = 'r';
    }

    // Construimos el carril con el desplazamiento isométrico
    return ' '.repeat(indices.length - i - 1) + track.join('') + ` /${i + 1}`;
  }).join('\n'); // Unimos todos los carriles con un salto de línea
}

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  return indices.map((position, i) => {
    if (position === 0) {
      return `${' '.repeat(indices.length - i - 1)}${'~'.repeat(length)} /${i + 1}`;
    }

    const renoPos = position >= 0 ? position : length + position;

    const track = `${'~'.repeat(renoPos)}r${'~'.repeat(length - renoPos - 1)}`;

    return `${' '.repeat(indices.length - i - 1)}${track} /${i + 1}`;
  }).join('\n');
}

// Ejemplos:
console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
  ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
/*
    ~~r~~~~~ /1
  ~~~~~~~r /2
  ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
  ~~~~~~~~r~~~ /2
~~~~~~~~~~r~ /3
*/
