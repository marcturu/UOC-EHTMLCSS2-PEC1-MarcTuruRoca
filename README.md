# 🦖 Kaua'i - Where Jurassic Park Was Born

Sitio web de una sola página sobre Kaua'i, la isla hawaiana que sirvió como localización de rodaje de Jurassic Park.

Desarrollado como parte de la asignatura Herramientas HTML y CSS II del Máster Universitario de Desarrollo de Sitios y Aplicaciones Web de la [Universitat Oberta de Catalunya](https://www.uoc.edu), utilizando la versión 3.x de [UOC Boilerplate](https://github.com/uoc-advanced-html-css/uoc-boilerplate) como plantilla de inicio - una base moderna de desarrollo frontend que incluye Parcel, un compilador de Sass, un transpilador ES6, minificadores, un transformador de imágenes y herramientas de desarrollo.
Creado por Jordi Tarrida (jorditarrida@uoc.edu).

### Secciones

- **Hero** — vídeo a pantalla completa con título animado
- **The Garden Isle** — introducción a la isla y su conexión con Jurassic Park
- **Filming Locations** — 4 localizaciones reales donde se rodó JP, con enlaces a Google Maps
- **Interactive Map** — mapa interactivo con **Leaflet** y marcadores personalizados para cada localización
- **Photo Gallery** — carrusel táctil con **Swiper** y fotografías de Kaua'i
- **Plan Your Trip** — información práctica de viaje (cómo llegar, mejor época, cómo moverse)
- **Footer** — créditos del proyecto

### Metodología

- **ITCSS** — arquitectura de estilos (settings, tools, generic, elements, objects, components, utilities)
- **BEM** — convención de nomenclatura para clases CSS
- **OOCSS** — clases de objetos reutilizables (`o-container`, `o-section`)
- Diseño responsive *mobile-first*

## Desarrollado con

### Requisitos

[Node.js](http://nodejs.org/) >= 20.x

### Núcleo

| Tecnología | Uso |
| --- | --- |
| [Parcel v2](https://parceljs.org) | Empaquetador - servidor de desarrollo, build de producción, pipeline de assets |
| [Sass/SCSS](https://sass-lang.com) | Preprocesador CSS - variables, anidado, funciones, mixins, parciales (`@parcel/transformer-sass`) |
| [PostCSS](https://postcss.org/) | Transpilación CSS - prefijos de proveedor y compatibilidad con navegadores antiguos (`@parcel/transformer-postcss`, `postcss-preset-env`) |
| [PostHTML](https://github.com/posthtml/posthtml) | Parciales HTML mediante `posthtml-include` (`@parcel/transformer-posthtml`) |
| [Stylelint](https://stylelint.io/) | Linting de SCSS con reglas personalizadas BEM y SCSS (`stylelint-config-prettier-scss`, `stylelint-config-recommended-scss`, `stylelint-scss`) configurado en `.stylelintrc` |

### Optimización (build de producción)

| Tecnología | Uso |
| --- | --- |
| [`lightningcss`](https://github.com/parcel-bundler/lightningcss) | Minificación y optimización de CSS (`@parcel/optimizer-css`) |
| [`htmlnano`](https://github.com/posthtml/htmlnano) | Minificación de HTML (`@parcel/optimizer-htmlnano`) |
| [SWC](https://swc.rs/) | Minificación de JavaScript (`@parcel/optimizer-swc`) |
| [Babel](https://babeljs.io/) | Transpilación de JavaScript para navegadores antiguos (`@parcel/transformer-babel`) |
| [`sharp`](https://sharp.pixelplumbing.com/) | Transformación de imágenes y conversión a WebP (`@parcel/transformer-image`) |

### Dependencias

| Dependencia | Uso |
| --- | --- |
| [Lenis](https://lenis.studiofreight.com/) | Scroll suave `"lenis": "^1.3.21"` |
| [Leaflet](https://leafletjs.com/) | Mapa interactivo `"leaflet": "^1.9.4"` |
| [Swiper](https://swiperjs.com/) | Carrusel táctil `"swiper": "^12.1.3"` |
| [AOS](https://michalsnik.github.io/aos/) | Animaciones al hacer scroll `"aos": "^2.3.4"` |
| [Font Awesome](https://fontawesome.com/) | Iconos `"@fortawesome/fontawesome-free": "^7.2.0"` |

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo en http://localhost:8123 con recarga en vivo |
| `npm run build` | Compila y optimiza los archivos para producción en `dist/` |
| `npm run clean` | Elimina la carpeta `dist/` y las cachés |
| `npm run stylelint` | Valida los archivos SCSS según las reglas configuradas |

## Estructura del proyecto

```
src/
├── index.html
├── views/                  # Parciales PostHTML
│   ├── header.html
│   ├── hero.html
│   ├── about.html
│   ├── locations.html
│   ├── map.html
│   ├── gallery.html
│   ├── visit.html
│   └── footer.html
├── assets/
│   ├── fonts/              # Fuentes autoalojadas (Unbounded, DM Sans)
│   ├── images/             # Imágenes optimizadas en WebP
│   ├── videos/             # Vídeo del hero (MP4)
│   ├── scripts/
│   │   ├── main.js
│   │   └── modules/        # Módulos JS (lenis, aos, swiper, leaflet, header)
│   └── styles/
│       ├── main.scss
│       ├── _dependencies.scss
│       ├── settings/       # Variables, fuentes
│       ├── tools/          # Funciones, mixins
│       ├── generic/        # Reset
│       ├── elements/       # Estilos base
│       ├── objects/        # Objetos OOCSS
│       ├── components/     # Componentes BEM
│       └── utilities/      # Clases de utilidad
```

## Despliegue

El proyecto está desplegado en [Netlify](https://netlify.com) desde la rama `main`:
https://uoc-ehtmlcss2-pec1-marctururoca.netlify.app/

- **Comando de build:** `npm run build`
- **Directorio de publicación:** `dist`

---

Marc Turu Roca (https://github.com/marcturu/UOC-EHTMLCSS2-PEC1-MarcTuruRoca)
*UOC - PEC1 · Herramientas HTML y CSS II · 2025-2026*
