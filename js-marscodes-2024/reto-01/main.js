function decodeMessage(mensaje) {
    // Convertir números a letras
    const numerosALetras = {
        '0': 'o',
        '1': 'i',
        '3': 'e',
        '4': 'a',
        '5': 's',
        '7': 't'
    };

    // Convertir el mensaje a un array para facilitar la manipulación
    let mensajeArray = Array.from(mensaje);

    // Primero, convertir números a letras
    for (let i = 0; i < mensajeArray.length; i++) {
        if (numerosALetras[mensajeArray[i]]) {
            mensajeArray[i] = numerosALetras[mensajeArray[i]];
        }
    }

    // Luego, evaluar los símbolos > y *
    for (let i = 0; i < mensajeArray.length; i++) {
        if (mensajeArray[i] === '>') {
            // Intercambiar la letra a la izquierda con la de la derecha
            if (i > 0 && i < mensajeArray.length - 1) {
                let temp = mensajeArray[i - 1];
                mensajeArray[i - 1] = mensajeArray[i + 1];
                mensajeArray[i + 1] = temp;
            }
            // Eliminar el símbolo >
            mensajeArray.splice(i, 1);
            i--; // Ajustar el índice después de eliminar el símbolo
        } else if (mensajeArray[i] === '*') {
            // Eliminar la letra a la derecha del *
            if (i < mensajeArray.length - 1) {
                mensajeArray.splice(i + 1, 1);
            }
            // Eliminar el símbolo *
            mensajeArray.splice(i, 1);
            i--; // Ajustar el índice después de eliminar el símbolo
        }
    }

    // Eliminar cualquier símbolo que no sea letra, número, ¿?!¡, o espacio
    const caracteresPermitidos = /[a-zA-Z0-9áéíóúÁÉÍÓÚ¿?!¡\s]/;
    mensajeArray = mensajeArray.filter(caracter => caracteresPermitidos.test(caracter));

    // Convertir el array de nuevo a un string
    return mensajeArray.join('');
}

function decodeMessage(message) {
    // Paso 1: Convertir números a letras según las reglas dadas
    const numberToLetter = {
        '0': 'o',
        '1': 'i',
        '3': 'e',
        '4': 'a',
        '5': 's',
        '7': 't'
    };

    // Reemplazar números por letras
    let decoded = message.split('').map(char => numberToLetter[char] || char).join('');

    // Paso 2: Procesar los símbolos '>' e intercambiar caracteres
    while (decoded.includes('>')) {
        decoded = decoded.replace(/(.)>(.)/, '$2$1');
    }

    // Paso 3: Eliminar el símbolo '*' y la letra a su derecha
    while (decoded.includes('*')) {
        decoded = decoded.replace(/.\*/, '');
    }

    // Paso 4: Eliminar cualquier símbolo que no sea letra, número, ¿?!¡ o espacio
    decoded = decoded.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ¿?!¡\s]/g, '');

    return decoded;
}

// Ejemplos de uso
console.log(decodeMessage("¡H0l4!")); // "¡Hola!"
console.log(decodeMessage("ab>cd")); // "acbd"
console.log(decodeMessage("he*lllo")); // "hello"
console.log(decodeMessage("-Th3 qu1ck br0wn f0x))")); // "The quick brown fox"
console.log(decodeMessage("-0>13457==")); // "ioeast"