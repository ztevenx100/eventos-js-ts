/* Reto #2: 🖼️ Enmarcando nombres */
/**
* Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.
* Reglas:
* Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
* Cada nombre debe estar en una línea, alineado a la izquierda.
* El marco está construido con * y tiene un borde de una línea de ancho.
* La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
* Ejemplo de funcionamiento:
*/
/**
  createFrame(['midu', 'madeval', 'educalvolpz'])
  /* Resultado esperado:
  ***************
  * midu        *
  * madeval     *
  * educalvolpz *
  ***************

  createFrame(['midu'])
  /* Resultado esperado:
  ********
  * midu *
  ********

  createFrame(['a', 'bb', 'ccc'])
  /* Resultado esperado:
  *******
  * a   *
  * bb  *
  * ccc *
  *******
  createFrame(['a', 'bb', 'ccc', 'dddd'])
*/

function createFrame(names) {
  // Encuentra la longitud del nombre más largo
  const maxLength = Math.max(...names.map(name => name.length));

  // Crea la línea superior e inferior del marco
  const frameBorder = '*'.repeat(maxLength + 4);

  // Genera las líneas del marco con los nombres
  const framedNames = names.map(name => `* ${name.padEnd(maxLength)} *`);

  // Une las partes del marco
  const frame = [frameBorder, ...framedNames, frameBorder].join('\n');

  console.log(frame);
  return frame;
}

// Ejemplo de uso
createFrame(['midu', 'madeval', 'educalvolpz']);
createFrame(['midu']);
createFrame(['a', 'bb', 'ccc']);
createFrame(['a', 'bb', 'ccc', 'dddd']);
