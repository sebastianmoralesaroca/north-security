export function Clientes() {
  const clientLogos = [
    { src: '/public/clients/a523ac6c-eb1e-4953-ad6b-d43fb45d3960.jpg', alt: 'Cliente' },
    { src: '/public/clients/bitumix.png', alt: 'Bitumix' },
    { src: '/public/clients/cdlaserena.png', alt: 'CD La Serena' },
    { src: '/public/clients/conmebol.jpg', alt: 'Conmebol' },
    { src: '/public/clients/coquimbo.png', alt: 'Coquimbo' },
    { src: '/public/clients/couimbounido.png', alt: 'Coquimbo Unido' },
    { src: '/public/clients/diegoalmagro.jpg', alt: 'Diego de Almagro' },
    { src: '/public/clients/fastfest.jpg', alt: 'Fast Fest' },
    { src: '/public/clients/lidadeprimera.png', alt: 'Liga de Primera' },
    { src: '/public/clients/planvital.png', alt: 'Plan Vital' },
    { src: '/public/clients/puertas.png', alt: 'Puertas' },
    { src: '/public/clients/serenasuite.png', alt: 'Serena Suite' },
    { src: '/public/clients/todogoma.png', alt: 'Todo Goma' },
  ];

  const logosMarkup = [...clientLogos, ...clientLogos]
    .map(
      ({ src, alt }) =>
        '<img src="' + src + '" alt="' + alt + '" class="h-16 object-contain">'
    )
    .join('');

  const section = document.createElement('section');
  section.id = 'clientes';
  section.className = 'w-full bg-white py-12 overflow-hidden';

  section.innerHTML = `
    <div class="container mx-auto px-8 max-w-5xl">
      <p class="text-base font-bold text-gray-700 text-center mb-6">Empresas con las que hemos trabajado:</p>

      <div class="slider-container">
        <div class="slider-track flex items-center gap-12">
          ${logosMarkup}
        </div>
      </div>
    </div>

    <style>
      .slider-container {
        overflow: hidden;
        position: relative;
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .slider-track {
        animation: scroll 30s linear infinite;
        width: max-content;
      }

      .slider-track:hover {
        animation-play-state: paused;
      }
    </style>
  `;

  return section;
}
