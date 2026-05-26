import { Header } from '../components/page-header.js';
import { Portada } from '../components/home-portada.js';
import { CardPrincipal } from '../components/home-cards.js';
import { Clientes } from '../components/page-clientes.js';
import { ServiciosResumen } from '../components/home-services.js';
import { Colaboraciones } from '../components/page-partner.js';
import { SignUpPage } from '../components/page-form.js';
import { Footer } from '../components/page-footer.js';

// Obtener el contenedor principal
const app = document.getElementById('app');

// Función para renderizar la página de inicio
function renderHomePage() {
  // Limpiar contenido previo
  app.innerHTML = '';

  // Agregar componentes
  app.appendChild(Header());
  app.appendChild(Portada());
  app.appendChild(CardPrincipal());
  app.appendChild(Clientes());
  app.appendChild(ServiciosResumen());
  app.appendChild(Colaboraciones());
  app.appendChild(SignUpPage());
  app.appendChild(Footer());
}

// Renderizar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderHomePage);
