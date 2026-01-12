// Reto #9: 🦌 El reno robot aspirador
// Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.
// El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).

// Recibirás dos parámetros:
// board: un string que representa el tablero.
// moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).
// Reglas del movimiento:

// Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
// Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
// Si el reno no recoge nada ni se estrella → devuelve 'fail'.
// Ten en cuenta que si el reno recoge algo del suelo, ya es 'success', indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

// Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.

// Ejemplo:

const board = `
.....
.*#.*
.@...
.....
`

moveReno(board, 'D')
// ➞ 'fail' -> se mueve pero no recoge nada

moveReno(board, 'U')
// ➞ 'success' -> recoge algo (*) justo encima

moveReno(board, 'RU')
// ➞ 'crash' -> choca contra un obstáculo (#)

moveReno(board, 'RRRUU')
// ➞ 'success' -> recoge algo (*)

moveReno(board, 'DD')
// ➞ 'crash' -> se choca con la parte de abajo del tablero

moveReno(board, 'UUU')
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

moveReno(board, 'RR')
// ➞ 'fail' -> se mueve pero no recoge nada

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  // Limpiar tablero (quitar líneas vacías)
  const grid = board
    .trim()
    .split('\n')
    .map(row => row.trim());

  const rows = grid.length;
  const cols = grid[0].length;

  // Buscar posición inicial del reno
  let x = 0, y = 0;
  for (let i = 0; i < rows; i++) {
    const col = grid[i].indexOf('@');
    if (col !== -1) {
      x = i;
      y = col;
      break;
    }
  }

  let collected = false;

  // Mapa de movimientos (reduce ifs)
  const directions = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1]
  };

  for (const move of moves) {
    const [dx, dy] = directions[move];
    const nx = x + dx;
    const ny = y + dy;

    // Validar límites del tablero
    if (nx < 0 || nx >= rows || ny < 0 || ny >= cols) {
      return collected ? 'success' : 'crash';
    }

    const cell = grid[nx][ny];

    // Validar obstáculo
    if (cell === '#') {
      return collected ? 'success' : 'crash';
    }

    // Recoger objeto
    if (cell === '*') {
      collected = true;
    }

    // Actualizar posición
    x = nx;
    y = ny;
  }

  return collected ? 'success' : 'fail';
}

