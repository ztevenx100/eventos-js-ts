// Reto #12: ⚔️ Batalla de elfos
// Dos elfos están jugando una batalla por turnos. Cada uno tiene un mazo de movimientos que se representan como un string donde cada carácter es una acción.
// A Ataque normal: causa 1 punto de daño si no es bloqueado
// B Bloqueo: bloquea un ataque normal (A)
// F Ataque fuerte: causa 2 puntos de daño, no puede ser bloqueado
// Ambos elfos comienzan con 3 puntos de vida. El primer elfo que llegue a 0 puntos de vida o menos pierde y la batalla termina inmediatamente (no se siguen procesando más movimientos).

// Reglas por ronda
// Si ambos usan ataque (A o F), ambos reciben daño según el tipo.
// B bloquea A, pero no bloquea F.
// Todo se resuelve simultáneamente.
// Tu tarea
// Devuelve el resultado de la batalla como un número:

// 1 → si el Elfo 1 gana
// 2 → si el Elfo 2 gana
// 0 → si empatan (ambos llegan a 0 a la vez o terminan con la misma vida)
elfBattle('A', 'B')
// Ronda 1: A vs B -> Elfo 2 bloquea
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 3 de vida
// → 0

elfBattle('F', 'B')
// Ronda 1: F vs B -> Elfo 2 recibe 2 de daño (F no se bloquea)
// Resultado: Elfo 1 = 3 de vida
//            Elfo 2 = 1 de vida
// → 1

elfBattle('AAB', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: A vs B → Elfo 2 bloquea
// R3: B vs A → Elfo 1 bloquea
// Resultado: Elfo 1 = 3, Elfo 2 = 3
// → 0

elfBattle('AFA', 'BBA')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1
// Resultado: Elfo 1 = 2, Elfo 2 = 0
// → 1

elfBattle('AFAB', 'BBAF')
// R1: A vs B → Elfo 2 bloquea
// R2: F vs B → Elfo 2 recibe 2 de daño (F no se bloquea)
// R3: A vs A → ambos -1 → Elfo 2 llega a 0 ¡Batalla termina!
// R4: no se juega, ya que Elfo 2 no tiene vida
// → 1

elfBattle('AA', 'FF')
// R1: A vs F → Elfo 1 -2, Elfo 2 -1
// R2: A vs F → Elfo 1 -2, Elfo 2 -1 → Elfo 1 llega a -1
// → 2

/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattleOld(elf1, elf2) {
  let life1 = 3;
  let life2 = 3;

  const rounds = Math.max(elf1.length, elf2.length);

  for (let i = 0; i < rounds; i++) {
    const m1 = elf1[i] || '';
    const m2 = elf2[i] || '';

    let damageTo1 = 0;
    let damageTo2 = 0;

    // Daño del Elfo 1 al Elfo 2
    if (m1 === 'F') {
      damageTo2 += 2;
    } else if (m1 === 'A' && m2 !== 'B') {
      damageTo2 += 1;
    }

    // Daño del Elfo 2 al Elfo 1
    if (m2 === 'F') {
      damageTo1 += 2;
    } else if (m2 === 'A' && m1 !== 'B') {
      damageTo1 += 1;
    }

    // Aplicar daño simultáneamente
    life1 -= damageTo1;
    life2 -= damageTo2;

    // Terminar batalla inmediatamente si alguien cae
    if (life1 <= 0 || life2 <= 0) {
      break;
    }
  }

  if (life1 <= 0 && life2 <= 0) return 0;
  if (life1 <= 0) return 2;
  if (life2 <= 0) return 1;
  if (life1 === life2) return 0;

  return life1 > life2 ? 1 : 2;
}

/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  let life1 = 3;
  let life2 = 3;

  // Tabla de resolución: [daño a elfo1, daño a elfo2]
  const combat = {
    'A:A': [1, 1],
    'A:B': [0, 0],
    'A:F': [2, 1],

    'B:A': [0, 0],
    'B:B': [0, 0],
    'B:F': [2, 0],

    'F:A': [1, 2],
    'F:B': [0, 2],
    'F:F': [2, 2],

    'A:':  [0, 1],
    'B:':  [0, 0],
    'F:':  [0, 2],
    ':A':  [1, 0],
    ':B':  [0, 0],
    ':F':  [2, 0],
    ':':   [0, 0]
  };

  const rounds = Math.max(elf1.length, elf2.length);

  for (let i = 0; i < rounds; i++) {
    const m1 = elf1[i] || '';
    const m2 = elf2[i] || '';

    const [dmg1, dmg2] = combat[`${m1}:${m2}`];

    life1 -= dmg1;
    life2 -= dmg2;

    if (life1 <= 0 || life2 <= 0) break;
  }

  if (life1 <= 0 && life2 <= 0) return 0;
  if (life1 <= 0) return 2;
  if (life2 <= 0) return 1;
  return life1 === life2 ? 0 : life1 > life2 ? 1 : 2;
}
