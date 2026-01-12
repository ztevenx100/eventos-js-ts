// Reto #21: 🤖 El robot de limpieza
// ¡El almacén vertical de Santa se ha modernizado! Ahora, además de apilar los regalos, hay un robot 🤖 en el almacen que recoje los regalos si hay una fila completa.
// El almacén es una matriz con # regalos y . espacios vacíos. Debes crear una función clearGifts que reciba el estado del almacén y un array con las columnas donde se dejan caer los regalos.

// Reglas de la caída:

// El regalo cae por la columna indicada desde arriba.
// Se coloca en la celda vacía (.) más baja de esa columna.
// Si la columna está llena, el regalo se ignora.
// Regla del robot de limpieza:

// Si al colocar un regalo, una fila se completa totalmente con regalos (#), esa fila desaparece.
// Todas las filas que estaban por encima de la fila eliminada bajan una posición.
// Al eliminarse una fila, aparece una nueva fila vacía (.) en la parte superior para mantener el tamaño del almacén.
clearGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['#', '.', '#']
  ],
  [1]
)
/*
1. El regalo cae en la columna 1
2. La fila 2 se convierte en [# # #].
3. La fila 2 está completa, el robot la limpia.
6. Se añade una nueva fila vacía en la posición 0.

Resultado:
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['.', '.', '.']
]
*/

clearGifts(
  [
    ['.', '.', '#'],
    ['#', '.', '#'],
    ['#', '.', '#']
  ],
  [0, 1, 2]
)

/*
1. El regalo cae en la columna 0
2. El regalo cae en la columna 1
3. La fila 2 se convierte en [# # #]
4. La fila 2 está completa, el robot la limpia

Por ahora queda así:
[
  ['.', '.', '.']
  ['#', '.', '#'],
  ['#', '.', '#'],
]

5. El regalo cae en la columna 2

Resultado:
[
  ['.', '.', '#'],
  ['#', '.', '#'],
  ['#', '.', '#']
]
*/

/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
  const rows = warehouse.length;
  const cols = warehouse[0].length;

  const isFullRow = row => row.every(cell => cell === '#');

  for (const col of drops) {
    // 1️⃣ Dejar caer el regalo
    let placedRow = -1;
    for (let r = rows - 1; r >= 0; r--) {
      if (warehouse[r][col] === '.') {
        warehouse[r][col] = '#';
        placedRow = r;
        break;
      }
    }

    // Si no se pudo colocar, continuar
    if (placedRow === -1) continue;

    // 2️⃣ Revisar filas completas
    for (let r = 0; r < rows; r++) {
      if (isFullRow(warehouse[r])) {
        warehouse.splice(r, 1); // eliminar fila
        warehouse.unshift(Array(cols).fill('.')); // añadir fila vacía arriba
        break; // solo una limpieza por caída
      }
    }
  }

  return warehouse;
}
