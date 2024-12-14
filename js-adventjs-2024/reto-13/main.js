/* Reto #13: 🤖 ¿El robot está de vuelta? */
/** 
 *
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