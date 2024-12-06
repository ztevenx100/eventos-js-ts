/*Reto #4: 🎄 Decorando el árbol de Navidad*/
/**
* ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.
* La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:
* El árbol está compuesto de triángulos de caracteres especiales.
* Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
* Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
* El árbol siempre debe tener la misma longitud por cada lado.
* Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
*/
/** Ejemplos:
const tree = createXmasTree(5, '*')
console.log(tree)
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

/**
const tree2 = createXmasTree(3, '+')
console.log(tree2)
__+__
_+++_
+++++
__#__
__#__
*/

/**
const tree3 = createXmasTree(6, '@')
console.log(tree3)
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/

function createXmasTree(height, ornament) {
  if (height < 1 || height > 100 || typeof height !== 'number') {
    throw new Error('La altura debe ser un número entero positivo entre 1 y 100.');
  }

  const tree = [];

  // Generar el triángulo del árbol
  for (let i = 0; i < height; i++) {
    const spaces = '_'.repeat(height - i - 1);
    const chars = ornament.repeat(2 * i + 1);
    tree.push(`${spaces}${chars}${spaces}`);
  }

  // Generar el tronco del árbol
  const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
  tree.push(trunk, trunk);

  return tree.join('\n');
}

function createXmasTree(height, ornament) {
  if (!Number.isInteger(height) || height < 1 || height > 100) {
    throw new Error('La altura debe ser un número entero positivo entre 1 y 100.');
  }

  const tree = Array.from({ length: height }, (_, i) => {
    const spaces = '_'.repeat(height - i - 1);
    const chars = ornament.repeat(2 * i + 1);
    return `${spaces}${chars}${spaces}`;
  });

  const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
  tree.push(trunk, trunk);

  return tree.join('\n');
}

if (!Number.isInteger(height) || height < 1 || height > 100) {
  throw new Error('La altura debe ser un número entero positivo entre 1 y 100.');
}

const trunk = '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);

return [
  ...Array.from({ length: height }, (_, i) => 
    '_'.repeat(height - i - 1) + ornament.repeat(2 * i + 1) + '_'.repeat(height - i - 1)
  ),
  trunk,
  trunk
].join('\n');

  
// Ejemplo de uso
const tree = createXmasTree(5, '*');
console.log(tree);

const tree2 = createXmasTree(3, '+');
console.log(tree2);

const tree3 = createXmasTree(6, '@');
console.log(tree3);
  