export function NosotrosResumen() {
  const section = document.createElement('section');
  section.className = 'w-full bg-white py-16';

  section.innerHTML = `
    <div class="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 sm:gap-7 md:gap-8 items-center">

        <!-- Imagen del personal (40%) -->
        <div class="w-full h-[300px] sm:h-[380px] md:h-[470px] relative rounded-lg shadow-2xl overflow-hidden">
          <img src="/public/image/estadio.jpg" alt="Personal North Security" class="w-full h-full object-cover object-top">
          <div class="absolute inset-0 bg-black/20"></div>
        </div>

        <!-- Contenido (60%) -->
        <div class="flex flex-col">
          <div class="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
            <img src="/public/icon/buscar.png" alt="Logo North Security" class="h-16 sm:h-20 md:h-[6rem]">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">North Security</h2>
          </div>

          <p class="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-8">
            Fuerza operativa de más de 200 guardias certificados OS10, con seguros de vida y accidentes incluidos. Supervisores experimentados disponibles las 24 horas para atender emergencias y situaciones críticas. Proveemos personal uniformado, radios de comunicación, informes en tiempo real, protocolos de actuación personalizados, rondas programadas, control de accesos y respaldo vehicular. Soluciones integrales para eventos masivos, instalaciones industriales, comerciales y obras en construcción.
          </p>
        </div>

      </div>
    </div>
  `;

  return section;
}
