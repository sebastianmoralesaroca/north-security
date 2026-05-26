export function PortadaServicios() {
  const section = document.createElement('section');
  const mobileBreakpoint = window.matchMedia('(max-width: 640px)');

  // El fondo debe cubrir todo el ancho visible de la portada.
  section.className = 'relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between font-ubuntu';
  section.style.backgroundImage = 'url(/public/image/oovvoo.jpg)';

  const updateBackgroundPosition = () => {
    section.style.backgroundPosition = mobileBreakpoint.matches ? 'center top' : 'center 55%';
  };

  updateBackgroundPosition();

  section.innerHTML = `
    <!-- Overlay Oscuro para Legibilidad -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Contenido Principal (Arriba - Texto y Botones) -->
    <div class="relative z-10 flex-1 flex items-center px-6 lg:px-8 pt-20 pb-20 lg:pt-0 lg:pb-0">
      <div class="max-w-7xl mx-auto w-full">
        <div class="max-w-4xl text-left" style="margin-top: 70px;">
          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
            Protección de Alto Nivel para su Tranquilidad
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
            Nuestro equipo ofrece vigilancia profesional y soluciones de seguridad personalizadas para empresas y residencias.
          </p>

          <!-- Botón principal: Cotizar Ahora con color primario (Rojo) -->
          <a href="#form" class="btn-primary">
            Cotizar ahora
          </a>

          <!-- Los puntos de paginación (3 puntitos) han sido eliminados según lo solicitado. -->

        </div>
      </div>
    </div>

    <!-- 4 Cards de Servicios (Parte Inferior - Fondo Sólido Rojo Primario) -->
    <!-- Se utiliza bg-[#C42100] para el fondo de la sección inferior, logrando el efecto de banda de color. -->
    <div class="relative z-10 bg-[#C42100] w-full">
      <div class="max-w-7xl mx-auto">
        <!-- Grid de 4 columnas iguales, con líneas divisorias blancas para contraste -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">

          <!-- Card 1: Comercial -->
          <div class="p-6 text-white text-left">
            <!-- Icono: Usando /public/image/imagen.png sobre fondo rojo más claro para contraste -->
            <div class="mb-4 inline-block p-3 bg-[#FF5733] rounded-md">
              <img src="/public/icon/edificio.png" alt="Icono Comercial" class="w-8 h-8 object-contain">
            </div>
            <h3 class="text-lg font-bold mb-2">Comercial</h3>
            <p class="text-sm text-red-100">Protección para locales, oficinas, centros comerciales y espacios de atención al público con control operativo permanente.</p>
          </div>

          <!-- Card 2: Privado -->
          <div class="p-6 text-white text-left">
            <div class="mb-4 inline-block p-3 bg-[#FF5733] rounded-md">
              <img src="/public/icon/guardia.png" alt="Icono Privado" class="w-8 h-8 object-contain">
            </div>
            <h3 class="text-lg font-bold mb-2">Privado</h3>
            <p class="text-sm text-red-100">Servicios de seguridad orientados a condominios, residencias y recintos privados con resguardo confiable y discreto.</p>
          </div>

          <!-- Card 3: Eventos -->
          <div class="p-6 text-white text-left">
            <div class="mb-4 inline-block p-3 bg-[#FF5733] rounded-md">
              <img src="/public/icon/escenario.png" alt="Icono Eventos" class="w-8 h-8 object-contain">
            </div>
            <h3 class="text-lg font-bold mb-2">Eventos</h3>
            <p class="text-sm text-red-100">Cobertura para espectáculos, actividades corporativas y eventos masivos con coordinación, acceso controlado y apoyo en terreno.</p>
          </div>

          <!-- Card 4: Otros -->
          <div class="p-6 text-white text-left">
            <div class="mb-4 inline-block p-3 bg-[#FF5733] rounded-md">
              <img src="/public/icon/experiencia.png" alt="Icono Otros" class="w-8 h-8 object-contain">
            </div>
            <h3 class="text-lg font-bold mb-2">Otros</h3>
            <p class="text-sm text-red-100">Soluciones adaptadas a requerimientos especiales, instalaciones temporales, obras y operaciones con necesidades específicas.</p>
          </div>

        </div>
      </div>
    </div>
  `;

  mobileBreakpoint.addEventListener('change', updateBackgroundPosition);

  return section;
}
