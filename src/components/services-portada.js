export function PortadaServicios() {
  const section = document.createElement('section');

  // Clases para el fondo de imagen, tamaño completo, y estructura flexible.
  section.className = 'relative w-full min-h-screen bg-cover bg-no-repeat flex flex-col justify-between font-ubuntu';
  // Establece la imagen de fondo
  section.style.backgroundImage = 'url(/public/image/11.jpeg)';
  section.style.backgroundPosition = 'center -200px';

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

          <!-- Card 1: Vigilancia Camara -->
          <div class="p-6 text-white text-left">
            <!-- Icono: Usando /public/image/imagen.png sobre fondo rojo más claro para contraste -->
            <div class="mb-4 inline-block p-3 bg-[#FF5733] rounded-md">
              <img src="/public/icon/camara.png" alt="Icono Camara" class="w-8 h-8 object-contain">
            </div>
            <h3 class="text-lg font-bold mb-2">Vigilancia por Cámara</h3>
            <p class="text-sm text-red-100">Sistemas de CCTV y monitoreo 24/7 para vigilancia completa de tus instalaciones.</p>
          </div>

          <!-- Card 2: Vigilancia Perimetro -->
          <div class="p-6 text-white text-left">
            <div class="mb-4 inline-block p-3 bg-[#FF5733] rounded-md">
              <img src="/public/icon/perimetro.png" alt="Icono Experiencia" class="w-8 h-8 object-contain">
            </div>
            <h3 class="text-lg font-bold mb-2">Vigilancia Perimetral</h3>
            <p class="text-sm text-red-100">Control de accesos y protección de perímetros para máxima seguridad.</p>
          </div>

          <!-- Card 3: Supervicion Constante -->
          <div class="p-6 text-white text-left">
            <div class="mb-4 inline-block p-3 bg-[#FF5733] rounded-md">
              <img src="/public/icon/supervisor.png" alt="Icono Tecnología" class="w-8 h-8 object-contain">
            </div>
            <h3 class="text-lg font-bold mb-2">Supervisión Constante</h3>
            <p class="text-sm text-red-100">Supervisores experimentados disponibles 24/7 para atender emergencias.</p>
          </div>

          <!-- Card 4: Patrullaje -->
          <div class="p-6 text-white text-left">
            <div class="mb-4 inline-block p-3 bg-[#FF5733] rounded-md">
              <img src="/public/icon/patrulla.png" alt="Icono Consultoría" class="w-8 h-8 object-contain">
            </div>
            <h3 class="text-lg font-bold mb-2">Rondas de Patrullaje</h3>
            <p class="text-sm text-red-100">Rondas programadas y dinámicas para prevenir incidentes y garantizar seguridad.</p>
          </div>

        </div>
      </div>
    </div>
  `;

  return section;
}