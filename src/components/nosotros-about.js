export function NosotrosAbout() {
  const section = document.createElement('section');
  section.className = 'w-full bg-white py-12 font-ubuntu';

  section.innerHTML = `
    <div class="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">

      <!-- Main Card -->
      <div class="bg-gradient-to-br from-red-100 to-red-50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden min-h-[380px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">

          <!-- Left Side - Image -->
          <div class="relative h-48 sm:h-64 lg:h-full">
            <img
              src="/public/image/estadio.jpg"
              alt="Equipo de Seguridad Profesional"
              class="w-full h-full object-cover object-center"
            >
            <div class="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>

          <!-- Right Side - Content -->
          <div class="p-5 sm:p-6 md:p-8 flex flex-col justify-center items-start">

            <!-- Badge -->
            <div class="inline-flex items-center space-x-2 bg-[#C42100] text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-3 self-start shadow-lg">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Certificados OS10</span>
            </div>

            <!-- Title -->
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-redhat">
              North Security
            </h2>

            <!-- Stats Grid -->
            <div class="grid grid-cols-3 gap-2 sm:gap-3 mb-4 w-full">

              <!-- Stat 1 -->
              <div class="text-center">
                <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-[#C42100] mb-0.5 sm:mb-1">200+</div>
                <p class="text-[10px] sm:text-xs text-gray-600 leading-tight">Guardias certificados</p>
              </div>

              <!-- Stat 2 -->
              <div class="text-center">
                <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-[#C42100] mb-0.5 sm:mb-1">4+</div>
                <p class="text-[10px] sm:text-xs text-gray-600 leading-tight">Años de experiencia</p>
              </div>

              <!-- Stat 3 -->
              <div class="text-center">
                <div class="text-xl sm:text-2xl lg:text-3xl font-bold text-[#C42100] mb-0.5 sm:mb-1">24/7</div>
                <p class="text-[10px] sm:text-xs text-gray-600 leading-tight">Supervisión continua</p>
              </div>

            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-2 w-full">
              <a href="#form" class="bg-[#C42100] hover:bg-red-700 text-white font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs sm:text-sm text-center smooth-scroll">
                Solicitar Cotización
              </a>
              <a href="../../src/page/services.html" class="border-2 border-[#C42100] text-[#C42100] hover:bg-[#C42100] hover:text-white font-semibold px-4 sm:px-5 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm text-center">
                Conoce más
              </a>
            </div>

            <!-- Additional Info -->
            <p class="text-gray-500 text-[10px] sm:text-xs mt-3 leading-relaxed">

              Elige tus servicios, selecciona tu plan y prepárate para una seguridad sin igual
            </p>

          </div>

        </div>
      </div>

      <!-- About Section -->
      <div class="mt-8 sm:mt-10 md:mt-12 text-center max-w-4xl mx-auto px-4">
        <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-3 font-redhat">Acerca de North Security</h3>
        <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
         North Security es una empresa de seguridad integral y vanguardia, consolidada en el mercado con más de 4 años de experiencia al servicio de la protección de activos, personal e instalaciones a lo largo del territorio nacional. Nuestro liderazgo se sustenta en una férrea disciplina operativa y altos estándares de servicio, garantizando la tranquilidad de cada uno de nuestros clientes. Disponemos de un equipo humano robusto de más de 200 guardias uniformados, quienes son la primera línea de defensa de su negocio. Cada miembro ha sido rigurosamente seleccionado y cuenta con la obligatoria certificación OS10 de Carabineros de Chile, asegurando la formación más completa para manejar cualquier situación de riesgo o emergencia. Además, para reflejar nuestro compromiso total, todos nuestros colaboradores cuentan con seguros de vida y accidentes incluidos.

Nuestra eficacia operativa es total gracias a una estrategia que combina tecnología, personal y alianzas institucionales. Mantenemos una estrecha colaboración con Carabineros de Chile, OS10 y el IST (Instituto de Seguridad del Trabajo), garantizando la coordinación con la autoridad y el cumplimiento de los más altos estándares de prevención de riesgos. Ofrecemos cobertura avanzada a través de servicios especializados como la televigilancia y monitoreo 24/7 desde centrales de vigilancia, además de soluciones robustas de seguridad perimetral. La vigilancia física se garantiza mediante rondas proactivas y dinámicas y todo el servicio está respaldado por una supervisión constante 24/7 de supervisores experimentados que aseguran el correcto desempeño y la aplicación inmediata de los protocolos en sus instalaciones.
        </p>
      </div>

    </div>
  `;

  // Agregar smooth scroll para el botón de Cotización
  setTimeout(() => {
    const smoothScrollLinks = section.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, 0);

  return section;
}