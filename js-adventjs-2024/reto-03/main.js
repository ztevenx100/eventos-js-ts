/* Reto #3: 🏗️ Organizando el inventario */
/**
* Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. 
* Necesitas ayudar a Santa a organizar el inventario. Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:
*  - name: el nombre del juguete (string).
*  - quantity: la cantidad disponible de ese juguete (entero).
*  - category: la categoría a la que pertenece el juguete (string).
* Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:
* Las claves del objeto serán las categorías de juguetes. Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
* Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades. Si el array está vacío, la función debe devolver un objeto vacío {}.
const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]
organizeInventory(inventory)
// Resultado esperado:
// {
//  toys: {
//    doll: 5,
//    car: 5
//  },
//  sports: {
//    ball: 2,
//    racket: 4
//  }
// }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]
organizeInventory(inventory2)
// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
*/

function organizeInventory(inventory) {
  // Crea un objeto para organizar el inventario
  const organizedInventory = {};
  // Itera sobre cada juguete en el inventario
  for (const item of inventory) {
    const { name, quantity, category } = item;
    // Asegúrate de que la categoría exista en el objeto organizado
    if (!organizedInventory[category]) {
      organizedInventory[category] = {};
    }
    // Suma la cantidad del juguete dentro de su categoría
    organizedInventory[category][name] = 
      (organizedInventory[category][name] || 0) + quantity;
  }
  return organizedInventory;
}
  
// Ejemplo de uso
const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
];
console.log(organizeInventory(inventory));

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
];
console.log(organizeInventory(inventory2));

function organizeInventory(inventory) {
  return inventory.reduce((acc, { name, quantity, category }) => {
    acc[category] = acc[category] || {};
    acc[category][name] = (acc[category][name] || 0) + quantity;
    return acc;
  }, {});
}

function organizeInventory(inventory) {
  if (!Array.isArray(inventory) || inventory.length === 0) return {};

  return inventory.reduce((acc, { name, quantity, category }) => {
    const categoryItems = acc[category] || (acc[category] = {});
    categoryItems[name] = (categoryItems[name] || 0) + quantity;
    return acc;
  }, {});
}

function organizeInventory(inventory) {
  const dic = {}

  for (const { category, name, quantity } of inventory) {
    dic[category] ??= {}
    dic[category][name] = (dic[category][name] || 0) + quantity;
  }

  return dic
}