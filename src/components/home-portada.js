export function Portada() {
  const section = document.createElement('section');
  section.id = 'portada';
  section.className = 'w-full h-screen bg-cover bg-center bg-no-repeat flex items-center relative z-0';
  section.style.backgroundImage = 'url(/public/image/portada.png)';

  section.innerHTML = `
    <div class="absolute inset-0 bg-red-900/20"></div>
    <div class="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
      <div class="max-w-2xl relative z-10">
        <p class="text-white/70 text-sm sm:text-base md:text-[20px] uppercase tracking-wide mb-3 md:mb-4">Empresa de Seguridad Privada</p>
        <h1 class="mb-4 md:mb-6 leading-tight">
          <span class="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-[4.2rem] font-extrabold">North Security</span>
          <span class="block text-[#FF0000] text-2xl sm:text-3xl md:text-4xl lg:text-[3.7rem] font-bold">Confianza y Protección</span>
        </h1>
        <p class="text-white text-sm sm:text-base md:text-lg mb-6 md:mb-8">Protegemos lo que más valoras con vigilancia profesional 24/7 y tecnología de última generación para la seguridad de tu Negocio</p>
        <a href="#form" class="btn-primary smooth-scroll">Contacto</a>
      </div>
    </div>
  `;

  // Agregar smooth scroll para el botón de Contacto
  setTimeout(() => {
    const smoothScrollLinks = section.querySelectorAll('.smooth-scroll');
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
