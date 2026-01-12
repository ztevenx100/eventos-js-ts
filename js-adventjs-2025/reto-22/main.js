// Reto #22: 🎄 El laberinto del trineo
// Papá Noel 🎅 está probando un nuevo simulador de trineo dentro de un laberinto en el taller. El laberinto se representa como una matriz de caracteres.

// Tu tarea es implementar una función que determine si es posible llegar a la salida (E) partiendo desde la posición inicial (S).

// Reglas del laberinto:

// S: Posición inicial de Santa.
// E: Salida del laberinto.
// .: Camino libre.
// #: Pared (bloquea el paso).
// Movimientos permitidos: arriba, abajo, izquierda y derecha.
// Solo hay una S y una sola E.
canEscape([
  ['S', '.', '#', '.'],
  ['#', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['#', '#', '#', 'E']
])
// → true

canEscape([
  ['S', '#', '#'],
  ['.', '#', '.'],
  ['.', '#', 'E']
])
// → false

canEscape([['S', 'E']])
// → true

canEscape([
  ['S', '.', '.', '.', '.'],
  ['#', '#', '#', '#', '.'],
  ['.', '.', '.', '.', '.'],
  ['.', '#', '#', '#', '#'],
  ['.', '.', '.', '.', 'E']
])
// → true

canEscape([
  ['S', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#'],
  ['.', '.', 'E']
])
// → false
// A tener en cuenta:

// No necesitas devolver el camino, solo si es posible llegar.
// Santa no puede salir de los límites del laberinto.
// Consejo: Este problema se puede resolver de varias formas, pero algoritmos de búsqueda como BFS (búsqueda en anchura) o DFS (búsqueda en profundidad) son ideales para este tipo de retos.

/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
  const rows = maze.length;
  const cols = maze[0].length;

  let start = null;

  // 1️⃣ Encontrar la posición inicial
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (maze[r][c] === 'S') {
        start = [r, c];
        break;
      }
    }
    if (start) break;
  }

  const queue = [start];
  const visited = new Set([start.join(',')]);

  const directions = [
    [1, 0],  // abajo
    [-1, 0], // arriba
    [0, 1],  // derecha
    [0, -1]  // izquierda
  ];

  // 2️⃣ BFS
  while (queue.length) {
    const [r, c] = queue.shift();

    if (maze[r][c] === 'E') return true;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      const key = `${nr},${nc}`;

      if (
        nr >= 0 && nr < rows &&
        nc >= 0 && nc < cols &&
        maze[nr][nc] !== '#' &&
        !visited.has(key)
      ) {
        visited.add(key);
        queue.push([nr, nc]);
      }
    }
  }

  return false;
}
