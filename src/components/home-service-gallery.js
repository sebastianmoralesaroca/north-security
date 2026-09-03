const serviceGalleryItems = [
  {
    title: 'Seguridad para Eventos',
    image: '/public/image/guardias_estadio.jpg',
    alt: 'Operativo de seguridad en evento masivo',
    description:
      'Planificamos y ejecutamos operativos de seguridad para eventos masivos y privados, controlando accesos, flujos de publico, zonas criticas y apoyo operativo en terreno.',
  },
  {
    title: 'Supervision en Terreno',
    image: '/public/image/camioneta.png',
    alt: 'Supervision de seguridad en terreno',
    description:
      'Realizamos rondas, fiscalizacion y seguimiento permanente de los servicios, asegurando cumplimiento de protocolos, respuesta oportuna y coordinacion directa con nuestros equipos.',
  },
  {
    title: 'Seguridad para Locales y Empresas',
    image: '/public/image/guardias_ovo.jpeg',
    alt: 'Seguridad para locales y empresas',
    description:
      'Protegemos locales comerciales, oficinas, empresas e instalaciones privadas con guardias capacitados, control de acceso y presencia preventiva adaptada a cada operacion.',
  },
];

export function GaleriaServicios() {
  const section = document.createElement('section');
  section.id = 'galeria-servicios';
  section.className = 'service-gallery-section';

  section.innerHTML = `
    <div class="service-gallery-shell">
      <div class="service-gallery-list">
        ${serviceGalleryItems
          .map(
            (item) => `
              <article class="service-gallery-item">
                <div class="service-gallery-image">
                  <img src="${item.image}" alt="${item.alt}" loading="lazy">
                </div>
                <div class="service-gallery-content">
                  <h2>${item.title}</h2>
                  <p>${item.description}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </div>
  `;

  return section;
}
