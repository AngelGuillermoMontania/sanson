# En memoria de Sansón

Página estática (HTML + CSS + JS, sin build) lista para GitHub Pages.

## Cómo personalizarla

Todo se edita en **`js/datos.js`**:

- `nombre`, `fechas`, `apodo`
- `colores`: los 3 colores de su pelaje (`oscuro`, `calido`, `claro`)
- `portada`: las fotos que rotan arriba (tus favoritas)
- `historia.capitulos`: foto + título + texto de cada momento.
  Opcional: `video: "videos/archivo.mp4"` para agregar un video debajo del texto
  (se reproduce en silencio al estar en pantalla; se puede activar el sonido).
  En el texto, `\n\n` separa párrafos.
- `galeria.fotos`: el resto de las fotos (texto opcional)
- `familia.mensajes`: el mensaje de cada integrante (foto opcional)
- `despedida`: el mensaje final

Las fotos van en la carpeta **`fotos/`**. Usa los mismos nombres que pusiste en `datos.js`
(ojo con mayúsculas y la extensión: `.jpg` no es igual a `.JPG`).
Si una foto no existe, se muestra una huellita en su lugar.

Consejo: reduce las fotos a unos 1600 px de lado y menos de 500 KB para que cargue rápido.

## Verla en tu computadora

Abre `index.html` con doble clic, o mejor, con un servidor local:

```bash
npx serve .
```

## Publicar en GitHub Pages

```bash
git init
git add .
git commit -m "En memoria de Sansón"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/sanson.git
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
En un par de minutos estará en `https://TU_USUARIO.github.io/sanson/`.
