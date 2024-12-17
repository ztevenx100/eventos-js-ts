/* Reto #13: 🤖 ¿El robot está de vuelta? */
/** 
 * Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).
 * Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.
 * Las órdenes básicas del robot son:
 * L: Mover hacia la izquierda
 * R: Mover hacia la derecha
 * U: Mover hacia arriba
 * D: Mover hacia abajo
 * Pero también tiene ciertos modificadores para los movimientos:
 * *: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
 * !: El siguiente movimiento se invierte (ej: R!L se considera como RR)
 * ?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
 * Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.
 * Debes devolver:
 * true: si el robot vuelve a estar justo donde empezó
 * [x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo
 */

function isRobotBack(moves) {
    const modifiers = /[*!?]/g;
    const movesList = moves.split('');
    const movesMap = {
      U: [0, 1],
      D: [0, -1],
      L: [-1, 0],
      R: [1, 0],
    };
  
    const invertedMoves = {
      '!U': 'D',
      '!D': 'U',
      '!L': 'R',
      '!R': 'L',
    };
  
    let lastModifier = '';
    let lastCurrent = {};
    const [x, y] = movesList.reduce(
      (acc, curr) => {
        if (curr.match(modifiers)) {
          lastModifier = curr;
          return acc;
        }
        if (lastModifier === '?' && lastCurrent[curr]) {
          lastModifier = '';
          return acc;
        }
  
        curr = lastModifier === '!' ? invertedMoves[lastModifier + curr] : curr;
        const [newX, newY] = movesMap[curr] ?? [0, 0];
        const multiplier = lastModifier === '*' ? 2 : 1;
        const [x, y] = acc;
        lastCurrent[curr] ??= 1;
        lastModifier = '';
        return (acc = [x + newX * multiplier, y + newY * multiplier]);
      },
      [0, 0],
    );
  
    return x === 0 && y === 0 ? true : [x, y];
  }