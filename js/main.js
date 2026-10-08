(() => {
  const d = DATOS;
  const $ = (id) => document.getElementById(id);
  const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Paleta ---------- */
  const raiz = document.documentElement.style;
  raiz.setProperty("--oscuro", d.colores.oscuro);
  raiz.setProperty("--calido", d.colores.calido);
  raiz.setProperty("--claro", d.colores.claro);

  /* ---------- Utilidades ---------- */
  const huella = '<svg viewBox="0 0 64 64"><use href="#huella"/></svg>';

  function sinFoto(oscura) {
    const div = document.createElement("div");
    div.className = "sin-foto" + (oscura ? " sin-foto--oscura" : "");
    div.innerHTML = huella;
    return div;
  }

  // Crea una <img>; si la foto no existe, la reemplaza por el recuadro con huella.
  function foto(src, alt, oscura) {
    if (!src) return sinFoto(oscura);
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    const encuadre = d.encuadre && d.encuadre[src];
    if (encuadre) img.style.objectPosition = encuadre;
    img.addEventListener("error", () => img.replaceWith(sinFoto(oscura)), { once: true });
    return img;
  }

  /* ---------- Textos ---------- */
  document.title = `${d.nombre} · Siempre en nuestro corazón`;
  $("nombre").textContent = d.nombre;
  $("apodo").textContent = d.apodo;
  $("fechas").textContent = d.fechas;
  $("historia-titulo").textContent = d.historia.titulo;
  $("historia-intro").textContent = d.historia.intro;
  $("galeria-titulo").textContent = d.galeria.titulo;
  $("galeria-subtitulo").textContent = d.galeria.subtitulo;
  $("familia-titulo").textContent = d.familia.titulo;
  $("desp-1").textContent = d.despedida.linea1;
  $("desp-2").textContent = d.despedida.linea2;
  $("desp-3").textContent = d.despedida.linea3;
  $("desp-firma").textContent = `Para siempre, ${d.nombre}`;

  /* ---------- Portada (fotos que rotan) ---------- */
  const contPortada = $("portada-fotos");
  const contPuntos = $("portada-puntos");
  const slides = d.portada.map((src, i) => {
    const s = { el: document.createElement("div"), punto: document.createElement("button") };
    s.el.className = "portada__foto";
    const img = foto(src, `${d.nombre}, foto ${i + 1}`, true);
    img.loading = "eager";
    // Si la foto todavía no existe, se quita de la rotación (salvo que sea la única)
    img.addEventListener("error", () => { if (slides.length > 1) quitarSlide(s); }, { once: true });
    s.el.appendChild(img);
    contPortada.appendChild(s.el);

    s.punto.setAttribute("aria-label", `Ver foto ${i + 1}`);
    s.punto.addEventListener("click", () => { mostrarPortada(slides.indexOf(s)); reiniciarPortada(); });
    contPuntos.appendChild(s.punto);
    return s;
  });

  let actual = 0, timerPortada;
  function mostrarPortada(i) {
    slides[actual]?.el.classList.remove("activa");
    slides[actual]?.punto.classList.remove("activo");
    actual = (i + slides.length) % slides.length;
    // Reinicia la animación de acercamiento
    const media = slides[actual].el.firstElementChild;
    media.style.animation = "none"; void media.offsetWidth; media.style.animation = "";
    slides[actual].el.classList.add("activa");
    slides[actual].punto.classList.add("activo");
  }
  function quitarSlide(s) {
    const i = slides.indexOf(s);
    const eraActual = i === actual;
    slides.splice(i, 1);
    s.el.remove();
    s.punto.remove();
    if (i < actual) actual--;
    if (eraActual) mostrarPortada(actual);
    contPuntos.hidden = slides.length < 2;
    reiniciarPortada();
  }
  function reiniciarPortada() {
    clearInterval(timerPortada);
    if (slides.length > 1) timerPortada = setInterval(() => mostrarPortada(actual + 1), 6000);
  }
  contPuntos.hidden = slides.length < 2;
  if (slides.length) {
    mostrarPortada(0);
    reiniciarPortada();
  }

  /* ---------- Historia ---------- */
  const contCap = $("capitulos");
  const videos = [];
  d.historia.capitulos.forEach((c, i) => {
    const art = document.createElement("article");
    art.className = "capitulo";
    art.innerHTML = `
      <span class="capitulo__marca">${huella}</span>
      <div class="capitulo__foto">
        <figure class="polaroid"><div class="polaroid__img"></div></figure>
      </div>
      <div class="capitulo__texto">
        <span class="capitulo__num"></span>
        <h3></h3>
        <p></p>
      </div>`;
    // Un capítulo puede tener una foto (foto) o varias que se alternan solas (fotos)
    const marcoFoto = art.querySelector(".polaroid__img");
    const listaFotos = c.fotos || [c.foto];
    listaFotos.forEach((f) => marcoFoto.appendChild(foto(f, c.titulo)));
    if (listaFotos.length > 1) {
      marcoFoto.classList.add("polaroid__img--rota");
      let n = 0;
      marcoFoto.children[0].classList.add("activa");
      if (!reducido) setInterval(() => {
        marcoFoto.children[n].classList.remove("activa");
        n = (n + 1) % marcoFoto.children.length;
        marcoFoto.children[n].classList.add("activa");
      }, 3000);
    }
    art.querySelector(".capitulo__num").textContent = `Capítulo ${i + 1}`;
    art.querySelector("h3").textContent = c.titulo;
    art.querySelector("p").textContent = c.texto;
    art.querySelector(".polaroid").style.setProperty("--giro", `${(i % 2 ? 1 : -1) * (1.5 + (i % 3) * 0.8)}deg`);
    // Video opcional debajo del texto: se reproduce en silencio cuando está a la vista
    if (c.video) {
      const marco = document.createElement("div");
      marco.className = "capitulo__video";
      const v = document.createElement("video");
      v.src = c.video;
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.controls = true;
      v.preload = "metadata";
      marco.appendChild(v);
      art.querySelector(".capitulo__texto").appendChild(marco);
      videos.push(v);
    }
    contCap.appendChild(art);
  });

  // Solo suena/corre el video que está en pantalla
  if (videos.length && !reducido) {
    const obsVideo = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => {
        if (en.isIntersecting) en.target.play().catch(() => {});
        else en.target.pause();
      });
    }, { threshold: 0.5 });
    videos.forEach((v) => obsVideo.observe(v));
  }

  /* ---------- Galería + visor ---------- */
  // Junta todas las fotos de la página (sin repetir): las de la galería primero,
  // luego las de la portada y la historia.
  const textos = d.galeria.textos || {};
  const vistas = new Set();
  const fotosGaleria = [];
  [
    ...d.galeria.fotos,
    ...d.portada.map((f) => ({ foto: f })),
    ...d.historia.capitulos.flatMap((c) => (c.fotos || [c.foto]).map((f) => ({ foto: f }))),
  ].forEach((g) => {
    if (!g.foto || vistas.has(g.foto)) return;
    vistas.add(g.foto);
    fotosGaleria.push({ foto: g.foto, texto: g.texto || textos[g.foto] || "" });
  });

  const contMosaico = $("mosaico");
  fotosGaleria.forEach((g, i) => {
    const fig = document.createElement("figure");
    fig.className = "mosaico__item revelar";
    fig.style.transitionDelay = `${(i % 3) * 0.15}s`;
    const img = foto(g.foto, g.texto || d.nombre);
    img.loading = "eager";
    // En la galería, una foto que todavía no existe simplemente no se muestra
    img.addEventListener("error", () => {
      fig.remove();
      fotosGaleria.splice(fotosGaleria.indexOf(g), 1);
    }, { once: true });
    fig.appendChild(img);
    if (g.texto) {
      const cap = document.createElement("figcaption");
      cap.textContent = g.texto;
      fig.appendChild(cap);
    }
    fig.tabIndex = 0;
    const abrir = () => abrirVisor(fotosGaleria.indexOf(g));
    fig.addEventListener("click", abrir);
    fig.addEventListener("keydown", (e) => { if (e.key === "Enter") abrir(); });
    contMosaico.appendChild(fig);
  });
  if (!fotosGaleria.length) $("galeria").hidden = true;

  const visor = $("visor");
  let idxVisor = 0;
  function pintarVisor() {
    const g = fotosGaleria[idxVisor];
    const fig = visor.querySelector("figure");
    const viejo = fig.firstElementChild;
    const nuevo = foto(g.foto, g.texto, true);
    nuevo.id = "visor-img";
    nuevo.loading = "eager";
    fig.replaceChild(nuevo, viejo);
    $("visor-texto").textContent = g.texto || "";
  }
  function abrirVisor(i) {
    idxVisor = i;
    pintarVisor();
    visor.classList.add("abierto");
    visor.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function cerrarVisor() {
    visor.classList.remove("abierto");
    visor.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function moverVisor(n) {
    idxVisor = (idxVisor + n + fotosGaleria.length) % fotosGaleria.length;
    pintarVisor();
  }
  $("visor-cerrar").addEventListener("click", cerrarVisor);
  $("visor-prev").addEventListener("click", () => moverVisor(-1));
  $("visor-next").addEventListener("click", () => moverVisor(1));
  visor.addEventListener("click", (e) => { if (e.target === visor) cerrarVisor(); });
  document.addEventListener("keydown", (e) => {
    if (!visor.classList.contains("abierto")) return;
    if (e.key === "Escape") cerrarVisor();
    if (e.key === "ArrowLeft") moverVisor(-1);
    if (e.key === "ArrowRight") moverVisor(1);
  });

  /* ---------- Carrusel de la familia ---------- */
  const pista = $("carrusel-pista");
  const puntosCar = $("carrusel-puntos");
  const mensajes = d.familia.mensajes;
  mensajes.forEach((m, i) => {
    const div = document.createElement("div");
    div.className = "mensaje";
    div.innerHTML = `
      <div class="mensaje__comillas">&ldquo;</div>
      <blockquote></blockquote>
      <div class="mensaje__autor">
        ${m.foto ? '<span class="mensaje__avatar"></span>' : ""}
        <span class="mensaje__nombre"></span>
      </div>`;
    div.querySelector("blockquote").textContent = m.mensaje;
    div.querySelector(".mensaje__nombre").textContent = `— ${m.nombre}`;
    if (m.foto) div.querySelector(".mensaje__avatar").appendChild(foto(m.foto, m.nombre));
    pista.appendChild(div);

    const p = document.createElement("button");
    p.setAttribute("aria-label", `Mensaje de ${m.nombre}`);
    p.addEventListener("click", () => { irA(i); reiniciarCarrusel(); });
    puntosCar.appendChild(p);
  });

  let idxCar = 0, timerCar;
  function irA(i) {
    puntosCar.children[idxCar]?.classList.remove("activo");
    idxCar = (i + mensajes.length) % mensajes.length;
    pista.style.transform = `translateX(-${idxCar * 100}%)`;
    puntosCar.children[idxCar]?.classList.add("activo");
  }
  function reiniciarCarrusel() {
    clearInterval(timerCar);
    if (!reducido && mensajes.length > 1) timerCar = setInterval(() => irA(idxCar + 1), 8000);
  }
  $("carrusel-prev").addEventListener("click", () => { irA(idxCar - 1); reiniciarCarrusel(); });
  $("carrusel-next").addEventListener("click", () => { irA(idxCar + 1); reiniciarCarrusel(); });
  const carrusel = $("carrusel");
  carrusel.addEventListener("mouseenter", () => clearInterval(timerCar));
  carrusel.addEventListener("mouseleave", reiniciarCarrusel);

  // Deslizar con el dedo
  let inicioX = null;
  pista.addEventListener("pointerdown", (e) => { inicioX = e.clientX; });
  pista.addEventListener("pointerup", (e) => {
    if (inicioX === null) return;
    const dx = e.clientX - inicioX;
    if (Math.abs(dx) > 50) { irA(idxCar + (dx < 0 ? 1 : -1)); reiniciarCarrusel(); }
    inicioX = null;
  });
  if (mensajes.length) { irA(0); reiniciarCarrusel(); }

  /* ---------- Estrellas ---------- */
  const cielo = $("estrellas");
  const cantidad = innerWidth < 600 ? 90 : 170;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < cantidad; i++) {
    const s = document.createElement("span");
    s.className = "estrella";
    const t = Math.random() < 0.85 ? 1 + Math.random() * 1.2 : 2.2 + Math.random() * 1.3;
    s.style.cssText = `
      width:${t}px; height:${t}px;
      left:${Math.random() * 100}%;
      top:${20 + Math.random() * 80}%;
      --dur:${3 + Math.random() * 5}s;
      --retraso:${-Math.random() * 6}s;
      --min:${0.1 + Math.random() * 0.4};
      ${t > 2.2 ? "box-shadow:0 0 6px 1px currentColor; color:var(--claro);" : ""}`;
    frag.appendChild(s);
  }
  for (let i = 0; i < 3; i++) {
    const f = document.createElement("span");
    f.className = "fugaz";
    f.style.cssText = `left:${55 + Math.random() * 40}%; top:${15 + i * 15}%; animation-delay:${2 + i * 3.2}s;`;
    frag.appendChild(f);
  }
  cielo.appendChild(frag);

  /* ---------- Efectos ligados al scroll (GSAP, si cargó) ---------- */
  if (window.gsap && window.ScrollTrigger && !reducido) {
    gsap.registerPlugin(ScrollTrigger);
    document.documentElement.classList.add("con-gsap");

    // El nombre se aleja suavemente al empezar a bajar
    gsap.fromTo(".portada__texto", { yPercent: 0, opacity: 1 }, {
      yPercent: -40, opacity: 0, ease: "none", immediateRender: false,
      scrollTrigger: { trigger: ".portada", start: "top top", end: "bottom top", scrub: true },
    });

    // La intro de la historia se ilumina palabra por palabra
    const intro = $("historia-intro");
    intro.innerHTML = intro.textContent
      .split(" ")
      .map((p) => `<span class="palabra">${p}</span>`)
      .join(" ");
    gsap.to(intro.querySelectorAll(".palabra"), {
      opacity: 1, stagger: 0.1, ease: "none",
      scrollTrigger: { trigger: intro, start: "top 85%", end: "bottom 45%", scrub: true },
    });

    // La línea de tiempo se va llenando
    gsap.to(".linea__progreso", {
      scaleY: 1, ease: "none",
      scrollTrigger: { trigger: "#capitulos", start: "top 60%", end: "bottom 60%", scrub: true },
    });

    // Paralaje suave dentro de cada polaroid
    document.querySelectorAll(".polaroid__img").forEach((el) => {
      gsap.fromTo(el, { "--py": "-2.5%" }, {
        "--py": "2.5%", ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    // La huella gigante del cielo sube lentamente
    gsap.fromTo(".cielo__huella", { yPercent: 30 }, {
      yPercent: -20, ease: "none",
      scrollTrigger: { trigger: ".cielo", start: "top bottom", end: "bottom bottom", scrub: true },
    });

    // Recalcular cuando terminen de cargar las fotos
    addEventListener("load", () => ScrollTrigger.refresh());
  }

  /* ---------- Revelado al hacer scroll ---------- */
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".revelar, .capitulo").forEach((el) => obs.observe(el));
})();
