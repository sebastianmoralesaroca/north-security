export function Clientes() {
  const section = document.createElement('section');
  section.id = 'clientes';
  section.className = 'w-full bg-white py-12 overflow-hidden';

  section.innerHTML = `
    <div class="container mx-auto px-8 max-w-5xl">
      <p class="text-base font-bold text-gray-700 text-center mb-6">Empresas con las que hemos trabajado:</p>

      <div class="slider-container">
        <div class="slider-track flex items-center gap-12">
        <!-- Set 1 - Imágenes originales -->
        <img src="/public/clients/cdlaserena.png" alt="CD La Serena" class="h-16 object-contain">
        <img src="/public/clients/coquimbo.png" alt="Coquimbo" class="h-16 object-contain">
        <img src="/public/clients/couimbounido.png" alt="Coquimbo Unido" class="h-16 object-contain">
        <img src="/public/clients/diegoalmagro.jpg" alt="Diego de Almagro" class="h-16 object-contain">
        <img src="/public/clients/enjoy.jpeg" alt="Enjoy" class="h-16 object-contain">
        <img src="/public/clients/fastfest.jpg" alt="Fast Fest" class="h-16 object-contain">
        <img src="/public/clients/lidadeprimera.png" alt="Liga de Primera" class="h-16 object-contain">
        <img src="/public/clients/planvital.png" alt="Plan Vital" class="h-16 object-contain">
        <img src="/public/clients/serena.png" alt="Serena" class="h-16 object-contain">
        <img src="/public/clients/serenasuite.png" alt="Serena Suite" class="h-16 object-contain">
        <img src="/public/clients/todogoma.png" alt="Todo Goma" class="h-16 object-contain">
        <img src="/public/clients/brand-light.png" alt="Brand Light" class="h-16 object-contain">
        <img src="/public/clients/a523ac6c-eb1e-4953-ad6b-d43fb45d3960.jpg" alt="Cliente" class="h-16 object-contain">

        <!-- Set 2 - Duplicado para efecto infinito -->
        <img src="/public/clients/cdlaserena.png" alt="CD La Serena" class="h-16 object-contain">
        <img src="/public/clients/coquimbo.png" alt="Coquimbo" class="h-16 object-contain">
        <img src="/public/clients/couimbounido.png" alt="Coquimbo Unido" class="h-16 object-contain">
        <img src="/public/clients/diegoalmagro.jpg" alt="Diego de Almagro" class="h-16 object-contain">
        <img src="/public/clients/enjoy.jpeg" alt="Enjoy" class="h-16 object-contain">
        <img src="/public/clients/fastfest.jpg" alt="Fast Fest" class="h-16 object-contain">
        <img src="/public/clients/lidadeprimera.png" alt="Liga de Primera" class="h-16 object-contain">
        <img src="/public/clients/planvital.png" alt="Plan Vital" class="h-16 object-contain">
        <img src="/public/clients/serena.png" alt="Serena" class="h-16 object-contain">
        <img src="/public/clients/serenasuite.png" alt="Serena Suite" class="h-16 object-contain">
        <img src="/public/clients/todogoma.png" alt="Todo Goma" class="h-16 object-contain">
        <img src="/public/clients/brand-light.png" alt="Brand Light" class="h-16 object-contain">
        <img src="/public/clients/a523ac6c-eb1e-4953-ad6b-d43fb45d3960.jpg" alt="Cliente" class="h-16 object-contain">
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
