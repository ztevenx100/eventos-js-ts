/* Reto #23: 🔢 Encuentra los números perdidos */
/** 
 * Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦. Sin embargo, ¡algunas listas están incompletas y faltan números!
 * Tu tarea es escribir una función que, dado un array de números, encuentre todos los números que faltan entre 1 y n (donde n es el tamaño del array o el número más alto del array).
 * Eso sí, ten en cuenta que:
 * Los números pueden aparecer más de una vez y otros pueden faltar
 * El array siempre contiene números enteros positivos
 * Siempre se empieza a contar desde el 1
*/

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    const n = Math.max(...nums);

    // Crear un conjunto con los números existentes en el array
    const existingNumbers = new Set(nums);

    // Generar los números que faltan
    const missingNumbers = [];
    for (let i = 1; i <= n; i++) {
        if (!existingNumbers.has(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    const max = Math.max(...nums);

    // Crear un conjunto con los números existentes en el array
    const existingNumbers = new Set(nums);

    // Generar el rango y filtrar los números que faltan usando map y filter
    return Array.from({ length: max }, (_, i) => i + 1)
        .filter(num => !existingNumbers.has(num));
}

/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */
function findMissingNumbers(nums) {
    const max = Math.max(...nums)
    const fullSet = new Set(Array.from({length: max}, (_, i) => i + 1))
    const numsSet = new Set(nums)
    const missing = fullSet.difference(numsSet)
    return [...missing]
}


// Ejemplos de uso:
console.log(findMissingNumbers([1, 2, 4, 6])); // [3, 5]
console.log(findMissingNumbers([4, 8, 7, 2])); // [1, 3, 5, 6]
console.log(findMissingNumbers([3, 2, 1, 1])); // []
console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])); // [4]