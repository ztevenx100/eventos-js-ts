/**
 * Redistribuye la energía entre los componentes del traje espacial.
 *
 * @param {number[]} energyLevels - Un array de números enteros que representan los niveles de energía de cada componente.
 * @returns {Object} Un objeto con dos propiedades:
 *   - balanced: Un array donde cada elemento tiene el nivel objetivo de energía después de la redistribución.
 *   - leftover: La cantidad de energía sobrante después de equilibrar los componentes.
 */
function balanceEnergy(energy) {
    // Calcula la suma total de energía
    const totalEnergy = energy.reduce((sum, level) => sum + level, 0);

    // Calcula el número de componentes
    const numComponents = energy.length;

    // Determina el nivel objetivo (piso del promedio)
    const targetLevel = Math.floor(totalEnergy / numComponents);

    // Calcula la energía total necesaria para igualar todos los componentes al nivel objetivo
    const requiredEnergy = targetLevel * numComponents;

    // Calcula la energía sobrante
    const leftover = totalEnergy - requiredEnergy;

    // Crea un array con el nivel objetivo para cada componente
    const balanced = Array(numComponents).fill(targetLevel);

    // Retorna el resultado como un objeto
    return { balanced: balanced, leftover: leftover };
}