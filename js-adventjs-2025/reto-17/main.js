// En el Polo Norte han montado un panel de luces navideñas 🎄✨ para decorar el taller. Cada luz puede estar encendida con un color o apagada.

// El panel se representa como una matriz donde cada celda puede ser:
// '.' → luz apagada
// 'R' → luz roja
// 'G' → luz verde
// Los elfos quieren saber si en el panel existe una línea de 4 luces del mismo color encendidas y alineadas (solo horizontal ↔ o vertical ↕). Las luces apagadas ('.') no cuentan.

hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
])
// true → hay 4 luces rojas en horizontal

hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
])
// true → hay 4 luces verdes en vertical

hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
])
// false → no hay 4 luces del mismo color seguidas
// Nota: El tablero puede ser de cualquier tamaño. No hay diagonales.

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  const rows = board.length;
  if (rows === 0) return false;

  const cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const current = board[row][col];
      if (current === '.') continue;

      // Horizontal →
      if (col + 3 < cols) {
        let count = 0;
        for (let i = 0; i < 4; i++) {
          if (board[row][col + i] === current) count++;
        }
        if (count === 4) return true;
      }

      // Vertical ↓
      if (row + 3 < rows) {
        let count = 0;
        for (let i = 0; i < 4; i++) {
          if (board[row + i][col] === current) count++;
        }
        if (count === 4) return true;
      }
    }
  }

  return false;
}
