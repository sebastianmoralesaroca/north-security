export function Header() {
  const header = document.createElement('header');
  header.id = 'header';
  header.className = 'w-full bg-transparent fixed top-0 left-0 z-50 transition-colors duration-300';

  // Detectar página actual
  const currentPath = window.location.pathname;
  const isIndex = currentPath === '/' || currentPath.includes('index.html') || currentPath.endsWith('/north-security') || currentPath.endsWith('/north-security/');
  const isServices = currentPath.includes('services.html');

  // Determinar base path para rutas
  const basePath = isIndex ? './' : '../../';

  header.innerHTML = `
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo y texto -->
      <div class="flex items-center gap-2 md:gap-3">
        <img src="/public/icon/logo.png" alt="North Security Logo" class="h-8 md:h-10">
        <span class="text-[20px] md:text-[28px] font-bold text-white">North Security</span>
      </div>

      <!-- Botón hamburguesa (solo mobile) -->
      <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <!-- Navegación Desktop -->
      <nav class="hidden md:flex items-center gap-6 font-semibold">
        <a href="${basePath}index.html" class="nav-link ${isIndex ? 'text-[#C42100]' : 'text-white'} hover:text-[#C42100] transition" ${isIndex ? 'data-active="true"' : ''}>Inicio</a>
        <a href="${basePath}src/page/services.html" class="nav-link ${isServices ? 'text-[#C42100]' : 'text-white'} hover:text-[#C42100] transition" ${isServices ? 'data-active="true"' : ''}>Servicios</a>
        <a href="#form" class="bg-[#C42100] text-white px-6 py-2 rounded-full hover:bg-[#a01b00] transition smooth-scroll">Contacto</a>
      </nav>
    </div>

    <!-- Menú Mobile (oculto por defecto) -->
    <div id="mobile-menu" class="hidden md:hidden bg-white shadow-lg">
      <nav class="flex flex-col p-4 space-y-4 font-semibold">
        <a href="${basePath}index.html" class="nav-link-mobile ${isIndex ? 'text-[#C42100]' : 'text-gray-900'} hover:text-[#C42100] transition py-2" ${isIndex ? 'data-active="true"' : ''}>Inicio</a>
        <a href="${basePath}src/page/services.html" class="nav-link-mobile ${isServices ? 'text-[#C42100]' : 'text-gray-900'} hover:text-[#C42100] transition py-2" ${isServices ? 'data-active="true"' : ''}>Servicios</a>
        <a href="#form" class="bg-[#C42100] text-white px-6 py-3 rounded-full hover:bg-[#a01b00] transition text-center smooth-scroll-mobile">Contacto</a>
      </nav>
    </div>
  `;

  // Toggle menú mobile
  setTimeout(() => {
    const mobileMenuBtn = header.querySelector('#mobile-menu-btn');
    const mobileMenu = header.querySelector('#mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú al hacer clic en un link
    const mobileLinks = header.querySelectorAll('.nav-link-mobile, .smooth-scroll-mobile');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }, 0);

  // Agregar smooth scroll para los botones de Contacto (desktop y mobile)
  setTimeout(() => {
    const smoothScrollLinks = header.querySelectorAll('.smooth-scroll, .smooth-scroll-mobile');
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

  // Cambiar background en scroll
  const logoText = header.querySelector('span');
  const navLinks = header.querySelectorAll('.nav-link');
  const mobileMenuBtn = header.querySelector('#mobile-menu-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      // Fondo blanco
      header.classList.remove('bg-transparent');
      header.classList.add('bg-white', 'shadow-md');

      // Texto del logo rojo
      logoText.classList.remove('text-white');
      logoText.classList.add('text-[#C42100]');

      // Botón hamburguesa negro
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('text-white');
        mobileMenuBtn.classList.add('text-gray-900');
      }

      // Actualizar links desktop
      navLinks.forEach(link => {
        if (link.getAttribute('data-active') === 'true') {
          // Link activo: mantener rojo especial
          link.classList.remove('text-white');
          link.classList.add('text-[#C42100]');
        } else {
          // Links no activos: cambiar a negro
          link.classList.remove('text-white');
          link.classList.add('text-gray-900');
        }
      });
    } else {
      // Fondo transparente
      header.classList.remove('bg-white', 'shadow-md');
      header.classList.add('bg-transparent');

      // Texto del logo blanco
      logoText.classList.remove('text-[#C42100]');
      logoText.classList.add('text-white');

      // Botón hamburguesa blanco
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove('text-gray-900');
        mobileMenuBtn.classList.add('text-white');
      }

      // Actualizar links desktop
      navLinks.forEach(link => {
        if (link.getAttribute('data-active') === 'true') {
          // Link activo: rojo especial
          link.classList.remove('text-gray-900');
          link.classList.add('text-[#C42100]');
        } else {
          // Links no activos: blanco
          link.classList.remove('text-gray-900');
          link.classList.add('text-white');
        }
      });
    }
  });

  return header;
}
