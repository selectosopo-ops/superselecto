# Supermercado Selecto — Sitio Web Estático (Sopó, Cundinamarca)

Sitio web institucional y de promociones para **Supermercado Selecto**, un supermercado local en **Sopó, Cundinamarca, Colombia**.

Este proyecto fue desarrollado tomando como base el diseño aprobado en **Google Stitch**, aplicando la estética **Liquid Glass (Refined Glassmorphism)** con una paleta de colores inspirada en la frescura y la tierra sabanera (`#39AA35`, `#237A27`, `#EAF7E9`).

---

## 🚀 Características Principales

1. **100% Recursos Locales y Autocontenido**:
   - Sin dependencias de CDNs externas para CSS o JS.
   - Fuentes tipográficas locales en formato TrueType (`Plus Jakarta Sans` y `Material Symbols Outlined`) servidas vía `@font-face` en `css/styles.css`.
   - Todas las imágenes almacenadas y optimizadas dentro de `images/`.
   - Funciona sin conexión a internet desde `localhost`, doble clic en cualquier navegador, o subido a un hosting estático (GitHub Pages, Vercel, Netlify, cPanel, etc.).

2. **Estructura Multipágina (4 Páginas)**:
   - `index.html`: Portada institucional ("Todo lo que necesitas, cerca de ti"), valores locales en Sopó, categorías destacadas y promociones principales.
   - `promociones.html`: Vitrina dinámica de ofertas ("Especiales del Mercado Fresco", promociones semanales, de temporada y del hogar) con filtros por categoría en tiempo real.
   - `quienes-somos.html`: Historia del supermercado, Misión, Visión y Política de Calidad con pilares visuales.
   - `contacto.html`: Canales de atención directa (con placeholders exactos: `[TELÉFONO]`, `[WHATSAPP]`, `[CORREO]`, `[HORARIO]`, `[DIRECCIÓN]`), formulario de captura de leads y contenedor embebido de Google Maps.

3. **Formulario de Leads preparado para Google Sheets**:
   - Los campos del formulario (`nombre`, `telefono`, `email`, `motivo`, `mensaje`, `politica`) cuentan con atributos `id`, `name`, `type` y `required` estandarizados.
   - La lógica en `js/main.js` recolecta los datos mediante `FormData` y simula el feedback con animación fluida, dejando documentado el punto exacto para ingresar el endpoint de **Google Apps Script Web App**.

---

## 📁 Estructura del Proyecto

```text
d:/Pagina Selecto/
├── index.html
├── promociones.html
├── quienes-somos.html
├── contacto.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── main.js
│   └── promociones.js
│
├── images/
│   ├── logo/
│   │   ├── logo-nav.png
│   │   ├── logo-selecto.png
│   │   └── logo-selectos-market.jpg
│   ├── home/
│   │   ├── hero-mercado-sopo.png
│   │   ├── promo-canasta-hero.jpg
│   │   └── promo-frutas-verduras.png
│   ├── promociones/
│   │   ├── banner-mega-week.webp
│   │   ├── canasta-cosecha.png
│   │   ├── promo-aseo.jpg
│   │   ├── promo-despensa.jpg
│   │   ├── promo-pasabocas.webp
│   │   └── promo-salsas-aceites.webp
│   ├── quienes-somos/
│   │   ├── historia-mercado.png
│   │   └── logo-quienes-somos.png
│   ├── contacto/
│   │   └── tienda-fachada.png
│   └── general/
│       └── logo-simbolo.png
│
├── fonts/
│   ├── MaterialSymbolsOutlined.ttf
│   ├── PlusJakartaSans-Bold.ttf
│   ├── PlusJakartaSans-Medium.ttf
│   ├── PlusJakartaSans-Regular.ttf
│   └── PlusJakartaSans-SemiBold.ttf
│
├── favicon/
│   └── favicon.png
│
└── README.md
```

---

## 🛠️ Cómo Probar Localmente

1. Puedes abrir cualquiera de los archivos `.html` (`index.html`, `promociones.html`, `quienes-somos.html`, `contacto.html`) directamente con doble clic en tu explorador de archivos.
2. O levantarlo con cualquier servidor local simple:
   - Con Python: `python -m http.server 8080`
   - Con VS Code: Extensión *Live Server*
   - Con Node / npx: `npx serve .`

---

## 📝 Conexión a Google Sheets (Google Apps Script)

Para conectar el formulario de `contacto.html` a una hoja de cálculo de Google:
1. Abre Google Sheets y ve a **Extensiones > Apps Script**.
2. Pega una función `doPost(e)` que reciba el JSON o formulario y agregue una fila con `appendRow()`.
3. Haz clic en **Implementar > Nueva implementación** como Aplicación web (acceso: cualquier usuario).
4. En `js/main.js`, descomenta la llamada `fetch()` e inserta la URL generada.
