export function Colaboraciones() {
  const section = document.createElement('section');
  section.id = 'colaboraciones';
  section.className = 'w-full bg-white py-16';

  section.innerHTML = `
    <div class="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

        <!-- Contenido Izquierda -->
        <div>
          <h2 class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-5 md:mb-6 leading-tight">
            Alianzas Estratégicas para tu <span class="text-[#C42100]">Seguridad</span>
          </h2>
          <p class="text-gray-700 text-base sm:text-lg leading-relaxed">
            Colaboramos con instituciones autorizadas y reguladoras para entregar un servicio de seguridad optimizado en todas nuestras instalaciones.
          </p>
        </div>

        <!-- Imágenes Derecha -->
        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <img src="/public/image/carabineros.png" alt="Carabineros de Chile" class="h-16 sm:h-20 md:h-24 w-auto transition hover:scale-105 duration-300">
          <img src="/public/image/carabineros-os10.png" alt="OS-10 de Carabineros" class="h-16 sm:h-20 md:h-24 w-auto transition hover:scale-105 duration-300">
          <img src="/public/image/ist.png" alt="Instituto de Seguridad del Trabajo (IST)" class="h-16 sm:h-20 md:h-24 w-auto transition hover:scale-105 duration-300">
        </div>

      </div>
    </div>
  `;

  return section;
}