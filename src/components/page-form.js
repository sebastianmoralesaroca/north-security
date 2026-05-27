import { openWhatsAppMessage } from '../utils/whatsapp.js';

const EMAILJS_SERVICE_ID = 'service_mibdcsc';
const EMAILJS_TEMPLATE_ID = 'template_2pq8zph';
const EMAILJS_PUBLIC_KEY = '5BPLcVCE9UaHuL0GV';


export function SignUpPage() {
  const section = document.createElement('section');
  section.id = 'form';
  section.className = 'min-h-screen w-full relative overflow-hidden py-8 sm:py-10 md:py-12 lg:py-[50px]';

  section.innerHTML = `
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img src="/public/image/form.jpg" alt="Background" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <!-- Content Container con margin de 50px -->
    <div class="relative z-10 h-full px-4 sm:px-6 md:px-8 lg:px-[50px]">
      <div class="h-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
          <!-- Grid Izquierdo - Transparencia 20% -->
          <div class="bg-black/20 backdrop-blur-sm flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight">
              Tu <span class="text-[#C42100]">Seguridad</span> es Nuestra Prioridad
            </h1>
            <p class="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Con años de experiencia protegiendo lo que más valoras. Contamos con más de 200 guardias certificados OS-10, supervisores disponibles 24/7 y tecnología de última generación. Soluciones integrales adaptadas a cada industria y desafío.
            </p>

            <!-- Características -->
            <div class="space-y-3 sm:space-y-4">
              <div class="flex items-center gap-3 sm:gap-4">
                <div class="bg-white/20 p-2 sm:p-2.5 md:p-3 rounded-full">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span class="text-sm sm:text-base md:text-lg text-white font-medium">Respuesta en menos de 24 horas</span>
              </div>

              <div class="flex items-center gap-3 sm:gap-4">
                <div class="bg-white/20 p-2 sm:p-2.5 md:p-3 rounded-full">
                  <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span class="text-sm sm:text-base md:text-lg text-white font-medium">Cotización sin compromiso</span>
              </div>
            </div>
          </div>

          <!-- Grid Derecho - Transparencia 50% -->
          <div class="bg-black/50 backdrop-blur-sm flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-7 md:mb-8 text-center">Cotiza tu Servicio de <span class="text-[#C42100]">Seguridad</span></h2>

            <form id="contactForm" class="space-y-4 sm:space-y-5">
              <input type="hidden" name="name" id="emailName">
              <input type="hidden" name="message" id="emailMessage">

              <!-- Nombre y Apellido -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    required
                    class="w-full bg-white/10 border-b-2 border-white/30 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors placeholder-gray-300"
                  >
                </div>
                <div>
                  <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    required
                    class="w-full bg-white/10 border-b-2 border-white/30 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors placeholder-gray-300"
                  >
                </div>
              </div>

              <!-- Email y Teléfono -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Corporativo"
                    required
                    class="w-full bg-white/10 border-b-2 border-white/30 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors placeholder-gray-300"
                  >
                </div>
                <div>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    required
                    class="w-full bg-white/10 border-b-2 border-white/30 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors placeholder-gray-300"
                  >
                </div>
              </div>

              <!-- Nombre de Empresa y Rubro -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Nombre de la Empresa"
                    required
                    class="w-full bg-white/10 border-b-2 border-white/30 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors placeholder-gray-300"
                  >
                </div>
                <div>
                  <select
                    name="rubro"
                    required
                    class="w-full bg-white/10 border-b-2 border-white/30 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected class="bg-gray-900">Selecciona tu Rubro</option>
                    <option value="retail" class="bg-gray-900">Retail y Comercio</option>
                    <option value="construccion" class="bg-gray-900">Construcción</option>
                    <option value="industrial" class="bg-gray-900">Industrial y Manufactura</option>
                    <option value="logistica" class="bg-gray-900">Logística y Transporte</option>
                    <option value="eventos" class="bg-gray-900">Eventos y Entretenimiento</option>
                    <option value="corporativo" class="bg-gray-900">Corporativo y Oficinas</option>
                    <option value="hospitalidad" class="bg-gray-900">Hospitalidad y Turismo</option>
                    <option value="educacion" class="bg-gray-900">Educación</option>
                    <option value="salud" class="bg-gray-900">Salud</option>
                    <option value="otro" class="bg-gray-900">Otro</option>
                  </select>
                </div>
              </div>

              <!-- Ubicación y Página Web -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    name="ubicacion"
                    placeholder="Ciudad / Ubicación"
                    required
                    class="w-full bg-white/10 border-b-2 border-white/30 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors placeholder-gray-300"
                  >
                </div>
                <div>
                  <input
                    type="url"
                    name="website"
                    placeholder="Página Web (opcional)"
                    class="w-full bg-white/10 border-b-2 border-white/30 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors placeholder-gray-300"
                  >
                </div>
              </div>

              <!-- Servicios -->
              <div>
                <select
                  name="servicio"
                  required
                  class="w-full bg-white/10 border-b-2 border-white/30 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled selected class="bg-gray-900">¿Qué servicio necesitas?</option>
                  <option value="vigilancia" class="bg-gray-900">Vigilancia y Seguridad Física</option>
                  <option value="monitoreo" class="bg-gray-900">Monitoreo y Alarmas</option>
                  <option value="eventos" class="bg-gray-900">Seguridad para Eventos</option>
                  <option value="escolta" class="bg-gray-900">Escoltas y Protección Personal</option>
                  <option value="consultoria" class="bg-gray-900">Consultoría en Seguridad</option>
                  <option value="integral" class="bg-gray-900">Solución Integral</option>
                </select>
              </div>

              <!-- Mensaje -->
              <div>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos más sobre tus necesidades de seguridad..."
                  rows="4"
                  class="w-full bg-white/10 border-2 border-white/30 text-white px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:border-white focus:outline-none transition-colors placeholder-gray-300 resize-none rounded-lg"
                ></textarea>
              </div>

              <!-- Botones de Envío -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <button
                  type="submit"
                  class="w-full bg-white text-[#C42100] font-bold py-3 sm:py-3.5 md:py-4 text-sm sm:text-base rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Enviar por Email
                </button>
                <button
                  type="button"
                  id="whatsappBtn"
                  class="w-full bg-[#25D366] text-white font-bold py-3 sm:py-3.5 md:py-4 text-sm sm:text-base rounded-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  // Manejo del formulario
  setTimeout(() => {
    const form = section.querySelector('#contactForm');
    const whatsappBtn = section.querySelector('#whatsappBtn');
    const getSelectedOptionText = (fieldName) => {
      const field = form.elements[fieldName];
      return field?.selectedOptions?.[0]?.textContent.trim() || '';
    };
    const getFormData = () => Object.fromEntries(new FormData(form).entries());
    const getQuoteFields = (data) => [
      ['Nombre', `${data.nombre} ${data.apellido}`],
      ['Email corporativo', data.email],
      ['Teléfono', data.telefono],
      ['Empresa', data.empresa],
      ['Rubro', getSelectedOptionText('rubro')],
      ['Ciudad / Ubicación', data.ubicacion],
      ['Página web', data.website || 'No indicada'],
      ['Servicio requerido', getSelectedOptionText('servicio')],
      ['Comentarios', data.mensaje || 'Sin comentarios adicionales'],
    ];
    const buildQuoteMessage = (data) => [
      'Hola North Security, quiero solicitar una cotización.',
      '',
      'Datos del formulario:',
      ...getQuoteFields(data).map(([label, value]) => `${label}: ${value}`),
    ].join('\n');
    const syncEmailJsFields = (data) => {
      form.elements.namedItem('name').value = `${data.nombre} ${data.apellido}`;
      form.elements.namedItem('message').value = buildQuoteMessage(data);
    };

    // Envío por Email
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (!window.emailjs) {
        alert('No se pudo cargar EmailJS. Revisa la conexión o la ruta del script.');
        return;
      }

      if (EMAILJS_PUBLIC_KEY === 'TU_PUBLIC_KEY') {
        alert('Falta configurar la Public Key de EmailJS.');
        return;
      }

      const data = getFormData();
      syncEmailJsFields(data);

      window.emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY)
        .then(() => {
          alert('Correo enviado');
          form.reset();
        })
        .catch((error) => {
          console.error('Error al enviar correo con EmailJS:', error);
          alert('No se pudo enviar el correo. Inténtalo nuevamente.');
        });
    });

    // Envío por WhatsApp
    whatsappBtn.addEventListener('click', function() {
      const data = getFormData();

      // Validar campos requeridos
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const mensaje = [
        'Hola North Security, quiero solicitar una cotización.',
        '',
        '*Datos del formulario:*',
        ...getQuoteFields(data).map(([label, value]) => `*${label}:* ${value}`),
      ].join('\n');

      openWhatsAppMessage(mensaje);
    });
  }, 0);

  return section;
}
