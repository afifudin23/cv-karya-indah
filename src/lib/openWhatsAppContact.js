const WHATSAPP_PHONE = "6295836972";

export function buildWhatsAppContactMessage(formData) {
  const lines = [
    "Halo CV Karya Indah, saya ingin menghubungi melalui form kontak.",
    "",
    `Nama: ${formData?.name || "-"}`,
    `Email: ${formData?.email || "-"}`,
    `Telepon: ${formData?.phone || "-"}`,
    `Perusahaan: ${formData?.company || "-"}`,
    `Layanan: ${formData?.service || "-"}`,
    "",
    "Pesan:",
    `${formData?.message || "-"}`,
  ];

  return lines.join("\n");
}

export function openWhatsAppContact(formData) {
  const text = buildWhatsAppContactMessage(formData);
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  return window.open(url, "_blank", "noopener,noreferrer");
}
