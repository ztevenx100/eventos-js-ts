/**
 * Cuenta cuántas veces se puede formar la palabra "sheep" (s, h, e, e, p)
 * a partir de una cadena de letras desordenadas.
 * @param {string} letters - La cadena de letras caóticas.
 * @returns {number} - El número máximo de "sheep" que se pueden formar.
 */
const countSheep = (letters) => {
  // 1. Inicializar un contador para las letras necesarias en "sheep": s, h, e, p
  const counts = {
    s: 0,
    h: 0,
    e: 0,
    p: 0,
  };

  // 2. Iterar sobre la cadena para contar las frecuencias.
  // Convertimos a minúsculas para manejar mayúsculas y minúsculas de manera uniforme.
  for (const char of letters.toLowerCase()) {
    if (counts.hasOwnProperty(char)) {
      counts[char]++;
    }
  }

  // 3. Determinar la letra limitante.
  // La palabra "sheep" requiere: 1 's', 1 'h', 2 'e's, 1 'p'.

  // Para las letras que solo requieren una ocurrencia ('s', 'h', 'p'), su límite es su cuenta.
  const limitS = counts.s;
  const limitH = counts.h;
  const limitP = counts.p;

  // Para la 'e', que requiere DOS ocurrencias, el límite es la mitad de su cuenta.
  // Math.floor asegura que solo contamos ovejas completas (enteras).
  const limitE = Math.floor(counts.e / 2);

  // 4. El número máximo de "sheep" es el mínimo de todos estos límites.
  // Si falta alguna letra (el conteo es 0), el Math.min devolverá 0 correctamente.
  const maxSheep = Math.min(limitS, limitH, limitE, limitP);

  return maxSheep;
};