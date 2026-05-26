export function LayoutAsimetrico() {
  
  // Función auxiliar para crear la estructura de cada Card
  function createRubroCard(title, description, category, bgColor, accentColor, imgPlaceholder, gridSpan, minHeight, titleSize) {
    // Usamos el gridSpan y minHeight dinámicos para el layout irregular
    // Usamos el diseño de card del último 'servicios_rubros.js' que me enviaste
    return `
      <div class="relative overflow-hidden rounded-xl shadow-xl transform transition duration-500 hover:shadow-2xl hover:scale-[1.01] ${gridSpan} ${minHeight}">
        <!-- Imagen de Fondo -->
        <div
          class="absolute inset-0 bg-cover bg-center"
          style="background-image: ${imgPlaceholder};">
        </div>

        <!-- Overlay oscuro para legibilidad -->
        <div class="absolute inset-0 bg-black/70"></div>

        <!-- Contenido principal de la Card -->
        <div class="p-6 lg:p-8 flex flex-col justify-start h-full relative z-10">

          <!-- Texto Secundario/Etiqueta -->
          <p class="text-sm font-semibold uppercase text-white mb-2">${category}</p>

          <!-- Título principal -->
          <h3 class="${titleSize} font-extrabold text-white mb-4 leading-tight">${title}</h3>

          <!-- Descripción -->
          <p class="text-base text-gray-200 mb-6">${description}</p>

          <!-- Enlace de Acción -->
          <a href="#form" class="mt-auto text-sm font-bold text-white hover:underline transition duration-300 flex items-center smooth-scroll-service">
            Saber Más
            <!-- Manejo del color del SVG -->
            <svg class="w-4 h-4 ml-1" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    `;
  }

  const section = document.createElement('section');
  section.id = 'layout-asimetrico';
  section.className = 'w-full bg-gray-50 py-16 lg:py-24 font-ubuntu'; 

  // --- Definición de Tarjetas para GRID 1 ---
  const rubrosGrid1 = [
    {
      title: 'Seguridad en Instalaciones',
      description: 'Cobertura integral para edificios, oficinas y recintos privados con control de acceso y vigilancia permanente.',
      category: 'Servicio',
      bgColor: 'bg-light-red',
      accentColor: 'text-primary',
      gridSpan: 'md:col-span-2 md:row-span-2',
      minHeight: 'md:min-h-[300px]',
      titleSize: 'text-3xl',
      imgPlaceholder: 'url(/public/image/servicios/shopp.jpg)'
    },
    {
      title: 'Control Residencial',
      description: 'Resguardo de condominios y viviendas con supervisión de accesos, rondas preventivas y apoyo en terreno.',
      category: 'Servicio',
      bgColor: 'bg-sky-200/90',
      accentColor: 'text-sky-600',
      gridSpan: 'md:col-span-1',
      minHeight: 'md:min-h-[140px]',
      titleSize: 'text-xl',
      imgPlaceholder: 'url(/public/image/servicios/build.jpg)'
    },
    {
      title: 'Cobertura de Eventos',
      description: 'Seguridad para eventos privados y corporativos con control de flujo, accesos y coordinación operativa.',
      category: 'Servicio',
      bgColor: 'bg-indigo-200/90',
      accentColor: 'text-indigo-600',
      gridSpan: 'md:col-span-1',
      minHeight: 'md:min-h-[140px]',
      titleSize: 'text-xl',
      imgPlaceholder: 'url(/public/image/servicios/party.png)'
    },
  ];

  // --- Definición de Tarjetas para GRID 2 (orden invertido) ---
  const rubrosGrid2 = [
    {
      title: 'Monitoreo CCTV',
      description: 'Monitoreo constante de instalaciones y perímetros para detectar incidencias y mantener registros de seguridad.',
      category: 'Servicio',
      bgColor: 'bg-emerald-200/90',
      accentColor: 'text-emerald-600',
      gridSpan: 'md:col-span-1',
      minHeight: 'md:min-h-[140px]',
      titleSize: 'text-xl',
      imgPlaceholder: 'url(/public/image/servicios/industry.png)'
    },
    {
      title: 'Patrullaje Preventivo',
      description: 'Rondas programadas y control de sectores críticos para reforzar presencia y respuesta ante riesgos.',
      category: 'Servicio',
      bgColor: 'bg-amber-200/90',
      accentColor: 'text-amber-600',
      gridSpan: 'md:col-span-1',
      minHeight: 'md:min-h-[140px]',
      titleSize: 'text-xl',
      imgPlaceholder: 'url(/public/image/servicios/drive.jpg)'
    },
    {
      title: 'Seguridad para Obras',
      description: 'Protección y control de accesos para proyectos en construcción, faenas y operaciones en desarrollo.',
      category: 'Servicio',
      bgColor: 'bg-light-red',
      accentColor: 'text-primary',
      gridSpan: 'md:col-span-2 md:row-span-2',
      minHeight: 'md:min-h-[300px]',
      titleSize: 'text-3xl',
      imgPlaceholder: 'url(/public/image/servicios/construccion.png)'
    },
  ];

  // --- Definición de Tarjetas para GRID 3 (igual a GRID 1, pero con datos diferentes) ---
  const rubrosGrid3 = [
    {
      title: 'Seguridad Corporativa',
      description: 'Soluciones de resguardo para empresas, oficinas y edificios corporativos con personal operativo especializado.',
      category: 'Servicio',
      bgColor: 'bg-light-red',
      accentColor: 'text-primary',
      gridSpan: 'md:col-span-2 md:row-span-2',
      minHeight: 'md:min-h-[300px]',
      titleSize: 'text-3xl',
      imgPlaceholder: 'url(/public/image/servicios/cosporate.jpg)'
    },
    {
      title: 'Supervisión Operativa',
      description: 'Seguimiento en terreno para verificar protocolos, coordinación del personal y respuesta frente a emergencias.',
      category: 'Servicio',
      bgColor: 'bg-rose-200/90',
      accentColor: 'text-rose-600',
      gridSpan: 'md:col-span-1',
      minHeight: 'md:min-h-[140px]',
      titleSize: 'text-xl',
      imgPlaceholder: 'url(/public/image/servicios/hotel.jpg)'
    },
    {
      title: 'Control de Accesos',
      description: 'Gestión de ingresos y salidas para reforzar la seguridad en recintos con tránsito constante de personas.',
      category: 'Servicio',
      bgColor: 'bg-purple-200/90',
      accentColor: 'text-purple-600',
      gridSpan: 'md:col-span-1',
      minHeight: 'md:min-h-[140px]',
      titleSize: 'text-xl',
      imgPlaceholder: 'url(/public/image/servicios/shool.jpg)'
    },
  ];

  // --- Definición de Tarjetas para GRID 4 (igual a GRID 2, pero con datos diferentes) ---
  const rubrosGrid4 = [
    {
      title: 'Cobertura de Grandes Eventos',
      description: 'Servicio de seguridad para actividades masivas con orden operativo, apoyo logístico y resguardo del público.',
      category: 'Servicio',
      bgColor: 'bg-cyan-200/90',
      accentColor: 'text-cyan-600',
      gridSpan: 'md:col-span-1',
      minHeight: 'md:min-h-[140px]',
      titleSize: 'text-xl',
      imgPlaceholder: 'url(/public/image/servicios/stadium.png)'
    },
    {
      title: 'Escolta y Acompañamiento',
      description: 'Resguardo especializado para traslados, personal estratégico y operaciones que requieren protección adicional.',
      category: 'Servicio',
      bgColor: 'bg-teal-200/90',
      accentColor: 'text-teal-600',
      gridSpan: 'md:col-span-1',
      minHeight: 'md:min-h-[140px]',
      titleSize: 'text-xl',
      imgPlaceholder: 'url(/public/image/servicios/bank.png)'
    },
    {
      title: 'Protección de Recintos Críticos',
      description: 'Servicio enfocado en instalaciones sensibles que requieren vigilancia continua, reacción rápida y control estricto.',
      category: 'Servicio',
      bgColor: 'bg-light-red',
      accentColor: 'text-primary',
      gridSpan: 'md:col-span-2 md:row-span-2',
      minHeight: 'md:min-h-[300px]',
      titleSize: 'text-3xl',
      imgPlaceholder: 'url(/public/image/servicios/hospital.jpeg)'
    },
  ];

  // Generar HTML para cada grid
  const cardsHtmlGrid1 = rubrosGrid1.map(rubro => createRubroCard(
    rubro.title, rubro.description, rubro.category, rubro.bgColor,
    rubro.accentColor, rubro.imgPlaceholder, rubro.gridSpan,
    rubro.minHeight, rubro.titleSize
  )).join('');

  const cardsHtmlGrid2 = rubrosGrid2.map(rubro => createRubroCard(
    rubro.title, rubro.description, rubro.category, rubro.bgColor,
    rubro.accentColor, rubro.imgPlaceholder, rubro.gridSpan,
    rubro.minHeight, rubro.titleSize
  )).join('');

  const cardsHtmlGrid3 = rubrosGrid3.map(rubro => createRubroCard(
    rubro.title, rubro.description, rubro.category, rubro.bgColor,
    rubro.accentColor, rubro.imgPlaceholder, rubro.gridSpan,
    rubro.minHeight, rubro.titleSize
  )).join('');

  const cardsHtmlGrid4 = rubrosGrid4.map(rubro => createRubroCard(
    rubro.title, rubro.description, rubro.category, rubro.bgColor,
    rubro.accentColor, rubro.imgPlaceholder, rubro.gridSpan,
    rubro.minHeight, rubro.titleSize
  )).join('');


  section.innerHTML = `
    <div class="container mx-auto px-6 lg:px-8 max-w-7xl">
      <!-- Título de la Sección -->
      <div class="text-left mb-10 max-w-3xl">
        <h2 class="text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl">
          Servicios que Ofrecemos
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Soluciones de seguridad diseñadas para responder a distintos requerimientos operativos y de proteccion.
        </p>
      </div>

      <!-- Contenedor Principal: Grid de 2 Columnas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

        <!-- GRID 1 (Fila 1, Columna 1 - Card grande arriba) -->
        <div class="lg:col-span-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${cardsHtmlGrid1}
          </div>
        </div>

        <!-- GRID 2 (Fila 1, Columna 2 - Cards pequeñas arriba, grande abajo) -->
        <div class="lg:col-span-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${cardsHtmlGrid2}
          </div>
        </div>

        <!-- GRID 3 (Fila 2, Columna 1 - Card grande arriba) -->
        <div class="lg:col-span-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${cardsHtmlGrid3}
          </div>
        </div>

        <!-- GRID 4 (Fila 2, Columna 2 - Cards pequeñas arriba, grande abajo) -->
        <div class="lg:col-span-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${cardsHtmlGrid4}
          </div>
        </div>

      </div>
    </div>
  `;

  // Agregar smooth scroll para los botones "Saber más"
  setTimeout(() => {
    const smoothScrollLinks = section.querySelectorAll('.smooth-scroll-service');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, 0);

  return section;
}
