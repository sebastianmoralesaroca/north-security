import { Header } from '../components/page-header.js';
import { PortadaServicios } from '../components/services-portada.js';
import { LayoutAsimetrico } from '../components/services-rubros.js';
import { Colaboraciones } from '../components/page-partner.js';
import { SignUpPage } from '../components/page-form.js';
import { Footer } from '../components/page-footer.js';

// Obtener el contenedor principal
const app = document.getElementById('services-app');

// Función para renderizar la página de servicios
function renderServicesPage() {
  // Limpiar contenido previo
  app.innerHTML = '';

  // Agregar componentes
  app.appendChild(Header());
  app.appendChild(PortadaServicios());
  app.appendChild(LayoutAsimetrico());
  app.appendChild(Colaboraciones());

  // Aquí puedes agregar más elementos/secciones específicas de servicios

  app.appendChild(SignUpPage());
  app.appendChild(Footer());
}

// Renderizar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderServicesPage);
