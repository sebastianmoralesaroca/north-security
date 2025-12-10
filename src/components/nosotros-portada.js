export function PortadaNosotros() {
  const section = document.createElement('section');
  section.id = 'portada-nosotros';
  section.className = 'w-full relative';
  section.style.height = '350px';
  section.style.setProperty('height', '450px', 'important');

  // Responsive height via media query
  const mediaQuery = window.matchMedia('(max-width: 640px)');
  const updateHeight = (e) => {
    section.style.height = e.matches ? '300px' : '450px';
  };
  mediaQuery.addListener(updateHeight);
  updateHeight(mediaQuery);

  section.innerHTML = `
    <div class="grid grid-cols-2 h-full relative">
      <!-- Columna Izquierda - Fondo Negro -->
      <div class="bg-black"></div>

      <!-- Columna Derecha - Imagen de Fondo -->
      <div class="bg-black bg-cover bg-no-repeat relative" style="background-image: url(/public/image/aa.png); background-position: center 20%;">
        <div class="absolute inset-0 bg-black/30"></div>
      </div>

      <!-- Título Centrado sobre todo -->
      <div class="absolute inset-0 flex items-center justify-center px-4">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <img src="/public/icon/logo.png" alt="Logo North Security" class="h-16 sm:h-20 md:h-24 lg:h-32 drop-shadow-2xl">
          <h1 class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center sm:text-left">Conoce al Equipo <span class="text-[#C42100]">North</span></h1>
        </div>
      </div>
    </div>
  `;

  return section;
}
