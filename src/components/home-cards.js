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
            <img src="/public/icon/experiencia.png" alt="Experiencia" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 text-center">Experiencia</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed">Profesionales con formación continua y años de experiencia en seguridad privada, garantizando tu tranquilidad.</p>
        </div>

        <!-- Card 2: Dotación -->
        <div class="bg-white rounded-lg shadow-md p-6 sm:p-7 md:p-8 hover:shadow-xl transition-shadow duration-300">
          <div class="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <img src="/public/icon/guardia.png" alt="Tecnología" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 text-center">Dotación</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed">Más de 200 profesionales de seguridad listos para desplegarse en tus eventos, instalaciones corporativas, obras o cualquier requerimiento especial.</p>
        </div>

        <!-- Card 3: Compromiso -->
        <div class="bg-white rounded-lg shadow-md p-6 sm:p-7 md:p-8 hover:shadow-xl transition-shadow duration-300">
          <div class="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <img src="/public/icon/compromiso.png" alt="Compromiso" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-4 text-center">Compromiso</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed">Comprometidos con tu protección 24/7. Estamos contigo en todo momento, ofreciendo respuesta inmediata cuando más lo necesitas.</p>
        </div>

      </div>
    </div>
  `;

  return section;
}