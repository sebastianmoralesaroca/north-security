export function CardPrincipal() {
  const section = document.createElement('section');
  section.id = 'card-principal';
  section.className = 'w-full bg-transparent pt-[1rem] pb-16 -mt-32 relative z-10';

  section.innerHTML = `
    <div class="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">

        <!-- Card 1: Experiencia -->
        <div class="bg-white rounded-lg shadow-md p-6 sm:p-7 md:p-8 hover:shadow-xl transition-shadow duration-300">
          <div class="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <img src="/public/icon/edificio.png" alt="Instalaciones" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 text-center">Instalaciones</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed">Protección integral para edificios, oficinas, condominios y recintos privados, con control de acceso y vigilancia permanente.</p>
        </div>

        <!-- Card 2: Dotación -->
        <div class="bg-white rounded-lg shadow-md p-6 sm:p-7 md:p-8 hover:shadow-xl transition-shadow duration-300">
          <div class="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <img src="/public/icon/escenario.png" alt="Eventos" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 text-center">Eventos</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed">Cobertura de seguridad para eventos masivos y privados, con control de ingreso, resguardo perimetral y apoyo operativo en terreno.</p>
        </div>

        <!-- Card 3: Compromiso -->
        <div class="bg-white rounded-lg shadow-md p-6 sm:p-7 md:p-8 hover:shadow-xl transition-shadow duration-300">
          <div class="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <img src="/public/icon/guardia.png" alt="Guardias de Seguridad" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 text-center">Guardias de Seguridad</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed">Personal capacitado para resguardar personas e instalaciones, con presencia disuasiva, respuesta rápida y supervisión continua.</p>
        </div>

      </div>
    </div>
  `;

  return section;
}
