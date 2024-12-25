/* Reto #25: 🪄 Ejecuta el lenguaje mágico */
/** 
 * ¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.
 * Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.
 * Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:
 * > Se mueve a la siguiente instrucción
 * + Incrementa en 1 el valor actual
 * - Decrementa en 1 el valor actual
 * [ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
 * {y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
 * Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.
 */

/**
 * Ejecuta el programa en el lenguaje mágico.
 * @param {string} code - Cadena que contiene las instrucciones del programa.
 * @returns {number} - El valor final tras ejecutar el programa.
 */
function execute(code) {
    let value = 0; // Valor inicial
    let pointer = 0; // Puntero para recorrer el programa

    const stack = []; // Pila para almacenar las posiciones de bucles y condicionales

    while (pointer < code.length) {
        const instruction = code[pointer];

        switch (instruction) {
            case '>': // Siguiente instrucción
                pointer++;
                break;

            case '+': // Incrementar valor
                value++;
                pointer++;
                break;

            case '-': // Decrementar valor
                value--;
                pointer++;
                break;

            case '[': // Inicio de bucle
                if (value === 0) {
                    // Saltar al final del bucle si el valor es 0
                    let depth = 1;
                    while (depth > 0) {
                        pointer++;
                        if (code[pointer] === '[') depth++;
                        else if (code[pointer] === ']') depth--;
                    }
                } else {
                    // Guardar la posición actual en la pila
                    stack.push(pointer);
                }
                pointer++;
                break;

            case ']': // Fin de bucle
                if (value !== 0) {
                    // Volver al inicio del bucle si el valor no es 0
                    pointer = stack[stack.length - 1];
                } else {
                    // Salir del bucle y eliminar la posición de la pila
                    stack.pop();
                    pointer++;
                }
                break;

            case '{': // Inicio de condicional
                if (value === 0) {
                    // Saltar al final del condicional si el valor es 0
                    let depth = 1;
                    while (depth > 0) {
                        pointer++;
                        if (code[pointer] === '{') depth++;
                        else if (code[pointer] === '}') depth--;
                    }
                }
                pointer++;
                break;

            case '}': // Fin de condicional
                pointer++;
                break;

            default: // Ignorar cualquier otra instrucción no reconocida
                pointer++;
                break;
        }
    }

    return value;
}

/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
function execute(code) {
    let value = 0; // Valor inicial
    let pointer = 0; // Puntero para recorrer el código
    const stack = [];

    function findMatchingBracket(code, pointer, openBracket, closeBracket) {
        let depth = 1;
        while (depth > 0 && pointer < code.length) {
            pointer++;
            if (code[pointer] === openBracket) depth++;
            if (code[pointer] === closeBracket) depth--;
        }
        return pointer;
    }

    const instructions = {
        '>': () => {},
        '+': () => { value++; },
        '-': () => { value--; },
        '[': () => {
            if (value === 0) {
                pointer = findMatchingBracket(code, pointer, '[', ']');
            } else {
                stack.push(pointer);
            }
        },
        ']': () => {
            if (value !== 0) {
                pointer = stack[stack.length - 1];
            } else {
                stack.pop();
            }
        },
        '{': () => {
            if (value === 0) {
                pointer = findMatchingBracket(code, pointer, '{', '}');
            }
        },
        '}': () => {}
    };

    while (pointer < code.length) {
        const instruction = code[pointer];
        if (instructions[instruction]) {
            instructions[instruction]();
        }
        pointer++;
    }

    return value;
}

function execute(code) {
    let value = 0;
    let pos = 0;
    const codes = code.split('');
    let bucleRun = 0;
  
    const exec = {
      '+': () => {
        value = value + 1;
        pos++;
      },
      '-': () => {
        value = value - 1;
        pos++;
      },
      '>': () => {
        pos++;
      },
      '[': () => {
        const end = codes.indexOf(']', pos);
        pos = end + 1;
        value = 0;
      },
      '{': () => {
        const end = codes.indexOf('}', pos);
        if (value === 0) {
          pos = end + 1;
        } else {
          pos++;
        }
      },
      '}': () => {
        pos++;
      },
    };
  
    while (pos < codes.length) {
      const char = codes[pos];
      if (exec[char]) exec[char]();
    }
    return value;
}

// Casos de prueba
console.log(execute('+++')); // 3
console.log(execute('+--')); // -1
console.log(execute('>+++[-]')); // 0
console.log(execute('>>>+{++}')); // 3
console.log(execute('+{[-]+}+')); // 2
console.log(execute('{+}{+}{+}')); // 0
console.log(execute('------[+]++')); // 2
console.log(execute('-[++{-}]+{++++}')); // 5
