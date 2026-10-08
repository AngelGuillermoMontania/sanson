---
name: celebration-effects
description: Efectos de celebración con tsParticles (fondos ambientales de partículas/brillos, confetti burst, fireworks) para momentos puntuales de la plataforma de eventos — confirmar RSVP, revelar ganador del sorteo (RAFFLE), fin de un COUNTDOWN, o fondos glamorosos tipo "Noche de Gala". Este skill debe usarse cuando se necesite un efecto de partículas más rico que lo que CSS puro puede lograr, para un momento de celebración concreto — no para las animaciones de entrada estándar de cada template, que siguen siendo CSS puro escalonado. Se dispara con menciones a confetti, fireworks, partículas, sparkles animados, "efecto de celebración", revelar sorteo, o countdown que termina.
---

# Celebration Effects (tsParticles)

## Overview

Los templates de este proyecto (Wedding, Quinceañera, etc.) usan animaciones **CSS puro** para las entradas escalonadas de Hero (`fadeInUp`, `riseInScale`, `wipeReveal`, etc. — ver `CLAUDE.md`). Ese sistema no alcanza para momentos de **celebración real**: un estallido de confetti, fuegos artificiales al revelar un ganador, o un fondo ambiental de brillos/partículas flotando detrás de una sección glamorosa (ej. el watermark "XV" de Quinceañera Template 1).

Este skill documenta cómo resolver esos momentos con **tsParticles v3** (arquitectura modular `@tsparticles/*`), manteniendo el resto del proyecto intacto: tsParticles se usa solo para estos casos puntuales, nunca reemplaza las animaciones CSS de entrada de un template.

## Cuándo usar este skill

- Confeti al confirmar un RSVP (sección `RSVP`)
- Fireworks/confetti al revelar el ganador de un sorteo (sección `RAFFLE`)
- Estallido de partículas cuando un `COUNTDOWN` llega a cero
- Fondo ambiental de partículas/brillos detrás de un Hero o sección con estética de gala/glamour (ej. reforzar el concepto "Noche de Gala" de Quinceañera T1, o cualquier template futuro que lo pida)

## Cuándo NO usarlo

- Entradas escalonadas de texto/labels/dividers del Hero → seguir usando el sistema `a()` + keyframes CSS de cada template
- Hover states, transiciones de UI, micro-interacciones de botones → `motion-framer` es más liviano y apropiado
- Scroll storytelling (parallax, pinning, timelines) → `gsap-scrolltrigger`

## Decisión: qué paquete de tsParticles usar

tsParticles v3 es modular — no instalar el motor completo para un efecto de un solo uso.

| Caso de uso | Paquete | Por qué |
|---|---|---|
| Fondo ambiental continuo (partículas/brillos detrás de una sección) | `@tsparticles/react` + `@tsparticles/slim` | Necesita el motor completo corriendo en loop; `slim` trae las features más usadas sin el peso del bundle `full` |
| Confetti burst puntual (RSVP confirmado) | `@tsparticles/confetti` | Paquete standalone (~5kb), sin necesidad de montar el engine completo ni un `<canvas>` persistente |
| Fireworks burst puntual (ganador de sorteo) | `@tsparticles/fireworks` | Standalone, mismo criterio que confetti — se dispara, corre unos segundos y se limpia solo |
| Countdown llega a cero | `@tsparticles/confetti` o `@tsparticles/fireworks` | Elegir según el tono del template (confetti = festivo/casual, fireworks = más dramático/nocturno) |

**Regla del proyecto:** para bursts puntuales (RSVP, RAFFLE, COUNTDOWN) usar siempre los paquetes standalone (`confetti`/`fireworks`), nunca montar el motor `slim`/`full` completo solo para un efecto de una vez — eso es sobrecosto de bundle innecesario.

## Reglas de integración

1. **Client component siempre.** Todo lo que use tsParticles necesita `'use client'` al tope del archivo — el motor toca `window`/`canvas` y no puede correr en SSR.
2. **Colores derivados de la paleta del template, nunca hardcodeados.** Cada template define su propia `col` (ver `WeddingHero`/`QuinceaneraHero` en `CLAUDE.md`). El efecto de partículas debe recibir esos colores como prop/parámetro — así el confetti de Quinceañera sale magenta/dorado y el de Wedding sale rose/champagne, sin lógica condicional por tipo de evento dentro del skill.
3. **Respetar `prefers-reduced-motion`.** La media query global en `globals.css` solo frena animaciones CSS — tsParticles corre en canvas/JS y hay que chequearlo a mano con `window.matchMedia('(prefers-reduced-motion: reduce)').matches` antes de inicializar. Si está activo: para fondos ambientales, no montar el efecto; para bursts, o se omite o se reduce a una versión de 1-2 frames.
4. **Limpiar siempre al desmontar.** Los efectos ambientales devuelven un contenedor con id — destruir la instancia (`tsParticles.dom()` → `.destroy()`) en el cleanup del `useEffect` para no acumular instancias en navegación cliente (Next.js App Router no remonta la página).
5. **Mobile: menos partículas.** Los fondos ambientales deben bajar `particles.number.value` y desactivar `fpsLimit` alto en viewports chicos (`window.innerWidth < 768`) — ver `references/tsparticles-guide.md`.
6. **z-index y pointer-events.** Fondos ambientales van siempre `pointer-events-none` y por debajo del contenido (`z-0`, contenido en `z-10`), igual que el watermark "XV" de Quinceañera T1.

## Cómo usarlo en la práctica

1. Leer `references/tsparticles-guide.md` para los comandos de instalación exactos y el snippet completo de cada uno de los 4 casos de uso (ambiental, confetti, fireworks, integración con countdown).
2. Copiar el boilerplate correspondiente de `assets/` al lugar del proyecto donde corresponda (ej. `client/src/components/templates/<tipo>/`), y ajustar los colores según la paleta `col` del template que lo invoca.
3. Instalar solo los paquetes `@tsparticles/*` que el caso de uso concreto necesita (ver tabla arriba) — no instalar `@tsparticles/react` ni `@tsparticles/slim` si solo se necesita un burst puntual.

## Recursos

- `references/tsparticles-guide.md` — instalación, configuración y snippet completo por caso de uso
- `assets/ParticlesBackground.tsx` — boilerplate de fondo ambiental (client component, con soporte de `prefers-reduced-motion` y colores por prop)
- `assets/confettiBurst.ts` — helper para disparar un confetti burst con colores custom
- `assets/fireworksBurst.ts` — helper para disparar un fireworks burst con colores custom
