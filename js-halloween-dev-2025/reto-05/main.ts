/**
 * Calcula el número mínimo de movimientos necesarios para cambiar 
 * una cerradura de 4 ruedas de un código actual a un código objetivo.
 * * La clave es encontrar el mínimo de la distancia directa y la distancia circular (10 - distancia directa) 
 * para cada dígito.
 *
 * @param {string} current - El código actual de 4 dígitos (ej: '0022').
 * @param {string} target - El código objetivo de 4 dígitos (ej: '0044').
 * @returns {number} El número mínimo total de movimientos.
 */
function changeLock(current: string, target: string): number {
    let totalMoves: number = 0;

    // Iteramos sobre las 4 ruedas del código (índices 0 a 3).
    for (let i = 0; i < 4; i++) {
        // Convertimos los caracteres de los códigos a números.
        const c: number = parseInt(current[i], 10);
        const t: number = parseInt(target[i], 10);

        // 1. Distancia Directa (en sentido horario o antihorario, sin envolver):
        // Es la diferencia absoluta entre los dígitos.
        // Ej: 2 a 4 -> |4 - 2| = 2.
        const directDist: number = Math.abs(c - t);

        // 2. Distancia Circular (la ruta que envuelve el 0/9):
        // Dado que hay 10 dígitos (0-9), la distancia más corta alrededor del círculo es 
        // 10 menos la distancia directa.
        // Ej: 0 a 9 -> |9 - 0| = 9 (directa). Circular = 10 - 9 = 1.
        const circularDist: number = 10 - directDist;

        // 3. El mínimo de movimientos para esta rueda es el camino más corto.
        const minMovesForWheel: number = Math.min(directDist, circularDist);

        // 4. Acumulamos los movimientos totales.
        totalMoves += minMovesForWheel;
    }

    return totalMoves;
}