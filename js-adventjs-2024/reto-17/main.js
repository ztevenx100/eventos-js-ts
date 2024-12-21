/* Reto #17: 💣 Busca las bombas del Grinch */
/** 
 * El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).
 * Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.
detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]
 */

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Matriz de resultado
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Coordenadas relativas de las posiciones adyacentes (incluyendo diagonales)
    const directions = [
        [-1, -1], 
        [-1, 0], 
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0], 
        [1, 1],
    ];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let bombCount = 0;

            // Recorre las posiciones adyacentes
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                // Verifica si la posición adyacente está dentro de los límites y si es una bomba
                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol]
                ) {
                    bombCount++;
                }
            }

            // Actualiza la celda en el resultado
            result[row][col] = bombCount;
        }
    }

    return result;
}

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */
function detectBombs(grid) {

    const positions = [
        [0,-1], // left position
        [0,+1], // right position
        [-1,0], // top position
        [+1,0], // bottom position
        [-1,-1], // up left diagonal position
        [-1,+1], // up right diagonal position
        [+1,-1], // down left diagonal position
        [+1,+1], // down right diagonal position
    ]

    const isValidArray = (parentIndex,childIndex) =>{
        return grid[parentIndex]?.[childIndex] !== undefined;
    }

    return grid.map((row,rowIndex) => {  
        return row.map((cell, cellIndex) => {

            let counter = 0
            positions.forEach(pos => {
                const newParent = rowIndex + pos[0]
                const newChild = cellIndex + pos[1]
                if(isValidArray(newParent,newChild)){
                    const cellFound = grid[newParent][newChild]
                    if(cellFound === true) counter++
                }
            })

            return counter
        })
    })
} 