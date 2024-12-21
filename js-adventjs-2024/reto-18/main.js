/* Reto #18: 📇 La agenda mágica de Santa */
/** 
 * Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de los niños para entregar los regalos. El problema: la información de la agenda está mezclada y malformateada. Las líneas contienen un número de teléfono mágico, el nombre de un niño y su dirección, pero todo está rodeado de caracteres extraños.
 * Santa necesita tu ayuda para encontrar información específica de la agenda. Escribe una función que, dado el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.
 * Ten en cuenta que en la agenda:
 * Los números de teléfono están formateados como +X-YYY-YYY-YYY (donde X es uno o dos dígitos, e Y es un dígito).
 * El nombre de cada niño está siempre entre < y >
 * La idea es que escribas una funcióna que, pasándole el teléfono completo o una parte, devuelva el nombre y dirección del niño. Si no encuentra nada o hay más de un resultado, debes devolver null.
    const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
    Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
    <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`
    findInAgenda(agenda, '34-600-123-456')
    // { name: "Juan Perez", address: "Calle Gran Via 12" }
*/

/**
 * Encuentra información en la agenda según el número de teléfono
 * @param {string} agenda - Contenido de la agenda
 * @param {string} phone - Número de teléfono o parte de él
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    // Dividimos la agenda en líneas para procesarlas una por una
    const lines = agenda.split('\n');
    const results = [];

    const phoneRegex = /(\+\d{1,2}-\d{3}-\d{3}-\d{3})/; // Formato de teléfono completo
    const nameRegex = /<([^>]+)>/; // Formato del nombre entre < y >

    for (const line of lines) {
        // Buscar el número de teléfono, nombre y dirección en la línea
        const phoneMatch = line.match(phoneRegex);
        const nameMatch = line.match(nameRegex);

        if (phoneMatch && nameMatch && phoneMatch[0].includes(phone)) {
            const phone = phoneMatch[0];
            const name = nameMatch[1];

            // Extraer la dirección quitando el teléfono y el nombre de la línea
            const address = line.replace(phone, '').replace(nameMatch[0], '').trim();

            results.push({ name, address });
        }
    }

    // Validar resultados
    if (results.length === 1) {
        return results[0];
    } else {
        return null; // Ningún resultado o más de un resultado
    }
}
