import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import ContactItem from "../ui/ContactItem";
import InfoPanel from "../ui/InfoPanel";
import InfoRow from "../ui/InfoRow";
import { servicesData } from "../../data/companyProfileData";
import { openWhatsAppContact } from "../../lib/openWhatsAppContact";
import SectionShell from "../ui/SectionShell";
import { Reveal, RevealStagger } from "../ui/Reveal";

export default function ContactSection({ companyData }) {
    const mapsLink = "https://maps.app.goo.gl/gHhTQ7mLCE498mMo6";
    const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(companyData.address)}&output=embed`;
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        service: servicesData[0]?.title || "",
        message: "",
    });
    const [submitState, setSubmitState] = useState({
        status: "idle",
        message: "",
    });

    const serviceOptions = [...servicesData.map((service) => service.title), "Lainnya"];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSubmitState({
            status: "loading",
            message: "Mengarahkan ke WhatsApp...",
        });

        const popup = openWhatsAppContact(formData);
        if (!popup) {
            setSubmitState({
                status: "error",
                message: "Gagal membuka WhatsApp. Aktifkan pop-up, lalu coba lagi.",
            });
            return;
        }

        setSubmitState({
            status: "success",
            message: "WhatsApp terbuka. Silakan tekan Send untuk mengirim pesan.",
        });
        setFormData({
            name: "",
            company: "",
            service: servicesData[0]?.title || "",
            message: "",
        });
    };

    const fieldClassName =
        "w-full rounded-[1.15rem] border border-[rgba(190,219,231,0.92)] bg-white/88 px-4 py-3.5 text-[0.98rem] text-slate-800 shadow-[0_10px_24px_rgba(72,155,214,0.06)] outline-none transition placeholder:text-slate-400 focus:border-[var(--teal)] focus:bg-white focus:ring-2 focus:ring-[rgba(88,182,197,0.14)]";

    return (
        <SectionShell
            id="kontak"
            paddingClassName="pb-20 pt-28 sm:pt-32"
            eyebrow="Kontak"
            title="Hubungi Kami"
            intro="Sampaikan kebutuhan proyek, konsultasi layanan, atau permintaan penawaran melalui form kontak agar tim CV Karya Indah dapat merespons lebih cepat dan terarah."
        >
            <Reveal as="div" className="space-y-8" delay={60}>
                <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:auto-rows-fr">
                    <div className="h-full rounded-[2rem] bg-[var(--hero)] p-8 text-white shadow-[0_26px_64px_rgba(17,43,57,0.2)]">
                        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[var(--teal)]">Contact Detail</p>
                        <h3 className="font-display text-4xl uppercase">CV. Karya Indah</h3>
                        <p className="mt-4 max-w-xl leading-8 text-slate-300">
                            Siap membantu kebutuhan jasa periklanan, interior, eksterior, konstruksi visual, dan digital
                            printing untuk bisnis maupun institusi.
                        </p>

                        <RevealStagger as="div" className="mt-8 space-y-5 text-slate-200" stagger={65}>
                            <ContactItem label="Alamat" value={companyData.address} />
                            <ContactItem label="Telepon" value={companyData.phones.join(" / ")} />
                            <ContactItem label="Email" value={companyData.email} />
                        </RevealStagger>
                    </div>

                    <InfoPanel title="Informasi Bank">
                        <InfoRow label="Bank" value={companyData.bank.name} />
                        <InfoRow label="Nomor Rekening" value={companyData.bank.account} />
                        <InfoRow label="Atas Nama" value={companyData.bank.holder} />
                    </InfoPanel>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-[rgba(196,223,235,0.86)] bg-[linear-gradient(180deg,rgba(247,252,254,0.98),rgba(238,246,250,0.95))] p-6 shadow-[0_28px_70px_rgba(72,155,214,0.12)] sm:rounded-[2.3rem] sm:p-8">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="h-[3px] w-14 rounded-full bg-[var(--teal)]" />
                        <p className="text-xs uppercase tracking-[0.3em] text-[var(--teal-deep)]">Form Kontak</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <label className="space-y-2">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--teal-deep)]">
                                    Nama
                                </span>
                                <input
                                    className={fieldClassName}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nama lengkap"
                                    required
                                />
                            </label>

                            <label className="space-y-2">
                                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--teal-deep)]">
                                    Perusahaan
                                </span>
                                <input
                                    className={fieldClassName}
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Nama perusahaan"
                                    required
                                />
                            </label>
                        </div>

                        <label className="space-y-2">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--teal-deep)]">
                                Layanan yang dibutuhkan
                            </span>
                            <select
                                className={fieldClassName}
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                {serviceOptions.map((service) => (
                                    <option key={service} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="space-y-2">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--teal-deep)]">
                                Pesan
                            </span>
                            <textarea
                                className={`${fieldClassName} min-h-[180px] resize-y`}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Ceritakan kebutuhan proyek, lokasi pekerjaan, atau target visual yang ingin dicapai."
                                required
                            />
                        </label>

                        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                            {/* <div
                                className={`rounded-[1.2rem] border px-4 py-3 text-sm leading-6 ${
                                    submitState.status === "success"
                                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                        : submitState.status === "error"
                                          ? "border-rose-200 bg-rose-50 text-rose-700"
                                          : "border-[rgba(190,219,231,0.92)] bg-white/76 text-slate-500"
                                }`}
                            >
                                {submitState.message}
                            </div> */}

                            <button
                                type="submit"
                                disabled={submitState.status === "loading"}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(88,182,197,0.45)] bg-[var(--hero)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_36px_rgba(17,43,57,0.18)] transition hover:border-[rgba(88,182,197,0.8)] hover:bg-[#173f50] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                <FiSend className="text-base" />
                                {submitState.status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-[rgba(196,223,235,0.86)] bg-[linear-gradient(180deg,rgba(247,252,254,0.98),rgba(238,246,250,0.95))] p-4 shadow-[0_28px_70px_rgba(72,155,214,0.12)] sm:rounded-[2.3rem] sm:p-6">
                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <span className="h-[3px] w-14 rounded-full bg-[var(--teal)]" />
                            <p className="text-xs uppercase tracking-[0.3em] text-[var(--teal-deep)]">Peta Lokasi</p>
                        </div>

                        <a
                            href={mapsLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-[rgba(88,182,197,0.35)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--teal-deep)] transition hover:border-[var(--teal)] hover:bg-[rgba(88,182,197,0.08)]"
                        >
                            Buka di Google Maps
                        </a>
                    </div>

                    <div className="overflow-hidden rounded-[1.7rem] border border-[rgba(205,225,236,0.94)] bg-white shadow-[0_18px_42px_rgba(72,155,214,0.08)]">
                        <iframe
                            title="Peta lokasi CV Karya Indah"
                            src={mapsEmbedUrl}
                            className="h-[320px] w-full border-0 sm:h-[380px] lg:h-[420px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </Reveal>
        </SectionShell>
    );
}
