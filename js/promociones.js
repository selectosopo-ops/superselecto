/**
 * Supermercado Selecto - Sistema de Promociones
 * Estructura de datos dinámica preparada para Google Sheets / CMS
 */

const promociones = [
  {
    id: 1,
    titulo: "Especiales del Mercado Fresco",
    categoria: "Cosecha",
    descripcion: "Cosecha recogida de fincas de Sopó, Briceño y Guasca. Hasta un 30% de ahorro directo en frutas y verduras seleccionadas.",
    vigencia: "Lun a Dom",
    etiquetaAhorro: "Hasta -30%",
    imagen: "images/promociones/canasta-cosecha.png",
    alt: "Canasta de frutas y verduras frescas de Sopó",
    mensajeWhatsApp: "Hola, quisiera consultar los precios del Especial de Mercado Fresco en Sopó."
  },
  {
    id: 2,
    titulo: "Ofertas de la semana",
    categoria: "Semanal",
    descripcion: "Productos seleccionados con precios especiales en despensa y abarrotes de primera necesidad familiar.",
    vigencia: "Vigente hasta el domingo",
    etiquetaAhorro: "Hasta -25%",
    imagen: "images/promociones/promo-despensa.jpg",
    alt: "Estanterías de despensa y abarrotes familiares",
    mensajeWhatsApp: "Hola, quisiera consultar las Ofertas de la semana de Supermercado Selecto."
  },
  {
    id: 3,
    titulo: "Especial del mes",
    categoria: "Mes",
    descripcion: "Encuentra oportunidades para hacer rendir tus compras mensuales de aseo, limpieza y cuidado del hogar.",
    vigencia: "Todo el mes en curso",
    etiquetaAhorro: "Combos Especiales",
    imagen: "images/promociones/promo-aseo.jpg",
    alt: "Pasillo de artículos de aseo y cuidado del hogar",
    mensajeWhatsApp: "Hola, deseo saber más del Especial del mes para el hogar."
  },
  {
    id: 4,
    titulo: "Mega Week en Marcas Favoritas",
    categoria: "Semanal",
    descripcion: "Grandes descuentos en lácteos, arroz, aceites y despensa de marcas colombianas reconocidas.",
    vigencia: "Hasta agotar existencias",
    etiquetaAhorro: "Hasta 15% DTO",
    imagen: "images/promociones/banner-mega-week.webp",
    alt: "Mega Week marcas favoritas",
    mensajeWhatsApp: "Hola, quisiera conocer las promociones de marcas favoritas."
  },
  {
    id: 5,
    titulo: "Tardes de Pasabocas y Snacks",
    categoria: "Semanal",
    descripcion: "Ahorra en variedad de pasabocas, papas y meriendas para compartir con toda la familia.",
    vigencia: "Viernes a Domingo",
    etiquetaAhorro: "25% DTO",
    imagen: "images/promociones/promo-pasabocas.webp",
    alt: "Promoción en pasabocas",
    mensajeWhatsApp: "Hola, quisiera consultar la promo en pasabocas."
  },
  {
    id: 6,
    titulo: "Salsas y Aceites de Cocina",
    categoria: "Hogar",
    descripcion: "Opciones de marcas tradicionales para sazonar tus recetas cotidianas con el mejor precio.",
    vigencia: "Vigente esta quincena",
    etiquetaAhorro: "30% DTO",
    imagen: "images/promociones/promo-salsas-aceites.webp",
    alt: "Promoción salsas y aceites",
    mensajeWhatsApp: "Hola, quisiera información sobre la promoción de salsas y aceites."
  }
];

function renderPromociones(filtro = "todas") {
  const container = document.getElementById("promotions-grid");
  if (!container) return;

  const filtradas = filtro === "todas"
    ? promociones
    : promociones.filter(p => p.categoria.toLowerCase() === filtro.toLowerCase());

  container.innerHTML = filtradas.map(p => `
    <article class="liquid-glass-card" style="padding: 1.25rem; display: flex; flex-direction: column; height: 100%;">
      <div style="position: relative; width: 100%; height: 210px; border-radius: 0.85rem; overflow: hidden; background-color: var(--surface-container-low);">
        <img src="${p.imagen}" alt="${p.alt}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
        <span style="position: absolute; top: 0.75rem; left: 0.75rem; font-size: 11px; font-weight: 700; background: rgba(255,255,255,0.9); backdrop-filter: blur(8px); color: var(--secondary); padding: 0.25rem 0.75rem; border-radius: 9999px; box-shadow: 0 2px 6px rgba(0,0,0,0.06);">
          ${p.categoria}
        </span>
        <span style="position: absolute; bottom: 0.75rem; right: 0.75rem; font-size: 11px; font-weight: 600; background: rgba(39,49,60,0.85); backdrop-filter: blur(8px); color: #ffffff; padding: 0.2rem 0.6rem; border-radius: 0.35rem; display: flex; align-items: center; gap: 4px;">
          <span class="material-symbols-outlined" style="font-size: 13px;">schedule</span> ${p.vigencia}
        </span>
      </div>
      <div style="display: flex; flex-direction: column; flex: 1; margin-top: 1rem;">
        <h3 style="font-size: 20px; font-weight: 700; color: var(--on-surface); line-height: 1.3;">
          ${p.titulo}
        </h3>
        <p style="font-size: 14px; color: var(--on-surface-variant); margin-top: 0.5rem; flex: 1; line-height: 1.5;">
          ${p.descripcion}
        </p>
        <div style="margin-top: 1.25rem; padding: 0.75rem 1rem; background: var(--surface-container-low); border-radius: 0.75rem; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; flex-direction: column;">
            <span style="font-size: 11px; color: var(--tertiary); font-weight: 600;">Descuento</span>
            <span style="font-size: 15px; font-weight: 700; color: var(--secondary);">${p.etiquetaAhorro}</span>
          </div>
          <a href="https://wa.me/573100000000?text=${encodeURIComponent(p.mensajeWhatsApp)}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding: 0.5rem 1rem; font-size: 13px; border-radius: 0.5rem;">
            <span class="material-symbols-outlined" style="font-size: 16px;">chat</span>
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderPromociones();

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.style.backgroundColor = "rgba(255,255,255,0.85)";
        b.style.color = "var(--on-surface-variant)";
      });
      btn.style.backgroundColor = "var(--primary)";
      btn.style.color = "#ffffff";

      const cat = btn.getAttribute("data-category");
      renderPromociones(cat);
    });
  });
});
