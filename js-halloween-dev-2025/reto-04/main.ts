/**
 * Implementa el algoritmo de Búsqueda Binaria de forma iterativa 
 * para encontrar un número de teléfono objetivo en un array ordenado.
 * * @param {number[]} phones - Array de números de teléfono ORDENADOS de menor a mayor.
 * @param {number} target - El número de teléfono objetivo a encontrar.
 * @returns {number} El índice del número objetivo, o -1 si no se encuentra.
 */
function searchPhone(phones: number[], target: number): number {
    // Definimos los límites del rango de búsqueda.
    let left: number = 0;
    let right: number = phones.length - 1;

    // Repetimos el proceso mientras el límite izquierdo no exceda al derecho.
    while (left <= right) {
        // 1. Calcular el índice del elemento central (`mid`).
        // Usamos la fórmula `left + Math.floor((right - left) / 2)` para 
        // prevenir desbordamiento de enteros y asegurar un índice entero.
        const mid: number = left + Math.floor((right - left) / 2);

        // 2. Comprobar si hemos encontrado el objetivo.
        if (phones[mid] === target) {
            return mid; // ¡Encontrado! Devolvemos el índice.
        } 
        
        // 3. Ajustar los límites del rango de búsqueda.
        
        // Si el objetivo es mayor que el valor central, buscamos en la mitad DERECHA.
        else if (phones[mid] < target) {
            left = mid + 1; // Descartamos la mitad izquierda (incluido 'mid').
        } 
        
        // Si el objetivo es menor que el valor central, buscamos en la mitad IZQUIERDA.
        else { // phones[mid] > target
            right = mid - 1; // Descartamos la mitad derecha (incluido 'mid').
        }
    }

    // Si el ciclo termina, significa que el número no está en la lista.
    return -1;
}