/* Reto #24: 🪞 Verifica si los árboles son espejos mágicos */
/** 
 * En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos 🪞.
 * Dos árboles binarios son espejos si:
 * Las raíces de ambos árboles tienen el mismo valor.
 * Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.
 * Y el árbol se representa con tres propiedades value, left y right. Dentro de estas dos últimas va mostrando el resto de ramas (si es que tiene):
 * Santa necesita tu ayuda para verificar si los árboles están sincronizados para que la estrella pueda seguir brillando. Debes devolver un array donde la primera posición indica si los árboles están sincronizados y la segunda posición devuelve el valor de la raíz del primer árbol.
 */

/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
    function areMirrors(node1, node2) {
          // Si ambos nodos son nulos, son espejos.
          if (!node1 && !node2) return true;
          // Si uno de los nodos es nulo o los valores no coinciden, no son espejos.
          if (!node1 || !node2 || node1.value !== node2.value) return false;
          // Verificar recursivamente si el subárbol izquierdo de uno es espejo del derecho del otro.
          return (
              areMirrors(node1.left, node2.right) &&
              areMirrors(node1.right, node2.left)
          );
      }
  
      // Determinar si los árboles son espejos.
      const synchronized = areMirrors(tree1, tree2);
      // Devolver si están sincronizados y el valor de la raíz del primer árbol.
      return [synchronized, tree1?.value || null];
}
