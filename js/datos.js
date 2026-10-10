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
    "fotos/historia-23.jpeg",
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
    "fotos/historia-23.jpeg": "50% 30%",
    "fotos/historia-29.jpeg": "50% 25%",
    "fotos/historia-33.jpeg": "50% 45%",
    "fotos/historia-35.jpeg": "50% 45%",
    "fotos/historia-36.jpeg": "50% 52%",
    "fotos/historia-37.jpeg": "55% 55%",
    "fotos/historia-38.jpeg": "45% 40%",
    "fotos/historia-39.jpeg": "50% 35%",
    "fotos/historia-40.jpeg": "45% 50%",
    "fotos/historia-41.jpeg": "50% 45%",
    "fotos/historia-42.jpeg": "50% 45%",
    "fotos/historia-43.jpeg": "50% 60%",
    "fotos/historia-44.jpeg": "40% 50%",
    "fotos/historia-45.jpeg": "40% 50%",
    "fotos/historia-46.jpeg": "50% 60%",
    "fotos/historia-47.jpeg": "55% 50%",
    "fotos/historia-48.jpeg": "50% 40%",
    "fotos/historia-49.jpeg": "35% 60%",
    "fotos/historia-51.jpeg": "60% 40%",
    "fotos/historia-53.jpeg": "35% 45%",
    "fotos/historia-32.jpeg": "50% 55%",
    "fotos/historia-30.jpeg": "45% 40%",
    "fotos/historia-31.jpeg": "50% 45%",
    "fotos/historia-26.jpeg": "50% 55%",
    "fotos/historia-27.jpeg": "50% 50%",
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
        foto: "fotos/historia-recuerdo.jpeg",
        sinGaleria: true,
        titulo: "Un recuerdo borroso",
        texto:
          "De este momento tengo algunos recuerdos completamente vacíos. De lo poco que recuerdo, " +
          "tenía hambre y fui a buscar comida al fondo de la casa. Después sentí un ladrido fuerte " +
          "y un sacudón; así lo viví yo. A partir de ahí, mi boca se sentía algo extraña, " +
          "como si algo no funcionara bien… pero funcionaba. " +
          "Lo que sí recuerdo es que mi familia repetía muchas veces que yo había tenido suerte, " +
          "o algo de que habían gastado dinero en mí. Nunca entendí por qué.",
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
        foto: "fotos/historia-33.jpeg",
        titulo: "Casi perfecta",
        texto:
          "No siempre me salía a la perfección mi técnica, pero lograba mi objetivo. " +
          "Y no pienso dejar de hacerlo, por más años que me pasen.",
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
        fotos: ["fotos/historia-24.jpeg", "fotos/historia-37.jpeg"],
        titulo: "Paseos con mi hermano",
        texto:
          "De vez en cuando, muy rara vez, mi hermano me sacaba a pasear. " +
          "Entre las últimas palabras que le escuché, me pidió perdón por eso. " +
          "Yo no lo sentí como una disculpa; para mí fueron solo palabras, " +
          "porque quiero creer que no hay nada que disculpar.",
      },
      {
        foto: "fotos/historia-25.jpeg",
        titulo: "Solo acompañar",
        texto:
          "Si eso no pasaba, siempre prefería quedarme con la familia y acompañar. Solo acompañar. " +
          "Estar ahí era lo que más hacía y donde más tranquilo me sentía. " +
          "Además, a esta altura ya me gustaba bastante más dormir que cuando era un cachorro.",
      },
      {
        foto: "fotos/historia-23.jpeg",
        titulo: "Mis días de spa",
        texto:
          "Pero miren qué belleza. A veces me venían a buscar en un auto. Me llevaban, me bañaban y ahí… " +
          "bueno… hay secretos que quedan para uno. Tampoco puedo contarlo todo, ¿no es así?\n\n" +
          "Qué feliz me hacía. Me llevaban con otros perros y, eso sí, nos la pasábamos ladrando. " +
          "A veces me traían a casa algo tarde y empezaba a extrañar, pero la pasaba bien " +
          "y volvía con un olor riquísimo. Ahí no hacía falta pedir cariño: venían solos a hacérmelo.",
      },
      {
        fotos: ["fotos/historia-26.jpeg", "fotos/historia-27.jpeg"],
        titulo: "Los baños de mamá",
        texto:
          "Después de un tiempo, a mamá no le gustó mucho eso de que me llevaran a bañar, " +
          "así que decidió bañarme ella. Yo ya estaba bastante acostumbrado. " +
          "Siempre preferí que fuera ella quien me bañara: era en quien más confiaba " +
          "y quien más me acompañó. Siempre.",
      },
      {
        foto: "fotos/historia-29.jpeg",
        titulo: "Peinados raros",
        texto:
          "Igual insistían en que no me ensuciara las orejas. ¿Y qué puedo decirles? Son mis orejas. " +
          "Así que me hacían estos peinados raros.",
      },
      {
        foto: "fotos/historia-28.jpeg",
        titulo: "La cama más alta",
        texto:
          "¡Ah, no les conté! A esta altura, la cama de mi hermano se veía cada vez más alta… " +
          "o mis patas se habían acortado, no lo sé. Ya no podía subir sin ayuda, y no sé qué pasó. " +
          "Pero cuando lograba subirme, me quedaba ahí unas cuantas horas.",
      },
      {
        fotos: ["fotos/portada-1.jpeg", "fotos/portada-2.jpeg"],
        titulo: "Mis años dorados",
        texto:
          "¿Qué puedo decirles? Fui muy feliz, no puedo negarlo. " +
          "Igual, mi voz se volvía cada vez más grave, empecé a sentirme más cansado " +
          "y ya no podía correr como antes. Y si lo hacía, la verdad, me molestaba un poco.",
      },
      {
        fotos: ["fotos/historia-30.jpeg", "fotos/historia-31.jpeg"],
        titulo: "Perfecto, pero no tanto",
        texto:
          "Empecé a lastimarme. No es que lo buscara, la verdad; simplemente me lastimaba. " +
          "Cuando no era el codito, era la pata. Y bueno, ¿qué esperaban? " +
          "Me veo perfecto… pero no lo era.",
      },
      {
        foto: "fotos/historia-32.jpeg",
        titulo: "¡Manjar!",
        texto:
          "¡Ah, pero así y todo…! Les estoy contando a todos aquí que no hay alimento más rico " +
          "que la papa que mamá me reservaba. Con mis técnicas de influencia superiores, " +
          "siempre conseguía que me diera una. No hay comida que se le compare. ¡Manjar!",
      },
      {
        foto: "fotos/historia-34.jpeg",
        titulo: "El asado de papá",
        texto:
          "Otro alimento que todos aquí, donde estoy, deberían probar es un buen pedazo de carne hecho por mi papá. " +
          "Un domingo al mediodía, después de unos cuantos ladridos bien fuertes y de que me retaran, " +
          "recibía mi parte. Ya sabía: conocía el lugar y el olor. Solo había que ladrar y esperar " +
          "hasta que me lanzara un pedazo de esos asados. Ya lo extraño.",
      },
      {
        fotos: ["fotos/portada-4.jpeg", "fotos/portada-5.jpeg"],
        titulo: "Mi reposera, otra vez",
        texto:
          "Aquí ya me empezó a costar un poco más subir a mi amada reposera. ¿La recuerdan? " +
          "Papá hasta la arregló para mí alguna vez… o eso quiero creer. " +
          "Cuesta, eh: me quedo ahí un buen ratito, pero logro subir. " +
          "Es como si me hubieran puesto la reposera más alta… o será que ya no tengo las mismas fuerzas.",
      },
      {
        foto: "fotos/historia-35.jpeg",
        titulo: "Nuestro secreto",
        texto:
          "Con mi hermana… bueno. Lloré con ella. Solo ella y yo sabemos por qué, " +
          "y nunca voy a contar nuestros secretos: eso quedará para siempre entre nosotros. " +
          "Algún día nos volveremos a encontrar, para mirarnos a los ojos " +
          "y saber lo que queremos decirnos.",
      },
      {
        foto: "fotos/historia-36.jpeg",
        titulo: "Siempre ahí",
        texto:
          "Sé que me necesitaba, y por eso yo siempre estaba ahí, aunque ella no me lo pidiera. " +
          "(Aunque a veces era al revés… pero no se lo cuenten).",
      },
      {
        foto: "fotos/historia-38.jpeg",
        titulo: "La técnica sigue funcionando",
        texto:
          "Oigan, pero la técnica sigue funcionando. La sigo poniendo a prueba con mi hermana " +
          "y todo funciona como el primer día. Mi cuerpo cambia, mi pelo cambia, mi cabeza cambia… " +
          "pero la técnica sigue funcionando igual.",
      },
      {
        clips: ["videos/humor-1.mp4", "videos/humor-2.mp4"],
        titulo: "Mi humor",
        texto:
          "Incluso mi humor empezó a cambiar. Ya no estoy para cosas raras: " +
          "no me hagan moverme mucho.",
      },
      {
        foto: "fotos/historia-39.jpeg",
        titulo: "¡Esperen!",
        texto: "¡¡¡ESPEREN!!! Viendo el video del capítulo anterior… ¡acabo de recordar algo!",
      },
      {
        fotos: ["fotos/historia-40.jpeg", "fotos/historia-41.jpeg"],
        video: "videos/amigos.mp4",
        titulo: "¡Hice amigos!",
        texto:
          "¡Hice amigos! Muchos amigos. No sabía cómo iba a ser, pero me encontré muchos aquí, " +
          "¡e incluso jugamos! Así que estoy más que bien, la verdad. Aquí no me siento tan cansado.",
      },
      {
        fotos: ["fotos/historia-42.jpeg", "fotos/historia-43.jpeg"],
        titulo: "Como en casa",
        texto:
          "Algunos, incluso, estaban un poco confundidos a veces. Pero yo siempre di lo mejor de mí " +
          "para hacerlos sentir como en casa. No creo haber hecho las cosas mal.",
      },
      {
        foto: "fotos/historia-44.jpeg",
        titulo: "Guardián del barrio",
        texto:
          "Incluso hice amigos fuera de casa, muchos amigos. Se acercaban a saludarme " +
          "y muchas veces preguntaban por mí. Siempre fui el guardián de la casa y del barrio, " +
          "y siempre hice a la perfección mi trabajo de guardián y protector. " +
          "Nadie tiene de qué quejarse… ¿o sí?",
      },
      {
        foto: "fotos/historia-22.jpeg",
        titulo: "Ganamos un mundial",
        texto:
          "Volviendo ahora sí a mi historia: ganamos un mundial. La verdad, vi mucha alegría en mi familia, " +
          "aunque no los entiendo. Yo solo pensaba en mi reposera; ya no puedo subir. " +
          "Me cuesta levantar las patas, y ya no tenía fuerzas para subirme… ni siquiera para intentarlo. " +
          "Mi hermano se fue de casa.",
      },
      {
        foto: "fotos/historia-45.jpeg",
        titulo: "Esos cerámicos",
        texto:
          "Me resbalaba mucho con esos cerámicos; la verdad, no sé qué les ven. Uno no puede caminar por ahí. " +
          "Me cuesta caminar, mi aliento ya no huele como cuando era más joven, " +
          "y me está costando ladrar…",
      },
      {
        foto: "fotos/historia-46.jpeg",
        titulo: "Lo siento, ma",
        texto:
          "Me está costando caminar. Me abrigaron porque siento más frío que antes… ¡y de Argentina, papá! " +
          "Como me cuesta caminar, e incluso levantarme, no llego al baño. " +
          "Y mamá, siempre, hasta el final, conmigo, limpiando mis desastres. Lo siento, ma.",
      },
      {
        foto: "fotos/historia-47.jpeg",
        titulo: "Prefiero dormir",
        texto:
          "Prefiero dormir. Creo que ahora le tengo más aprecio que antes a dormir, " +
          "aunque a veces no llegue a mi colchón o me cueste mucho hacerlo. " +
          "Siento la columna cada vez más dura y estoy muy cansado. Mis músculos tienen mucha menos fuerza.",
      },
      {
        fotos: ["fotos/historia-48.jpeg", "fotos/historia-49.jpeg"],
        titulo: "Ya estaba listo",
        texto:
          "Los cariños ya no son iguales; mi cabeza solo entiende de cariños. Me siento como un cachorro: " +
          "pienso que no pasaron ni cinco minutos desde que me hicieron cariño. Eso hace parecer que solo quiero eso, " +
          "pero es que no recuerdo la última vez que me los hicieron.\n\n" +
          "Solo sé que me duele. Me duele vivir. Hice de todo y no me arrepiento de nada. " +
          "Viví de una forma increíble… y ya estaba listo, familia.",
      },
      {
        foto: "fotos/historia-50.jpeg",
        titulo: "Dejarme ir",
        texto:
          "Tomaron la mejor decisión; de eso no se olviden nunca. Solo quería descansar, " +
          "y el momento llegó cuando tenía que llegar. Voy a estar siempre cuidándolos, " +
          "y no olviden nunca jamás cuánto los amé.\n\n" +
          "No se arrepientan de nada: aprendan de lo bueno y de lo malo de todo lo que vivimos. " +
          "Hicieron lo más grande que sus corazones podían hacer: dejarme ir.",
      },
      {
        foto: "fotos/historia-51.jpeg",
        titulo: "Antes de irme",
        texto: "No me iré sin antes decirles, recordarles y enorgullecerme de que…",
      },
      {
        fotos: ["fotos/historia-52.jpeg", "fotos/historia-53.jpeg"],
        titulo: "Hasta el final",
        texto: "…el método que descubrí siempre funcionó. Hasta mis últimos días. Recuérdenme así.",
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
    fotos: [
      { foto: "fotos/galeria-1.jpeg", texto: "Siempre atento" },
      { foto: "fotos/galeria-2.jpeg", texto: "" },
      { foto: "fotos/galeria-3.jpeg", texto: "Isis, dormida" },
    ],
  },

  /* Mensajes de la familia (carrusel). La foto es opcional. */
  familia: {
    titulo: "Lo que queremos decirte",
    mensajes: [
      {
        nombre: "Hermano",
        foto: "",
        mensaje:
          "Te amare por siempre, te pido perdon nuevamente por no sacarte a pasear mas veces cuando podia hacerlo y no acariciarte mas hacia el final. " +
          "Te extraño y te extrañare aunque ya no te veia mucho, gracias por compartir la vida conmigo. " +
          "Sos y seras unico. Nos encontraremos algun dia y te acostaras en mi cama a dormir. " +
          "Te amo con todo mi corazon",
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
