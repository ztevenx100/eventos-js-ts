// Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.
// Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

// La tabla dibujada debe tener:
// Cabecera con letras de columna (A, B, C…).
// El contenido de la tabla son los valores de los objetos.
// Los valores deben estar alineados a la izquierda.
// Los campos dejan siempre un espacio a la izquierda.
// Los campos dejan a la derecha el espacio necesario para alinear la caja.
// La función recibe un segundo parámetro sortBy que indica el nombre del campo por el que se deben ordenar las filas. El orden será alfabético ascendente si los valores son strings y numérico ascendente si son números.

// Mira el ejemplo para ver cómo debes dibujar la tabla:

drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
)
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
)
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+


/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
  const columns = Object.keys(data[0]);

  // Ordenar datos
  data.sort((a, b) => {
    if (typeof a[sortBy] === 'number') {
      return a[sortBy] - b[sortBy];
    }
    return a[sortBy].localeCompare(b[sortBy]);
  });

  // Calcular ancho de columnas
  const widths = columns.map(col =>
    Math.max(...data.map(row => String(row[col]).length))
  );

  // Línea horizontal
  const horizontal =
    '+' + widths.map(w => '-'.repeat(w + 2)).join('+') + '+';

  // Cabecera
  const header =
    '| ' +
    columns
      .map((_, i) =>
        String.fromCharCode(65 + i).padEnd(widths[i], ' ')
      )
      .join(' | ') +
    ' |';

  // Filas
  const rows = data.map(row =>
    '| ' +
    columns
      .map((col, i) =>
        String(row[col]).padEnd(widths[i], ' ')
      )
      .join(' | ') +
    ' |'
  );

  // Resultado final
  return [
    horizontal,
    header,
    horizontal,
    ...rows,
    horizontal
  ].join('\n');
}

