export function ServiciosResumen() {
  const section = document.createElement('section');
  section.id = 'servicios-resumen';
  // El fondo rojo oscuro y la altura mínima se mantienen
  section.className = 'w-full bg-[#8B0000] py-16 h-auto flex items-center min-h-[600px]';

  section.innerHTML = `
    <div class="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 md:gap-10 lg:gap-12 items-center">

        <!-- Contenido Izquierda (40%) -->
        <div class="text-white">
          <h2 class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-5 md:mb-6 leading-tight">
            Protección y Seguridad Eficiente con <span class="text-black">North Security</span>
          </h2>
          <!-- DESCRIPCIÓN PRINCIPAL ENRIQUECIDA -->
          <p class="text-base sm:text-lg mb-6 sm:mb-7 md:mb-8 leading-relaxed">
            Somos líderes en seguridad, ofreciendo soluciones especializadas de vigilancia con tecnología avanzada y personal altamente capacitado. Garantizamos protección integral, eficiencia operativa y tranquilidad las 24 horas para tu empresa o propiedad, creando un entorno seguro y controlado.
          </p>
          <a href="#form" class="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-white text-[#C42100] font-bold rounded-md text-base sm:text-lg shadow-xl uppercase tracking-wider transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:scale-[1.03]">
            Solicitar Información
          </a>
        </div>

        <!-- Cards Derecha (60%) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

          <!-- Card 1: Empresa Certificada OS10 -->
          <div class="rounded-xl p-5 sm:p-6 shadow-2xl backdrop-blur-sm transition duration-300 transform hover:scale-[1.02]" style="background: rgba(196, 111, 111, 0.88); border: 1px solid rgba(255, 255, 255, 0.16);">
            <div class="flex justify-center mb-3 sm:mb-4">
              <img src="/public/icon/certificado.png" alt="Empresa Certificada OS10" class="h-10 w-10 sm:h-12 sm:w-12 opacity-95">
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white text-center mb-2">Empresa Certificada OS10</h3>
            <p class="text-white text-sm sm:text-base text-center leading-relaxed">
              Contamos con certificación OS10 vigente, cumpliendo con la normativa exigida para entregar servicios de seguridad privada con respaldo legal, operativo y profesional.
            </p>
          </div>

          <!-- Card 2: Supervisión Constante -->
          <div class="rounded-xl p-5 sm:p-6 shadow-2xl backdrop-blur-sm transition duration-300 transform hover:scale-[1.02]" style="background: rgba(196, 111, 111, 0.88); border: 1px solid rgba(255, 255, 255, 0.16);">
            <div class="flex justify-center mb-3 sm:mb-4">
              <img src="/public/icon/buscar.png" alt="Supervisión Constante" class="h-10 w-10 sm:h-12 sm:w-12 opacity-95">
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white text-center mb-2">Supervisión Constante</h3>
            <p class="text-white text-sm sm:text-base text-center leading-relaxed">
              Mantenemos control permanente de cada operación con supervisores atentos a protocolos, incidencias y cumplimiento de los estándares de seguridad en todo momento.
            </p>
          </div>

          <!-- Card 3: Personal Capacitado -->
          <div class="rounded-xl p-5 sm:p-6 shadow-2xl backdrop-blur-sm transition duration-300 transform hover:scale-[1.02]" style="background: rgba(196, 111, 111, 0.88); border: 1px solid rgba(255, 255, 255, 0.16);">
            <div class="flex justify-center mb-3 sm:mb-4">
              <img src="/public/icon/guardiablanco.png" alt="Personal Capacitado" class="h-10 w-10 sm:h-12 sm:w-12 opacity-95">
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white text-center mb-2">Personal Capacitado</h3>
            <p class="text-white text-sm sm:text-base text-center leading-relaxed">
              Disponemos de guardias capacitados y certificados para responder con criterio, presencia profesional y preparación ante distintos escenarios operativos.
            </p>
          </div>

          <!-- Card 4: Seguro de Vida y Responsabilidad Civil -->
          <div class="rounded-xl p-5 sm:p-6 shadow-2xl backdrop-blur-sm transition duration-300 transform hover:scale-[1.02]" style="background: rgba(196, 111, 111, 0.88); border: 1px solid rgba(255, 255, 255, 0.16);">
            <div class="flex justify-center mb-3 sm:mb-4">
              <img src="/public/icon/seguro-de-vida.png" alt="Seguro de Vida y Responsabilidad Civil" class="h-10 w-10 sm:h-12 sm:w-12 opacity-95">
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white text-center mb-2">Seguro de Vida y Responsabilidad Civil</h3>
            <p class="text-white text-sm sm:text-base text-center leading-relaxed">
              Nuestros servicios cuentan con respaldo de seguro de vida y responsabilidad civil, entregando mayor tranquilidad y cobertura ante eventualidades operativas.
            </p>
          </div>

        </div>

      </div>
    </div>
  `;

  return section;
}
