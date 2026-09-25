/**
 * Supermercado Selecto - Lógica Global y Navegación
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';

      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('open');

      const icon = menuBtn.querySelector('.material-symbols-outlined');

      if (icon) {
        icon.textContent = mobileNav.classList.contains('open')
          ? 'close'
          : 'menu';
      }
    });
  }


  // 2. Form Submission Handler - Google Sheets
  const leadForm = document.getElementById('leadForm');

  if (leadForm) {

    leadForm.addEventListener('submit', async (e) => {

      e.preventDefault();

      const submitBtn = document.getElementById('submitBtn');
      const successMsg = document.getElementById('formSuccessMessage');


      // Cambiar botón mientras se envía
      if (submitBtn) {
        submitBtn.disabled = true;

        submitBtn.innerHTML = `
          <span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">sync</span>
          <span>Enviando información...</span>
        `;
      }


      // =========================================================
      // URL DE GOOGLE APPS SCRIPT
      // PEGA AQUÍ LA URL QUE TERMINA EN /exec
      // =========================================================

      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwoNJF5ZwZcuH-6eUa6cucaP-Vhb07y_84bLqAZE5WmkYPzmlvoVBXuzCaSzHXb529g/exec';


      // Recoger los datos del formulario
      const formData = new FormData(leadForm);


      try {

        // Enviar datos a Google Apps Script
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });


        // Limpiar formulario
        leadForm.reset();


        // Restaurar botón
        if (submitBtn) {
          submitBtn.disabled = false;

          submitBtn.innerHTML = `
            <span class="material-symbols-outlined">send</span>
            <span>Enviar información</span>
          `;
        }


        // Mostrar mensaje de éxito
        if (successMsg) {

          successMsg.style.display = 'flex';

          successMsg.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });


          // Ocultar mensaje después de 8 segundos
          setTimeout(() => {
            successMsg.style.display = 'none';
          }, 8000);

        }

      } catch (error) {

        console.error(
          'Error al enviar el formulario:',
          error
        );


        // Restaurar botón
        if (submitBtn) {
          submitBtn.disabled = false;

          submitBtn.innerHTML = `
            <span class="material-symbols-outlined">send</span>
            <span>Enviar información</span>
          `;
        }


        // Avisar al usuario
        alert(
          'No fue posible enviar la información. Por favor, inténtalo nuevamente.'
        );

      }

    });

  }

});