/**
 * Traduce un mensaje poseído invirtiendo cada palabra,
 * pero manteniendo el orden de las palabras y los espacios.
 * @param {string} message - El mensaje poseído a traducir.
 * @returns {string} - El mensaje traducido.
 */
const translatePossessed = (message) => {
  // 1. Manejar el caso de cadena vacía o solo espacios en blanco.
  //    'trim()' elimina los espacios en blanco de ambos extremos. Si el resultado es una
  //    cadena vacía, devolvemos una cadena vacía inmediatamente.
  if (message.trim() === '') {
    return '';
  }

  // 2. Dividir la cadena en un array de "palabras" usando el espacio como delimitador.
  //    Esto preserva los múltiples espacios entre palabras como elementos vacíos ('').
  const words = message.split(' ');

  // 3. Invertir cada "palabra" en el array.
  const translatedWords = words.map(word => {
    // Si el elemento es una cadena vacía (lo que ocurre con múltiples espacios),
    // se devuelve tal cual para mantener la estructura de los espacios.
    if (word === '') {
      return '';
    }

    // Invertir la palabra:
    // a) split('') -> convierte la palabra en un array de caracteres.
    // b) reverse() -> invierte el orden del array de caracteres.
    // c) join('') -> une los caracteres invertidos de nuevo en una cadena.
    return word.split('').reverse().join('');
  });

  // 4. Unir el array de palabras traducidas de nuevo en una cadena,
  //    usando un espacio como separador, lo que reconstruye el mensaje original
  //    incluyendo los múltiples espacios o los espacios iniciales/finales.
  return translatedWords.join(' ');
};