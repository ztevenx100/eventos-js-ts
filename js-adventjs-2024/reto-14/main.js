/* Reto #14: 🤖 ¿El robot está de vuelta? */
/** 
 * Los renos necesitan moverse para ocupar los establos, pero no puede haber más de un reno por establo. Además, para que los renos estén cómodos, debemos minimizar la distancia total que recorren para acomodarse.
 * Tenemos dos parámetros:
 * reindeer: Un array de enteros que representan las posiciones de los renos.
 * stables: Un array de enteros que representan las posiciones de los establos.
 * Hay que mover cada reno, desde su posición actual, hasta un establo. Pero hay que tener en cuenta que sólo puede haber un reno por establo.
 * Tu tarea es calcular el mínimo número de movimientos necesarios para que todos los renos acaben en un establo.
 * Nota: Ten en cuenta que el array de establos siempre tendrá el mismo tamaño que el array de renos y que siempre los establos serán únicos.
 */

/**
 * Calcula el mínimo número de movimientos necesarios para que los renos ocupen los establos.
 * @param {number[]} reindeer - Posiciones de los renos.
 * @param {number[]} stables - Posiciones de los establos.
 * @returns {number} - Mínimo número de movimientos.
 */
function minMovesToStables(reindeer, stables) {
    reindeer.sort((a, b) => a - b);
    stables.sort((a, b) => a - b);
    
    let totalMoves = 0;
    for (let i = 0; i < reindeer.length; i++) {
        totalMoves += Math.abs(reindeer[i] - stables[i]);
    }
    
    return totalMoves;
}