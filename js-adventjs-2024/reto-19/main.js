/* Reto #19: 📦 Apila cajas mágicas para repartir regalos */
/** 
 * ¡Se acerca el día para repartir regalos! Necesitamos apilar los regalos que transportaremos en el trineo 🛷 y para eso los vamos a meter en cajas 📦.
 * Los regalos se pueden meter en 4 cajas distintas, donde cada caja soporta 1, 2, 5, 10 de peso y se representan así:
    _
1: |_|
    _____
2: |_____|
    _____
5: |     |
   |_____|
     _________
10: |         |
    |_________|
// Representación en JavaScript:
const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
 * Tu misión es que al recibir el peso de los regalos, uses las mínimas cajas posibles y que, además, las apiles de menos peso (arriba) a más peso (abajo). Siempre alineadas a la izquierda.
 * Además, ten en cuenta que al apilarlas, se reusa el borde inferior de la caja.
 * Nota: ¡Ten cuidado con los espacios en blanco! No añadas espacios en blanco a la derecha de una caja si no son necesarios.
*/

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
    const boxWeights = [10, 5, 2, 1];
    const result = [];
    const boxRepresentations = {
      1: [" _ ", "|_|"],
      2: [" ___ ", "|___|"],
      5: [" _____ ", "|     |", "|_____|"],
      10: [" _________ ", "|         |", "|_________|"]
  };
  
    // Determinar cuántas cajas usar para distribuir el peso
    for (const boxWeight of boxWeights) {
      while (weight >= boxWeight) {
        result.push(boxRepresentations[boxWeight]);
        weight -= boxWeight;
      }
    }
  
    // Construir la representación apilada
    const height = result.reduce((acc, box) => acc + box.length - 1, 1);
    const width = result.reduce((max, box) => Math.max(max, box[0].length), 0);
    const grid = Array.from({ length: height }, () => Array(width).fill(' '));
  
    let rowIndex = grid.length - 1;
    for (const box of result) {
      const boxHeight = box.length;
      for (let i = 0; i < boxHeight; i++) {
        const content = box[i];
        for (let j = 0; j < content.length; j++) {
          grid[rowIndex - (boxHeight - 1) + i][j] = content[j];
        }
      }
      rowIndex -= (boxHeight - 1);
    }
  
    return grid.map(row => row.join('')).join('\n');
}

function distributeWeight(weight) {
    if (weight == 0) return ''
  
  const boxRepresentations = {
    10: [' _________ ', '|         |', '|_________|'],
    5: [' _____ ', '|     |', '|_____|'],
    2: [' ___ ', '|___|'],
    1: [' _ ', '|_|'],
  }

  const numbers = Object.keys(boxRepresentations).map(Number)
  while (weight < numbers[numbers.length - 1]) numbers.pop()

  const number = numbers[numbers.length - 1]
  const bottom = boxRepresentations[number]
  const top = distributeWeight(weight - number).split('\n')

  if (top[0].length) {
    const toReplace = top.pop()
    bottom[0] = (toReplace + bottom[0].slice(toReplace.length)).trim()
  }

  return top.concat(bottom).filter(line=>line.length).join('\n')
}

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  const boxes = {
    1: Math.floor(((weight % 10) % 5) % 2),
    2: Math.floor(((weight % 10) % 5) / 2),
    5: Math.floor((weight % 10) / 5),
    10: Math.floor(weight / 10),
  };
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  const result = [];

  for (const [w, q] of Object.entries(boxes)) {
    if (q === 0) {
      continue;
    }
    
    const boxRepTop = boxRepresentations[w].at(0);
    const singleBoxBody = boxRepresentations[w].slice(1);
    const boxBody = new Array(q).fill(singleBoxBody).flat();
    
    if (result.length === 0) {
      result.push(boxRepTop);
    } else if (q > 0) {
      const prev = result.pop();
      const boxTop = prev + boxRepTop.substring(prev.length);
      result.push(boxTop.trim());
    }

    result.push(...boxBody);
  }

  // Code here
  return result.join("\n");
}

  /**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
  const boxes = {
    1: Math.floor(((weight % 10) % 5) % 2),
    2: Math.floor(((weight % 10) % 5) / 2),
    5: Math.floor((weight % 10) / 5),
    10: Math.floor(weight / 10),
  };
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  const result = [];

  for (const [w, q] of Object.entries(boxes)) {
    if (q === 0) {
      continue;
    }
    
    const boxRepTop = boxRepresentations[w].at(0);
    const singleBoxBody = boxRepresentations[w].slice(1);
    const boxBody = new Array(q).fill(singleBoxBody).flat();
    
    if (result.length === 0) {
      result.push(boxRepTop);
    } else if (q > 0) {
      const prev = result.pop();
      const boxTop = prev + boxRepTop.substring(prev.length);
      result.push(boxTop.trim());
    }

    result.push(...boxBody);
  }

  return result.join("\n");
}