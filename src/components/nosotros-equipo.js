export function NosotrosEquipo() {
  const section = document.createElement('section');
  section.className = 'relative w-full bg-gradient-to-b from-light-red via-white to-white py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden font-ubuntu';

  section.innerHTML = `
    <div class="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 sm:gap-10 md:gap-12 items-start">

        <!-- Left Side - 30% - Text Content -->
        <div class="space-y-6 sm:space-y-7 md:space-y-8 lg:sticky lg:top-24">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-redhat">
            <span class="text-[#C42100]">Confianza</span> y protección para hoy.
          </h1>

          <p class="text-base sm:text-lg text-gray-600 leading-relaxed">
            Conoce a los lideres de uestro equipo que hacen posible la seguridad y tranquilidad de nuestros clientes cada día.
          </p>

          <!-- CTA Button -->
          <div class="space-y-3 sm:space-y-4">
            <a href="#form" class="w-full bg-primary hover:bg-red-700 text-white font-semibold px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 sm:space-x-3 group smooth-scroll text-sm sm:text-base">
              <span>Contratar / Agendar llamada</span>
              <svg class="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>

            <!-- Team Counter -->
            <div class="flex items-center justify-center space-x-2 sm:space-x-3">
              <div class="flex items-center -space-x-2 sm:-space-x-3">
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img src="/public/image/44.png" alt="Team member" class="w-full h-full object-cover">
                </div>
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-400 border-2 border-white overflow-hidden">
                  <img src="/public/image/77.png" alt="Team member" class="w-full h-full object-cover">
                </div>
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-500 border-2 border-white overflow-hidden">
                  <img src="/public/image/77.png" alt="Team member" class="w-full h-full object-cover">
                </div>
              </div>
              <span class="text-sm sm:text-base text-gray-600 font-medium">+200 profesionales</span>
            </div>
          </div>
        </div>

        <!-- Right Side - 70% - Team Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          
          <!-- Team Member Card 1 -->
          <div class="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <!-- Image Background -->
            <div class="h-60 sm:h-64 md:h-72 relative overflow-hidden">
              <img src="/public/image/44.png" alt="Carlos Mendez" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>

            <!-- Info Section -->
            <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white">
              <div class="flex items-end justify-between">
                <div>
                  <h3 class="font-bold text-lg sm:text-xl mb-0.5 sm:mb-1">Carlos Mendez</h3>
                  <p class="text-xs sm:text-sm text-gray-200">Supervisor Senior</p>
                </div>
                <button class="w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all flex items-center justify-center group-hover:scale-110">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Team Member Card 2 -->
          <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="h-72 relative overflow-hidden">
              <img src="/public/image/44.png" alt="Leticia Rojas" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="flex items-end justify-between">
                <div>
                  <h3 class="font-bold text-xl mb-1">Leticia Rojas</h3>
                  <p class="text-sm text-gray-200">Guardia Especialista</p>
                </div>
                <button class="w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all flex items-center justify-center group-hover:scale-110">
                  <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Team Member Card 3 -->
          <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="h-72 relative overflow-hidden">
              <img src="/public/image/44.png" alt="Angel Torres" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="flex items-end justify-between">
                <div>
                  <h3 class="font-bold text-xl mb-1">Angel Torres</h3>
                  <p class="text-sm text-gray-200">Guardia Senior</p>
                </div>
                <button class="w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all flex items-center justify-center group-hover:scale-110">
                  <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Team Member Card 4 -->
          <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="h-72 relative overflow-hidden">
              <img src="/public/image/44.png" alt="María González" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="flex items-end justify-between">
                <div>
                  <h3 class="font-bold text-xl mb-1">María González</h3>
                  <p class="text-sm text-gray-200">Coordinadora de Operaciones</p>
                </div>
                <button class="w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all flex items-center justify-center group-hover:scale-110">
                  <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Team Member Card 5 -->
          <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="h-72 relative overflow-hidden">
              <img src="/public/image/44.png" alt="Roberto Sánchez" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="flex items-end justify-between">
                <div>
                  <h3 class="font-bold text-xl mb-1">Roberto Sánchez</h3>
                  <p class="text-sm text-gray-200">Guardia Certificado OS10</p>
                </div>
                <button class="w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all flex items-center justify-center group-hover:scale-110">
                  <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Team Member Card 6 -->
          <div class="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="h-72 relative overflow-hidden">
              <img src="/public/image/44.png" alt="Patricia Vargas" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            </div>
            
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div class="flex items-end justify-between">
                <div>
                  <h3 class="font-bold text-xl mb-1">Patricia Vargas</h3>
                  <p class="text-sm text-gray-200">Jefa de Seguridad</p>
                </div>
                <button class="w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all flex items-center justify-center group-hover:scale-110">
                  <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;

  // Agregar smooth scroll para el botón
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