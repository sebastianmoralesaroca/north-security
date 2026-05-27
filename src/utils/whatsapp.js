const WHATSAPP_NUMBER = '56977099702';

export function openWhatsAppMessage(message) {
  const encodedMessage = encodeURIComponent(message.trim());
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
}
