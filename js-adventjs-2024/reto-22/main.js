/* Reto #22: 🎁 Genera combinaciones de regalos */
/** 
 * Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.
 * Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.
 * Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.
*/

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    const result = [];

    function backtrack(index, current) {
        if (current.length > 0) {
            result.push([...current]);
        }
        for (let i = index; i < gifts.length; i++) {
            current.push(gifts[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(0, []);

    // Ordenar las combinaciones por su longitud
    result.sort((a, b) => a.length - b.length);
    
    return result;
}

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    const result = [];

    function backtrack(index, current) {
        if (current.length > 0) {
            result.push([...current]);
        }
        gifts.slice(index).reduce((_, gift, i) => {
            current.push(gift);
            backtrack(index + i + 1, current);
            current.pop();
        }, null);
    }

    backtrack(0, []);

    result.sort((a, b) => a.length - b.length);

    return result;
}

function generateGiftSets(gifts) {
    const result = [];

    function backtrack(index=0, current=[]) {
        if (current.length > 0) {
            result.push([...current]);
        }
        gifts.slice(index).reduce((_, gift, i) => {
            current.push(gift);
            backtrack(index + i + 1, current);
            current.pop();
        }, null);
    }

    backtrack();
    return result.sort((a, b) => a.length - b.length);
}

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    return Array.from({ length: 2 ** gifts.length - 1 },
      (_, j) => (j + 1).toString(2).padStart(gifts.length, 0)).reverse()
      .sort((a, b) => a.replaceAll(0,'').length - b.replaceAll(0,'').length)
      .map(mask => gifts.filter((_,i) => +mask[i]))
}

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    const inds = {}
    const q = gifts.map((x, i) => {
      inds[x] = i
      return [x]
    })
    const l = [...q]
  
    while (q.length > 0) {
      const g = [...q.shift()]
  
      const i = inds[g?.at(-1)]
  
      const nG = gifts.slice(i + 1)
      for (const pg of nG) {
        l.push([...g, pg])
        q.push([...g, pg])
      }
    }
  
    return l
}

// Prueba de la función
console.log(generateGiftSets(['car', 'doll', 'puzzle']));

