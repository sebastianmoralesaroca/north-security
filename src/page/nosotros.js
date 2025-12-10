import { Header } from '../components/page-header.js';
import { PortadaNosotros } from '../components/nosotros-portada.js';
import { NosotrosAbout } from '../components/nosotros-about.js';
import { NosotrosEquipo } from '../components/nosotros-equipo.js';
import { Clientes } from '../components/page-clientes.js';
import { SignUpPage } from '../components/page-form.js';
import { Footer } from '../components/page-footer.js';

// Obtener el contenedor principal
const app = document.getElementById('app');

// Función para renderizar la página de nosotros
function renderNosotrosPage() {
  // Limpiar contenido previo
  app.innerHTML = '';

  // Agregar componentes
  app.appendChild(Header());
  app.appendChild(PortadaNosotros());
  app.appendChild(NosotrosAbout());
  app.appendChild(NosotrosEquipo());
  app.appendChild(Clientes());
  app.appendChild(SignUpPage());
  app.appendChild(Footer());
}

// Renderizar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderNosotrosPage);
