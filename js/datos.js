/* ==========================================================================
   DATOS DE LA PÁGINA
   Aquí se edita todo: nombre, colores, fotos, historia y mensajes.
   No hace falta tocar el HTML ni el CSS.

   Las fotos van en la carpeta /fotos. Si una foto aún no existe,
   la página muestra un recuadro con una huellita en su lugar.
   ========================================================================== */

const DATOS = {
  nombre: "Sansón",
  fechas: "2013 — 2026",
  apodo: "En tu memoria",

  /* Los 3 colores de su pelaje (tomados de sus fotos).
     oscuro: el café de las manchas del lomo (fondos y textos)
     calido: el marrón rojizo de sus orejas (acentos)
     claro:  el blanco de su pelo (fondo general) */
  colores: {
    oscuro: "#13100e",
    calido: "#94532c",
    claro: "#f7f2eb",
  },

  /* Foto principal: estas van rotando arriba del todo (tus favoritas).
     También aparecen automáticamente en la galería de abajo.
     Si un archivo todavía no existe, simplemente se salta. */
  portada: [
    "fotos/portada-1.jpeg",
    "fotos/portada-2.jpeg",
    "fotos/portada-3.jpeg",
    "fotos/portada-4.jpeg",
    "fotos/portada-5.jpeg",
    "fotos/portada-6.jpeg",
  ],

  /* Encuadre (opcional): qué parte de la foto mostrar cuando se recorta.
     "horizontal vertical" en %. "50% 0%" = arriba al centro, "50% 50%" = centro.
     Se aplica en todos los lugares donde aparezca esa foto. */
  encuadre: {
    "fotos/portada-1.jpeg": "20% 35%",
    "fotos/portada-2.jpeg": "35% 0%",
    "fotos/portada-3.jpeg": "10% 20%",
    "fotos/portada-5.jpeg": "40% 30%",
    "fotos/portada-6.jpeg": "60% 30%",
    "fotos/portada-4.jpeg": "30% 40%",
    "fotos/historia-1.jpeg": "62% 40%",
    "fotos/historia-3.jpeg": "50% 12%",
    "fotos/historia-6.jpeg": "50% 40%",
    "fotos/historia-13.jpeg": "50% 22%",
    "fotos/historia-16.jpeg": "50% 30%",
    "fotos/historia-17.jpeg": "50% 40%",
    "fotos/historia-18.jpeg": "50% 40%",
    "fotos/historia-20.jpeg": "30% 30%",
    "fotos/historia-21.jpeg": "55% 20%",
    "fotos/historia-22.jpeg": "35% 45%",
  },

  /* Mi historia: la cuenta Sansón, en primera persona.
     Cada capítulo aparece al ir bajando. */
  historia: {
    titulo: "Mi historia",
    intro:
      "Me llamo Sansón. Durante trece años fui el orejón de la casa, " +
      "y esta es mi historia. Se las cuento yo, a mi manera: con la nariz pegada al piso y la cola moviéndose.",
    capitulos: [
      {
        foto: "fotos/historia-1.jpeg",
        titulo: "El día que llegué",
        texto:
          "Cuando llegué a casa, mi papá dijo que era el mejor perro del mundo, de la mejor raza. " +
          "Mi hermana nunca lo olvidó, y me lo recordó hasta el último día: eso era yo, el mejor del mundo. " +
          "Y por cómo me trataban, me lo creí enseguida. " +
          "Solo había un pequeño detalle: era un poquito más orejón que el resto.",
      },
      {
        foto: "fotos/historia-2.jpeg",
        titulo: "El rey de la casa",
        texto:
          "Me trataban como a un rey. Como todavía era chiquito, me bañaban en casa " +
          "y después me envolvían en una toalla, calentito. Me levantaban en brazos sin ningún esfuerzo " +
          "y jugábamos todo el tiempo. Y mis orejas eran todo un espectáculo: " +
          "se reían con ellas y todos se sorprendían de lo largas que eran.",
      },
      {
        foto: "fotos/historia-3.jpeg",
        titulo: "La cama de mi hermano",
        texto:
          "Mi hermano me enseñó a subir a su cama… y qué error cometió. " +
          "Al principio necesitaba ayuda, pero fui creciendo y ganando fuerza, " +
          "y aunque mis patas siempre fueron cortitas, aprendí a subirme solo. " +
          "Desde ese día, esa cama también fue mía. Y qué cómoda era.",
      },
      {
        foto: "fotos/historia-4.jpeg",
        titulo: "Media cama para mí",
        texto:
          "Y sí que era cómoda. Tenía muchísimo espacio para mí, " +
          "y mi hermano nunca me dijo nada, aunque le ocupara media cama " +
          "y me acomodara como yo quisiera. Panza arriba, por supuesto.",
      },
      {
        foto: "fotos/historia-5.jpeg",
        titulo: "La cama de mi hermana",
        texto:
          "Así también aprendí a subirme a la cama de mi hermana. Ella tampoco se salvó: " +
          "yo tenía que probar su cama. No era tan grande, pero ahí recibía tanto cariño " +
          "y tanto amor que se sentía enorme.",
      },
      {
        foto: "fotos/portada-3.jpeg",
        titulo: "Único e inigualable",
        texto:
          "De repente crecí. Mi ladrido se volvió más fuerte y más grave, " +
          "y mis orejas dejaron de dar risa para convertirse en mi sello: único e inigualable. " +
          "Tenía fuerza y una mirada profunda, y era único desde donde se me mirara. " +
          "Me convertí en una cara hermosa, de paso corto pero firme.",
      },
      {
        foto: "fotos/historia-6.jpeg",
        titulo: "Casi modelo",
        texto:
          "Casi me convierto en modelo: cada una de mis fotos era irrepetible. " +
          "Mi hermano hasta me paseaba por lugares públicos, como el Carneo Español, " +
          "solo para que las chicas se pararan a saludarme. " +
          "Yo, en cambio, solo quería un poco de carne.",
      },
      {
        foto: "fotos/historia-7.jpeg",
        titulo: "Un día inolvidable",
        texto:
          "¡Pero qué lindo era! Solo salía mal en las fotos cuando me acompañaba mi familia… " +
          "y aun así, eso era lo que más anhelaba: su cariño y sus risas. " +
          "Este es un día que jamás voy a olvidar. Qué bien la pasamos: corría un montón y me cansaba, " +
          "corría otro poco y me volvía a cansar. Tenía mucha fuerza, " +
          "y nunca me faltaron el cariño ni el amor.",
      },
      {
        foto: "fotos/historia-8.jpeg",
        titulo: "Mi reposera",
        texto:
          "Con esta foto conseguí novia. " +
          "Mis colores, vibrantes y fuertes, no pasaban desapercibidos: " +
          "tres colores, distinto a todos los de mi especie. " +
          "Y sí, aprendí a subirme a esto que creo que llamaban reposera. Lo hacía por mis propios medios; " +
          "costaba un poco, pero al fin y al cabo no era tan difícil. Era cómoda y, lo mejor de todo, " +
          "tenía apoyacabezas y una madera para rumiar y mordisquear.",
      },
      {
        foto: "fotos/historia-9.jpeg",
        titulo: "Mi lugar favorito",
        texto:
          "Qué cómoda era esa reposera. Se convirtió en mi nuevo lugar favorito, " +
          "y si alguien la guardaba, ladraba hasta que volvieran a ponerla en su lugar. " +
          "Era mía, solo mía. Desde ahí observaba todo. Por esos tiempos ya estaba más tranquilo: " +
          "seguía teniendo fuerza y energía, pero prefería quedarme en mi reposera, " +
          "mirando qué hacía mi familia.",
      },
      {
        foto: "fotos/historia-10.jpeg",
        titulo: "Me puse a pensar",
        texto: "Un día, cuando vi que ya no me podían levantar tan fácilmente, me puse a pensar… 🤔",
      },
      {
        foto: "fotos/historia-11.jpeg",
        titulo: "¿Lo lograré?",
        texto:
          "Quise preguntarlo, pero no hablaba el idioma de los humanos. " +
          "Así que dije: «Ok. Mírame. A ver si esto funciona». " +
          "¿Y si insisto, e insisto, e insisto…? ¿Venceré? ¿Lo lograré?",
      },
      {
        foto: "fotos/historia-12.jpeg",
        titulo: "Hazme cariño",
        texto:
          "Pues pongámoslo a prueba: hazme cariño. Por favor, hazme un poco de cariño. " +
          "Solo eso, cariño. No pido nada más.",
      },
      {
        foto: "fotos/historia-13.jpeg",
        titulo: "¡Funcionó!",
        texto: "Pues sí, me funcionó. Así que aprendí. «Oye, hazme cariño, hermana».",
      },
      {
        foto: "fotos/historia-14.jpeg",
        titulo: "Técnica comprobada",
        texto:
          "«Mamá, cariños, por favor». Y no me digas que no funciona, porque ya comprobé que sí. " +
          "Creo que voy a seguir haciéndolo: es una técnica muy efectiva, " +
          "y la seguí probando a lo largo de los años.",
      },
      {
        fotos: [
          "fotos/historia-15.jpeg",
          "fotos/historia-20.jpeg",
          "fotos/portada-6.jpeg",
          "fotos/historia-21.jpeg",
          "fotos/portada-1.jpeg",
          "fotos/historia-22.jpeg",
        ],
        titulo: "Con toda la facha",
        texto:
          "Y pues sí… con toda la facha y la belleza que me acompañaban, pasó lo que tenía que pasar. " +
          "Con esas fotos conseguí novia.",
      },
      {
        foto: "fotos/historia-19.jpeg",
        titulo: "Mi novia",
        texto:
          "Yo insistía en que podía solo con mi novia; " +
          "necesité un empujoncito y la ayuda de papá, pero el resto fue todo trabajo mío.\n\n" +
          "Aquí nos pillaron en un momento algo vergonzoso… aunque, la verdad, vergüenza no me dio. " +
          "Ella era muy linda, tal como yo. La estoy buscando desde que llegué aquí, donde estoy ahora, " +
          "y la voy a encontrar: de eso estoy seguro.",
      },
      {
        foto: "fotos/historia-16.jpeg",
        titulo: "Fui papá",
        texto:
          "Y tal como imaginan, fui papá. Ni yo me lo imaginaba. " +
          "¡Pero miren esa belleza de perrita, por favor!",
      },
      {
        foto: "fotos/historia-17.jpeg",
        video: "videos/isis.mp4",
        titulo: "Isis",
        texto:
          "No me digan que no es hermosa… Yo quería quedármela; después de todo, es mi hija. " +
          "La familia le decía Isis, aunque a mí, la verdad, el nombre era lo que menos me importaba.\n\n" +
          "Nos divertíamos mucho…\n\n" +
          "Pero un día, simplemente, volví a quedarme sin su compañía y sin su diversión.",
      },
      {
        foto: "fotos/historia-18.jpeg",
        titulo: "La vida sigue",
        texto:
          "Eso me dejó pensando un poco… Hay cosas en la vida que hasta hoy no entiendo. " +
          "Me quedé pensando en qué había sucedido, pero bueno: la memoria y el tiempo son fugaces. " +
          "La vida sigue.",
      },
      {
        foto: "fotos/portada-2.jpeg",
        titulo: "Mis años dorados",
        texto:
          "Con los años se me puso blanco el hocico y los pasos se me hicieron más lentos. " +
          "Pero nunca dejé de esperarlos en la puerta con la misma alegría del primer día.",
      },
    ],
  },

  /* Galería: muestra TODAS las fotos de la página (portada + historia)
     y además las que agregues aquí. Una foto repetida aparece una sola vez.
     El texto es opcional; si lo pones, se muestra al pasar el mouse.
     Ejemplo: { foto: "fotos/galeria-1.jpeg", texto: "Domingo de siesta" }, */
  galeria: {
    titulo: "Momentos",
    subtitulo: "Cada foto guarda un pedacito mío.",
    textos: {
      "fotos/portada-1.jpeg": "Mi mirada de siempre",
      "fotos/portada-2.jpeg": "Oliendo el mundo",
      "fotos/portada-3.jpeg": "Tarde de plaza",
      "fotos/portada-5.jpeg": "Mirándote a los ojos",
      "fotos/portada-6.jpeg": "Esa mirada que lo pedía todo",
      "fotos/portada-4.jpeg": "El rey de la reposera",
    },
    fotos: [],
  },

  /* Mensajes de la familia (carrusel). La foto es opcional. */
  familia: {
    titulo: "Lo que queremos decirte",
    mensajes: [
      {
        nombre: "Mamá",
        foto: "",
        mensaje: "Gracias por cuidar de todos nosotros sin que nadie te lo pidiera. " + "La casa está en silencio sin tus pasos, pero tu amor se quedó en cada rincón.",
      },
      {
        nombre: "Papá",
        foto: "",
        mensaje: "Fuiste el mejor compañero de caminatas y de silencios. " + "Te voy a extrañar cada mañana, amigo.",
      },
      {
        nombre: "Hermano",
        foto: "",
        mensaje: "Crecimos juntos. Fuiste mi primer mejor amigo y lo vas a ser siempre.",
      },
      {
        nombre: "Hermana",
        foto: "",
        mensaje: "Gracias por cada abrazo, cada lengüetazo y cada vez que me esperaste en la puerta. " + "Te amo con todo mi corazón.",
      },
    ],
  },

  /* Mensaje final. */
  despedida: {
    linea1: "Te amamos",
    linea2: "y nos volveremos a encontrar.",
    linea3: "Te buscaremos en el cielo de los perros.",
  },
};
