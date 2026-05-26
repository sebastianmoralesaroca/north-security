export function Footer() {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  footer.className = 'w-full bg-gradient-to-r from-blue-50 to-cyan-50 pt-[120px] pb-12 px-6';

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-8">

        <!-- Left Side - Brand -->
        <div class="flex items-center space-x-3">
          <img src="/public/icon/logo.png" alt="Logo" class="h-14 w-14 object-contain">
          <span class="text-2xl font-bold text-gray-800">North Security</span>
        </div>

        <!-- Right Side - Message Form -->
        <div class="w-full md:flex md:justify-end">
          <div class="w-full max-w-xl">
            <h3 class="text-gray-700 font-semibold mb-4">
              Envianos directo un mensaje de WhatsApp
            </h3>
            <form id="newsletterForm" class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <input
                type="email"
                name="email"
                placeholder="Escribe tu mensaje aquí..."
                required
                class="flex-1 px-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
              >
              <button
                type="submit"
                class="px-6 py-2.5 bg-[#25D366] hover:bg-green-600 text-white rounded-full font-medium transition-colors duration-300 text-sm flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar
              </button>
            </form>
            <p class="text-xs text-gray-500 mt-3 leading-relaxed">
                Tu nombre, datos y conversaciones son privados, nunca serán expuestos.
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Copyright -->
      <div class="pt-8 border-t border-gray-200">
        <p class="text-center text-sm text-gray-500">
          © ${new Date().getFullYear()} North Security. Todos los derechos reservados.
        </p>
      </div>
    </div>
  `;

  // Newsletter form handling
  const form = footer.querySelector('#newsletterForm');
  form.addEventListener('submit', handleNewsletterSubmit);

  return footer;
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const email = formData.get('email');
  
  console.log('Newsletter subscription:', email);
  
  // Aquí puedes agregar la lógica para enviar el email a tu backend
  alert('Mensaje enviado. Muchas gracias!!');
  
  // Limpiar el formulario
  e.target.reset();
}
