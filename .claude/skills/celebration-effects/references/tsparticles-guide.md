# tsParticles — Guía de integración detallada

Arquitectura modular de tsParticles: instalar solo lo que cada caso de uso necesita.

**Nota de versión (verificado con `@tsparticles/react@4.3.1`):** esta versión de `@tsparticles/react` **no exporta `initParticlesEngine`**. El patrón correcto es `<ParticlesProvider init={engineRegistrar}>` envolviendo a `<Particles>` — `engineRegistrar` (ej. `async (engine) => { await loadSlim(engine); }`) debe ser una función con **referencia estable** (definida fuera del componente, a nivel de módulo), porque `ParticlesProvider` lanza un error si detecta que `init` cambió de identidad entre renders. `<Particles>` no renderiza nada hasta que el engine terminó de cargar — no hace falta un estado `ready` propio. Ver `assets/ParticlesBackground.tsx` para la implementación ya validada contra esta versión.

## 1. Fondo ambiental (partículas/brillos detrás de una sección)

### Instalación

```powershell
npm install @tsparticles/react @tsparticles/slim
```

`@tsparticles/slim` cubre shapes básicos, movimiento, opacidad, tamaño, links y hover/click interactions — suficiente para un fondo de brillos flotantes. Solo usar `@tsparticles/full` si se necesita algo específico que `slim` no trae (ej. emitters complejos, efectos de texto).

### Boilerplate

Ver `assets/ParticlesBackground.tsx`. Uso dentro de un template:

```tsx
// dentro de QuinceaneraHero, por ejemplo — como capa extra detrás del contenido
<ParticlesBackground
  colors={[col.ornament, col.title]}
  density={huge ? 40 : 20} // menos partículas en mobile
/>
```

Reglas de configuración recomendadas para "brillos ambientales" (no un fondo de partículas genérico tipo landing SaaS — tiene que leerse como polvo dorado/sparkle, no como "bolitas"):

```ts
{
  particles: {
    number: { value: density, density: { enable: true, area: 800 } },
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
    links: { enable: false }, // sin líneas conectando partículas — no es un grafo, es polvo de estrellas
  },
  interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
  fpsLimit: 60,
  detectRetina: true,
}
```

`links: { enable: false }` es la diferencia clave entre "efecto glamour" y "fondo de dashboard tech" — no omitirlo.

## 2. Confetti burst (RSVP confirmado)

### Instalación

```powershell
npm install @tsparticles/confetti
```

No requiere React wrapper ni engine — es una función standalone.

### Boilerplate

Ver `assets/confettiBurst.ts`. Ejemplo de uso en el handler de éxito del formulario de RSVP:

```ts
import { confettiBurst } from './confettiBurst';

async function handleRsvpSubmit(data: RsvpFormData) {
  await api.post('/rsvp', data);
  confettiBurst({ colors: [col.title, col.ornament, col.meta] });
}
```

## 3. Fireworks burst (revelar ganador del sorteo)

### Instalación

```powershell
npm install @tsparticles/fireworks
```

### Boilerplate

Ver `assets/fireworksBurst.ts`. Ejemplo de uso al revelar el ganador en la sección `RAFFLE`:

```ts
import { fireworksBurst } from './fireworksBurst';

function onRevealWinner(winnerName: string) {
  setWinner(winnerName);
  fireworksBurst({ colors: [col.accent, col.title], duration: 4000 });
}
```

Para templates con paleta oscura (Wedding T2, Wedding T4, Quinceañera T1) fireworks se lee mejor que confetti — el contraste del destello contra fondo oscuro es el punto fuerte del efecto. Para templates claros (Wedding T1, T3) preferir confetti.

## 4. Countdown llega a cero

Integrar en el componente cliente de countdown (ej. `WeddingCountdownClient.tsx`, `WeddingCountdown2Client.tsx`, etc.), en el mismo `useEffect` que ya calcula `timeLeft`:

```ts
const [celebrated, setCelebrated] = useState(false);

useEffect(() => {
  const left = getTimeLeft(eventDate);
  setTimeLeft(left);
  if (left && left.total <= 0 && !celebrated) {
    setCelebrated(true);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      confettiBurst({ colors: [col.number, col.ornament] }); // o fireworksBurst según el template
    }
  }
  const id = setInterval(() => {
    const t = getTimeLeft(eventDate);
    setTimeLeft(t);
    if (t && t.total <= 0 && !celebrated) {
      setCelebrated(true);
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        confettiBurst({ colors: [col.number, col.ornament] });
      }
    }
  }, 1000);
  return () => clearInterval(id);
}, [eventDate, celebrated]);
```

El flag `celebrated` evita relanzar el efecto en cada segundo una vez que el countdown ya llegó a cero (queda en 0 mientras el usuario tenga la página abierta).

## Checklist de performance y accesibilidad

- [ ] `'use client'` en todo archivo que importe algo de `@tsparticles/*`
- [ ] Import dinámico con `next/dynamic({ ssr: false })` para `ParticlesBackground` si se monta desde un Server Component
- [ ] `window.matchMedia('(prefers-reduced-motion: reduce)').matches` chequeado antes de inicializar cualquier efecto
- [ ] Fondos ambientales: `particles.number.value` reducido en `window.innerWidth < 768`
- [ ] Fondos ambientales: instancia destruida en el cleanup del `useEffect` (`container?.destroy()`)
- [ ] Bursts (confetti/fireworks): sin canvas persistente — se limpian solos al terminar la animación
- [ ] Colores siempre recibidos por prop/parámetro, nunca hardcodeados dentro del helper
- [ ] `pointer-events-none` en el contenedor de fondos ambientales
