/* Reto #9: 🚂 El tren mágico */
/** 
 * Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.
 * El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:
 * Recibirás dos parámetros board y mov.
 * board es un array de strings que representa el tablero:
 * @ es la locomotora del tren.
 * o son los vagones del tren.
 * * es una fruta mágica.
 * · son espacios vacíos.
 * mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:
 * 'L': izquierda
 * 'R': derecha
 * 'U': arriba
 * 'D': abajo.
 * Con esta información, debes devolver una cadena de texto:
 * 'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
 * 'eat': Si el tren recoge una fruta mágica (*).
 * 'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
Ejemplo:
const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica
console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo
console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

*/

/**
 * @param {string[]} board - The board represented as an array of strings
 * @param {string} mov - The next movement direction ('L', 'R', 'U', 'D')
 * @returns {string} The result of the move ('crash', 'eat', or 'none')
 */
function moveTrain(board, mov) {
  // Encuentra la posición de la cabeza del tren (la locomotora '@')
  const rows = board.length;
  const cols = board[0].length;
  let headRow, headCol;

  for (let i = 0; i < rows; i++) {
    const colIndex = board[i].indexOf('@');
    if (colIndex !== -1) {
      headRow = i;
      headCol = colIndex;
      break;
    }
  }

  // Determina la nueva posición según el movimiento
  let newRow = headRow;
  let newCol = headCol;

  switch (mov) {
    case 'L': newCol--; break;
    case 'R': newCol++; break;
    case 'U': newRow--; break;
    case 'D': newRow++; break;
  }

  // Verifica si el movimiento está fuera del tablero
  if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
    return 'crash';
  }

  // Verifica el contenido de la nueva posición
  const nextCell = board[newRow][newCol];

  if (nextCell === 'o') {
    return 'crash'; // El tren choca consigo mismo
  } else if (nextCell === '*') {
    return 'eat'; // El tren come una fruta mágica
  } else if (nextCell === '·') {
    return 'none'; // El tren avanza sin incidentes
  }

  return 'crash'; // En caso de cualquier otra condición inesperada
}

/**
 * @param {string[]} board - The board represented as an array of strings
 * @param {string} mov - The next movement direction ('L', 'R', 'U', 'D')
 * @returns {string} The result of the move ('crash', 'eat', or 'none')
 */
function moveTrain(board, mov) {
  const rows = board.length;
  const cols = board[0].length;

  // Encuentra la posición de la locomotora '@'
  let headRow = 0, headCol = 0;
  board.some((row, rowIndex) => {
    const colIndex = row.indexOf('@');
    if (colIndex !== -1) {
      headRow = rowIndex;
      headCol = colIndex;
      return true; // Salimos del bucle una vez encontrada
    }
    return false;
  });

  

  // Calcula la nueva posición
  const movements = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };
  const [dRow, dCol] = movements[mov];
  const newRow = headRow + dRow;
  const newCol = headCol + dCol;

  // Verifica si la nueva posición está fuera del tablero
  if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
    return 'crash';
  }

  // Verifica el contenido de la nueva posición
  const nextCell = board[newRow][newCol];
  if (nextCell === 'o') return 'crash';
  if (nextCell === '*') return 'eat';
  return 'none';
}

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
  let c=board.findIndex(b => b.includes("@")), 
    i=board[c].indexOf("@"),
    m={U:-1,D:1,L:-1,R:1},
    a=board[c+m[mov]]?.[i],
    b=board[c]?.[i+m[mov]],
    h={U:a,D:a,L:b,R:b},
    s={o:'crash','*':'eat','·':'none'}
    return !h[mov] ? 'crash' : s[h[mov]]
}


const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
];

console.log(moveTrain(board, 'U')); // ➞ 'eat'
console.log(moveTrain(board, 'D')); // ➞ 'crash'
console.log(moveTrain(board, 'L')); // ➞ 'crash'