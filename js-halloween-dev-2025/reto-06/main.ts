/**
 * Implementa una solución eficiente (Problema de Josefo) para encontrar la posición 
 * del último sobreviviente en un círculo.
 *
 * @param {number} n - Número total de víctimas (N).
 * @param {number} k - Número a contar (K) para eliminar a la siguiente víctima.
 * @returns {number} La posición original (0 a N-1) de la última víctima que sobrevive.
 */
function surviveRoulette(n: number, k: number): number {
    // Manejar el caso trivial donde no hay víctimas o la cuenta no tiene sentido.
    if (n <= 0) {
        return -1; 
    }

    // Inicializamos la posición del sobreviviente para el caso base con 1 víctima (n=1).
    // Para n=1, la posición del sobreviviente es 0.
    let survivorPosition: number = 0; 

    // Iteramos desde i=2 hasta el número total de víctimas (n).
    // Aplicamos la relación de recurrencia: f(i, k) = (f(i-1, k) + k) mod i.
    for (let i = 2; i <= n; i++) {
        // En cada iteración 'i', calculamos dónde caerá el sobreviviente 
        // del círculo de tamaño 'i-1' en el nuevo círculo de tamaño 'i'.
        // El operador módulo '%' maneja la naturaleza circular de la eliminación.
        survivorPosition = (survivorPosition + k) % i;
    }

    // La posición final es el índice (0 a n-1) del sobreviviente en el círculo original.
    return survivorPosition;
}
