/* Reto #20: 🎁 Encuentra los regalos faltantes y duplicados */
/**
 * Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.
 * Recibirás dos arrays:
 * received: Lista con los regalos que Santa tiene actualmente.
 * expected: Lista con los regalos que Santa debería tener.
 * Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:
 * missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
 * extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
 * Ten en cuenta que:
 * 
 * Los regalos pueden repetirse en ambas listas.
 * Las listas de regalos están desordenadas.
 * Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.
    fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
    // Devuelve:
    // {
    //   missing: { ball: 1 },
    //   extra: { car: 1 }
    // }
*/

/**
 * Corrige la lista de regalos recibidos en comparación con los esperados.
 * @param {string[]} received - Lista de regalos recibidos.
 * @param {string[]} expected - Lista de regalos esperados.
 * @returns {Object} - Objeto con regalos faltantes y sobrantes.
 */
function fixGiftList(received, expected) {
    const countItems = (items) => {
      return items.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
      }, {});
    };
  
    const receivedCounts = countItems(received);
    const expectedCounts = countItems(expected);
  
    const missing = {};
    const extra = {};
  
    // Verificar regalos que faltan o sobran
    for (const gift of new Set([...Object.keys(receivedCounts), ...Object.keys(expectedCounts)])) {
      const receivedQty = receivedCounts[gift] || 0;
      const expectedQty = expectedCounts[gift] || 0;
  
      if (receivedQty < expectedQty) {
        missing[gift] = expectedQty - receivedQty;
      } else if (receivedQty > expectedQty) {
        extra[gift] = receivedQty - expectedQty;
      }
    }
  
    return { missing, extra };
}