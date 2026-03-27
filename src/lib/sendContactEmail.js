import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const CONTACT_RECEIVER_EMAIL = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL

export function hasContactEmailConfig() {
  return Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
  )
}

export async function sendContactEmail(formData) {
  if (!hasContactEmailConfig()) {
    throw new Error(
      'Konfigurasi EmailJS belum lengkap. Isi VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, dan VITE_EMAILJS_PUBLIC_KEY.'
    )
  }

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company_name: formData.company,
      service_interest: formData.service,
      message: formData.message,
      reply_to: formData.email,
      to_email: CONTACT_RECEIVER_EMAIL,
    },
    {
      publicKey: EMAILJS_PUBLIC_KEY,
    }
  )
}
