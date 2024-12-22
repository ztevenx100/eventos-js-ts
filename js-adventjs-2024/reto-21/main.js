/* Reto #21: 🎄 Calcula la altura del árbol de Navidad */
/** 
 * Santa Claus 🎅 está decorando un árbol de Navidad mágico 🪄, que este año tiene una estructura especial en forma de árbol binario.
 * Cada nodo del árbol representa un regalo, y Santa quiere saber la altura del árbol para colocar la estrella mágica en la punta.
 * Tu tarea es escribir una función que calcule la altura de un árbol binario. La altura de un árbol binario se define como el número máximo de niveles desde la raíz hasta una hoja. Un árbol vacío tiene una altura de 0.
*/

/**
 * Calcula la altura de un árbol binario.
 * @param {Object|null} tree - Nodo raíz del árbol binario.
 * @returns {number} - Altura del árbol.
 */
function treeHeight(tree) {
    if (!tree) {
      return 0; // Un árbol vacío tiene altura 0.
    }
  
    // Calcula la altura de los subárboles izquierdo y derecho recursivamente.
    const leftHeight = treeHeight(tree.left);
    const rightHeight = treeHeight(tree.right);
  
    // La altura del árbol es el máximo entre las alturas de los subárboles + 1.
    return Math.max(leftHeight, rightHeight) + 1;
}
