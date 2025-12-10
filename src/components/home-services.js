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
          <a href="./src/page/services.html" class="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 bg-white text-[#C42100] font-bold rounded-md text-base sm:text-lg shadow-xl uppercase tracking-wider transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:scale-[1.03]">
            Ver Todos los Servicios
          </a>
        </div>

        <!-- Cards Derecha (60%) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

          <!-- Card 1: Vigilancia por Cámara -->
          <div class="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl p-5 sm:p-6 shadow-2xl hover:bg-opacity-40 transition duration-300 transform hover:scale-[1.02]">
            <div class="flex justify-center mb-3 sm:mb-4">
              <img src="/public/icon/camara.png" alt="Vigilancia por Cámara" class="h-10 w-10 sm:h-12 sm:w-12 filter drop-shadow-md">
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white text-center mb-2">Vigilancia por Cámara (CCTV)</h3>
            <!-- DESCRIPCIÓN MEJORADA -->
            <p class="text-white text-xs sm:text-sm text-center leading-snug">
              Implementamos sistemas de CCTV de alta definición con análisis de video inteligente. Ofrecemos grabación continua y monitoreo en tiempo real desde nuestra central, accesible remotamente.
            </p>
          </div>

          <!-- Card 2: Vigilancia Perímetro -->
          <div class="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl p-5 sm:p-6 shadow-2xl hover:bg-opacity-40 transition duration-300 transform hover:scale-[1.02]">
            <div class="flex justify-center mb-3 sm:mb-4">
              <img src="/public/icon/perimetro.png" alt="Vigilancia Perímetro" class="h-10 w-10 sm:h-12 sm:w-12 filter drop-shadow-md">
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white text-center mb-2">Vigilancia Perímetro</h3>
            <!-- DESCRIPCIÓN MEJORADA -->
            <p class="text-white text-xs sm:text-sm text-center leading-snug">
              Estrategias de seguridad física diseñadas para proteger los límites de tu propiedad. Incluye control de accesos riguroso, barreras físicas y sensores perimetrales avanzados.
            </p>
          </div>

          <!-- Card 3: Supervisión Constante -->
          <div class="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl p-5 sm:p-6 shadow-2xl hover:bg-opacity-40 transition duration-300 transform hover:scale-[1.02]">
            <div class="flex justify-center mb-3 sm:mb-4">
              <img src="/public/icon/supervisor.png" alt="Supervisión Constante" class="h-10 w-10 sm:h-12 sm:w-12 filter drop-shadow-md">
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white text-center mb-2">Supervisión Constante</h3>
            <!-- DESCRIPCIÓN MEJORADA -->
            <p class="text-white text-xs sm:text-sm text-center leading-snug">
              Contamos con un equipo de supervisores disponibles 24/7 que coordina las operaciones en sitio, realiza auditorías internas y responde inmediatamente ante cualquier emergencia reportada.
            </p>
          </div>

          <!-- Card 4: Rondas de Patrullaje -->
          <div class="bg-white bg-opacity-30 backdrop-blur-sm rounded-xl p-5 sm:p-6 shadow-2xl hover:bg-opacity-40 transition duration-300 transform hover:scale-[1.02]">
            <div class="flex justify-center mb-3 sm:mb-4">
              <img src="/public/icon/patrulla.png" alt="Rondas de Patrullaje" class="h-10 w-10 sm:h-12 sm:w-12 filter drop-shadow-md">
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-white text-center mb-2">Rondas de Patrullaje</h3>
            <!-- DESCRIPCIÓN MEJORADA -->
            <p class="text-white text-xs sm:text-sm text-center leading-snug">
              Patrullaje dinámico con vehículos de respuesta rápida, realizado por personal motorizado que verifica la seguridad en puntos críticos y provee asistencia inmediata si se requiere.
            </p>
          </div>

        </div>

      </div>
    </div>
  `;

  return section;
}