/**
 * Fireworks burst puntual — boilerplate del skill celebration-effects.
 *
 * Requiere: npm install @tsparticles/fireworks
 *
 * Uso (dentro de un client component, ej. al revelar el ganador del RAFFLE):
 *   fireworksBurst({ colors: [col.accent, col.title], duration: 4000 });
 *
 * Mejor lectura visual en templates de paleta oscura (Wedding T2/T4,
 * Quinceañera "Noche de Gala"). En templates claros preferir confettiBurst.
 */

import { fireworks } from '@tsparticles/fireworks';

interface FireworksBurstOptions {
  colors: string[];
  /** Duración total del efecto en ms antes de detenerse solo. Default 4000. */
  duration?: number;
}

export async function fireworksBurst({ colors, duration = 4000 }: FireworksBurstOptions): Promise<void> {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const container = await fireworks({
    fullScreen: { enable: true, zIndex: 60 },
    particles: { color: { value: colors } },
  });

  if (!container) return;

  setTimeout(() => {
    container.destroy();
  }, duration);
}
