/**
 * Genera una lista cronológica de todas las fechas en un año dado
 * que son Viernes 13 o 31 de Octubre.
 *
 * @param {number} year - El año a inspeccionar (ej: 2025).
 * @returns {string[]} Un array de fechas en formato 'YYYY-MM-DD', ordenadas.
 */
function myersCalendar(year: number): string[] {
  // 1. MEJORA DE VALIDACIÓN: Capturar NaN y años fuera de rango.
  if (typeof year !== 'number' || Number.isNaN(year) || year < 1000 || year > 9999) {
    return [];
  }

  const attackDates: Set<string> = new Set();
  // Al asegurarnos de que 'year' es un número válido, convertirlo a string es seguro.
  const targetYear: string = String(year);

  // El día de la semana para Viernes es 5
  const FRIDAY: number = 5;

  // --- 2. Encontrar todos los Viernes 13 ---
  for (let month = 0; month < 12; month++) {
    const date: Date = new Date(year, month, 13);

    if (date.getDay() === FRIDAY) {
      const monthStr: string = String(month + 1).padStart(2, '0');
      const dateStr: string = `${targetYear}-${monthStr}-13`;
      attackDates.add(dateStr);
    }
  }

  // --- 3. Añadir el 31 de Octubre ---
  // Ahora es seguro añadir esta fecha porque 'targetYear' es un año válido.
  const halloweenDate: string = `${targetYear}-10-31`;
  attackDates.add(halloweenDate);

  // --- 4. Ordenar y Devolver las Fechas ---
  const sortedDates: string[] = Array.from(attackDates).sort();

  return sortedDates;
}