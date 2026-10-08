/**
 * Confetti burst puntual — boilerplate del skill celebration-effects.
 *
 * Requiere: npm install @tsparticles/confetti
 *
 * Uso (dentro de un client component, ej. handler de éxito del RSVP):
 *   confettiBurst({ colors: [col.title, col.ornament, col.meta] });
 *
 * No requiere <canvas> persistente ni motor engine — se limpia solo
 * al terminar la animación.
 */

import { confetti } from '@tsparticles/confetti';

interface ConfettiBurstOptions {
  colors: string[];
  /** Cantidad de partículas del burst. Default 150. */
  count?: number;
  /** Spread en grados del cono de disparo. Default 70. */
  spread?: number;
  /** Origen vertical (0 = arriba, 1 = abajo). Default 0.6. */
  originY?: number;
}

export function confettiBurst({
  colors,
  count = 150,
  spread = 70,
  originY = 0.6,
}: ConfettiBurstOptions): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  confetti({
    particleCount: count,
    spread,
    origin: { y: originY },
    colors,
  });
}
