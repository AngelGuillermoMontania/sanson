'use client';

/**
 * Fondo ambiental de partículas/brillos — componente compartido (skill celebration-effects).
 *
 * Colores siempre recibidos por prop, nunca hardcodeados: cada template pasa
 * su propia paleta `col` para que el efecto respete su identidad visual.
 *
 * Uso: <ParticlesBackground colors={[col.ornament, col.title]} />
 * Colocar dentro de un contenedor con position: relative; el contenido debe
 * llevar z-10 para quedar por encima (este componente ya se renderiza en z-0).
 *
 * Nota API: @tsparticles/react v4 reemplazó `initParticlesEngine` por el patrón
 * `<ParticlesProvider init={...}>` — el motor se registra una sola vez por
 * `init` (debe ser una referencia estable, por eso vive fuera del componente)
 * y `<Particles>` no renderiza hasta que el engine terminó de cargar.
 */

import { useEffect, useMemo, useState } from 'react';
import { Particles, ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine, ISourceOptions } from '@tsparticles/engine';

async function initEngine(engine: Engine): Promise<void> {
  await loadSlim(engine);
}

interface Props {
  colors: string[];
  /** Cantidad de partículas en desktop. En mobile se reduce automáticamente a la mitad. */
  density?: number;
  className?: string;
}

export default function ParticlesBackground({ colors, density = 30, className }: Props) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setIsMobile(window.innerWidth < 768);
  }, []);

  const effectiveDensity = isMobile ? Math.round(density / 2) : density;

  const options = useMemo<ISourceOptions>(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: { value: effectiveDensity, density: { enable: true, width: 800, height: 800 } },
        color: { value: colors },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.1, max: 0.6 },
          animation: { enable: true, speed: 0.5, sync: false },
        },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 0.3,
          direction: 'top',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
        links: { enable: false },
      },
      interactivity: {
        events: { onHover: { enable: false }, onClick: { enable: false } },
      },
    }),
    [colors, effectiveDensity],
  );

  // Respeta prefers-reduced-motion: no monta el engine ni el canvas.
  if (reducedMotion) return null;

  return (
    <ParticlesProvider init={initEngine}>
      <Particles
        id="celebration-particles-bg"
        options={options}
        className={className ?? 'absolute inset-0 z-0 pointer-events-none'}
      />
    </ParticlesProvider>
  );
}
