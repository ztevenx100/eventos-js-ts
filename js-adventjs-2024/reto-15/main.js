/* Reto #15: ✏️ Dibujando tablas */
/** 
 * Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.
 * Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.
 * La tabla dibujada debe representar los datos del objeto de la siguiente manera:
 * Tiene una cabecera con el nombre de la columna.
 * El nombre de la columna pone la primera letra en mayúscula.
 * Cada fila debe contener los valores de los objetos en el orden correspondiente.
 * Cada valor debe estar alineado a la izquierda.
 * Los campos dejan siempre un espacio a la izquierda.
 * Los campos dejan a la derecha el espacio necesario para alinear la caja.
 * Mira el ejemplo para ver cómo debes dibujar la tabla:
    drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' }
    ])
    drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 }
    ])
 */

/**
 * Genera una tabla de texto a partir de un array de objetos.
 * @param {Array<Object>} data - Array de objetos con los datos.
 * @returns {string} - Tabla formateada como texto.
 */
function drawTable(data) {
    // Obtener las claves de las columnas
    const headers = Object.keys(data[0]);
  
    // Capitalizar los headers
    const capitalizedHeaders = headers.map(
        (header) => header.charAt(0).toUpperCase() + header.slice(1)
    );
  
    // Calcular los anchos máximos de cada columna
    const columnWidths = headers.map((key, index) => {
        const maxDataWidth = Math.max(...data.map((row) => String(row[key]).length));
        return Math.max(maxDataWidth, capitalizedHeaders[index].length);
    });
  
    // Función para generar una fila
    const generateRow = (values) =>
        `| ${values
        .map((value, index) =>
            String(value).padEnd(columnWidths[index], ' ')
        )
        .join(' | ')} |`;
  
    // Línea de separación
    const separatorLine =
        `+` +
        columnWidths.map((width) => '-'.repeat(width + 2)).join('+') +
        `+`;
  
    // Generar la tabla
    const table = [
        separatorLine,
        generateRow(capitalizedHeaders),
        separatorLine,
        ...data.map((row) =>
        generateRow(headers.map((key) => row[key]))
        ),
        separatorLine,
    ];
  
    // Unir todo en una sola cadena
    return table.join('\n');
}

function drawTable(data) {
    // Obtener las claves de las columnas
    const headers = Object.keys(data[0]);

    // Capitalizar los encabezados
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const capitalizedHeaders = headers.map(capitalize);

    // Calcular el ancho máximo de cada columna
    const columnWidths = new Array(headers.length).fill(0);
    for (const row of data) {
        headers.forEach((key, index) => {
            const valueLength = String(row[key]).length;
            columnWidths[index] = Math.max(columnWidths[index], valueLength);
        });
    }
    // Asegurar que las columnas tengan espacio suficiente para los encabezados
    capitalizedHeaders.forEach((header, index) => {
        columnWidths[index] = Math.max(columnWidths[index], header.length);
    });

    // Generar una fila formateada
    const generateRow = (values) =>
        `| ${values
            .map((value, index) => String(value).padEnd(columnWidths[index]))
            .join(' | ')} |`;

    // Línea separadora
    const separatorLine =
        `+${columnWidths.map((width) => '-'.repeat(width + 2)).join('+')}+`;

    // Generar la tabla
    const rows = [
        separatorLine,
        generateRow(capitalizedHeaders),
        separatorLine,
        ...data.map((row) => generateRow(headers.map((key) => row[key]))),
        separatorLine,
    ];

    // Unir las filas en una cadena
    return rows.join('\n');
}

/**
 * @param {Array<Object>} data
 * @returns {string}
 */
function drawTable(data) {
    const keys = Object.keys(data[0])
    const headers = keys.map((key) => key.charAt(0).toUpperCase() + key.slice(1))
  
    const lengths = {}
    for (let key of keys) {
        lengths[key] = key.length
        for (let row of data) {
            const length = `${row[key]}`.length
            if (length > lengths[key]) {
                lengths[key] = length
            }
        }
    }
  
    const separator =
        '+-' + keys.map((key) => '-'.repeat(lengths[key])).join('-+-') + '-+'
    const headerRow =
        '| ' +
        keys.map((key, i) => headers[i].padEnd(lengths[key])).join(' | ') +
        ' |'
  
    const rows = []
    for (let row of data) {
        const rowContent =
        '| ' +
        keys.map((key) => String(row[key]).padEnd(lengths[key])).join(' | ') +
        ' |'
        rows.push(rowContent)
    }
  
    const table = [separator, headerRow, separator, ...rows, separator]
    return table.join('\n')
}


// Ejemplo 1
console.log(
    drawTable([
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' },
        { name: 'Charlie', city: 'New York' },
    ])
);

// Ejemplo 2
console.log(
    drawTable([
        { gift: 'Doll', quantity: 10 },
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 },
    ])
);
