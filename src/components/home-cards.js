export function CardPrincipal() {
  const section = document.createElement('section');
  section.id = 'card-principal';
  section.className = 'w-full bg-transparent pt-[1rem] pb-16 -mt-32 relative z-10';

  section.innerHTML = `
    <div class="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">

        <!-- Card 1: Experiencia -->
        <div class="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[430px]">
          <div class="flex justify-center mb-3 sm:mb-4 md:mb-5">
            <img src="/public/icon/edificio.png" alt="Instalaciones" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center">Instalaciones</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-1">Protección integral para edificios, oficinas, condominios y recintos privados, con control de acceso y vigilancia permanente.</p>
          <a href="#form" class="mt-auto inline-flex items-center justify-center self-center smooth-scroll" style="margin-top: 1.25rem; padding: 0.75rem 1.75rem; background: #e43100; color: #ffffff; border: 2px solid #e43100; border-radius: 0.375rem; font-size: 0.95rem; font-weight: 700; text-decoration: none; line-height: 1;">Cotizar</a>
        </div>

        <!-- Card 2: Eventos -->
        <div class="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[430px]">
          <div class="flex justify-center mb-3 sm:mb-4 md:mb-5">
            <img src="/public/icon/escenario.png" alt="Eventos" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center">Eventos</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-1">Cobertura de seguridad para eventos masivos y privados, con control de ingreso, resguardo perimetral y apoyo operativo en terreno.</p>
          <a href="#form" class="mt-auto inline-flex items-center justify-center self-center smooth-scroll" style="margin-top: 1.25rem; padding: 0.75rem 1.75rem; background: #e43100; color: #ffffff; border: 2px solid #e43100; border-radius: 0.375rem; font-size: 0.95rem; font-weight: 700; text-decoration: none; line-height: 1;">Cotizar</a>
        </div>

        <!-- Card 3: Escolta -->
        <div class="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[430px]">
          <div class="flex justify-center mb-3 sm:mb-4 md:mb-5">
            <img src="/public/icon/escolta.png" alt="Escolta" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(99%)_saturate(6952%)_hue-rotate(1deg)_brightness(105%)_contrast(118%)]">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center">Escolta</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-1">Brindamos una escolta especializada para artistas y transporte de carga crítica, garantizando seguridad, puntualidad y protección táctica permanente.</p>
          <a href="#form" class="mt-auto inline-flex items-center justify-center self-center smooth-scroll" style="margin-top: 1.25rem; padding: 0.75rem 1.75rem; background: #e43100; color: #ffffff; border: 2px solid #e43100; border-radius: 0.375rem; font-size: 0.95rem; font-weight: 700; text-decoration: none; line-height: 1;">Cotizar</a>
        </div>

        <!-- Card 4: Monitoreo -->
        <div class="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[430px]">
          <div class="flex justify-center mb-3 sm:mb-4 md:mb-5">
            <img src="/public/icon/cctv.png" alt="Monitoreo CCTV" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(99%)_saturate(6952%)_hue-rotate(1deg)_brightness(105%)_contrast(118%)]">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center">Monitoreo CCTV</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-1">Vigila perímetros y accesos mediante monitoreo constante para detectar riesgos, alertar anomalías y asegurar registros digitales.</p>
          <a href="#form" class="mt-auto inline-flex items-center justify-center self-center smooth-scroll" style="margin-top: 1.25rem; padding: 0.75rem 1.75rem; background: #e43100; color: #ffffff; border: 2px solid #e43100; border-radius: 0.375rem; font-size: 0.95rem; font-weight: 700; text-decoration: none; line-height: 1;">Cotizar</a>
        </div>

        <!-- Card 5: Proteccion de Personas Importantes -->
        <div class="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[430px]">
          <div class="flex justify-center mb-3 sm:mb-4 md:mb-5">
            <img src="/public/icon/escolta.png" alt="Proteccion de Personas Importantes" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(99%)_saturate(6952%)_hue-rotate(1deg)_brightness(105%)_contrast(118%)]">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center">Proteccion de Personas Importantes PPI</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-1">Servicio especializado de proteccion cercana para ejecutivos, autoridades y figuras publicas, con evaluacion de riesgos, planificacion de rutas y resguardo permanente.</p>
          <a href="#form" class="mt-auto inline-flex items-center justify-center self-center smooth-scroll" style="margin-top: 1.25rem; padding: 0.75rem 1.75rem; background: #e43100; color: #ffffff; border: 2px solid #e43100; border-radius: 0.375rem; font-size: 0.95rem; font-weight: 700; text-decoration: none; line-height: 1;">Cotizar</a>
        </div>

        <!-- Card 6: Propiedades en Peligro de Toma -->
        <div class="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[430px]">
          <div class="flex justify-center mb-3 sm:mb-4 md:mb-5">
            <img src="/public/icon/edificio.png" alt="Propiedades en Peligro de Toma" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center">Propiedades en Peligro de Toma</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-1">Protegemos inmuebles expuestos a ocupaciones irregulares mediante presencia disuasiva, control de accesos, patrullaje preventivo y respuesta rapida ante incidentes.</p>
          <a href="#form" class="mt-auto inline-flex items-center justify-center self-center smooth-scroll" style="margin-top: 1.25rem; padding: 0.75rem 1.75rem; background: #e43100; color: #ffffff; border: 2px solid #e43100; border-radius: 0.375rem; font-size: 0.95rem; font-weight: 700; text-decoration: none; line-height: 1;">Cotizar</a>
        </div>

        <!-- Card 7: Seguridrone -->
        <div class="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[430px]">
          <div class="flex justify-center mb-3 sm:mb-4 md:mb-5">
            <img src="/public/icon/zumbido.png" alt="Seguridrone" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(99%)_saturate(6952%)_hue-rotate(1deg)_brightness(105%)_contrast(118%)]">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center">Seguridrone</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-1">Vigilancia aerea con drones para inspeccionar grandes superficies, reforzar rondas perimetrales, registrar evidencia visual y mejorar la deteccion temprana de amenazas.</p>
          <a href="#form" class="mt-auto inline-flex items-center justify-center self-center smooth-scroll" style="margin-top: 1.25rem; padding: 0.75rem 1.75rem; background: #e43100; color: #ffffff; border: 2px solid #e43100; border-radius: 0.375rem; font-size: 0.95rem; font-weight: 700; text-decoration: none; line-height: 1;">Cotizar</a>
        </div>

        <!-- Card 8: Guardias Tacticos -->
        <div class="bg-white rounded-lg shadow-md p-5 sm:p-6 md:p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full min-h-[430px]">
          <div class="flex justify-center mb-3 sm:mb-4 md:mb-5">
            <img src="/public/icon/guardia.png" alt="Guardias Tacticos" class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 [filter:brightness(0)_saturate(100%)_invert(16%)_sepia(99%)_saturate(6952%)_hue-rotate(1deg)_brightness(105%)_contrast(118%)]">
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-blue-900 mb-2 sm:mb-3 text-center">Guardias Tacticos</h3>
          <p class="text-sm sm:text-base text-gray-600 text-center leading-relaxed flex-1">Equipo entrenado para escenarios de mayor exigencia, con capacidad de control, disuasion y reaccion coordinada en recintos sensibles, eventos y operaciones criticas.</p>
          <a href="#form" class="mt-auto inline-flex items-center justify-center self-center smooth-scroll" style="margin-top: 1.25rem; padding: 0.75rem 1.75rem; background: #e43100; color: #ffffff; border: 2px solid #e43100; border-radius: 0.375rem; font-size: 0.95rem; font-weight: 700; text-decoration: none; line-height: 1;">Cotizar</a>
        </div>
      </div>
    </div>
  `;

  return section;
}
