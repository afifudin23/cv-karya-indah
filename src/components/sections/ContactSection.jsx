import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiCreditCard, FiSend, FiMessageSquare } from "react-icons/fi";
import { servicesData } from "../../data/companyProfileData";
import { openWhatsAppContact } from "../../lib/openWhatsAppContact";
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
    const [submitState, setSubmitState] = useState({ status: "idle", message: "" });

    const serviceOptions = [...servicesData.map((s) => s.title), "Lainnya"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((cur) => ({ ...cur, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitState({ status: "loading", message: "Mengarahkan ke WhatsApp..." });
        const popup = openWhatsAppContact(formData);
        if (!popup) {
            setSubmitState({ status: "error", message: "Gagal membuka WhatsApp. Aktifkan pop-up, lalu coba lagi." });
            return;
        }
        setSubmitState({ status: "success", message: "WhatsApp terbuka. Tekan Send untuk mengirim pesan." });
        setFormData({ name: "", company: "", service: servicesData[0]?.title || "", message: "" });
    };

    const inputClass =
        "w-full rounded-xl border border-[var(--color-primary-200)] bg-white px-4 py-3 text-[0.95rem] text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[var(--color-primary-400)] focus:ring-2 focus:ring-[var(--color-primary-100)]";

    const infoCards = [
        { icon: FiMapPin,    label: "Kunjungi Kami",  value: companyData.address },
        { icon: FiPhone,     label: "Telepon",         value: companyData.phones.join("  /  ") },
        { icon: FiMail,      label: "Email",           value: companyData.email },
        // { icon: FiCreditCard,label: "Rekening Bank",   value: companyData.bank?.name, sub: `${companyData.bank?.account} · a/n ${companyData.bank?.holder}` },
    ];

    return (
        <section id="kontak" className="bg-white pt-[var(--header-height)]">

            {/* ── Form ── */}
            <div className="py-20 sm:py-24">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <Reveal as="div" className="mb-12 text-center">
                        <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                            Konsultasi Gratis
                        </p>
                        <h1 className="font-bold text-[2.2rem] sm:text-[3rem] leading-tight text-[var(--color-primary-600)]">
                            Jadwalkan Konsultasi<br />Proyek Anda
                        </h1>
                        <p className="mt-4 text-[0.97rem] leading-relaxed text-gray-500 max-w-xl mx-auto">
                            Isi formulir di bawah untuk mendapatkan gambaran awal dan rekomendasi layanan dari tim CV Karya Indah.
                        </p>
                    </Reveal>

                    {/* Form card */}
                    <Reveal as="div" delay={80}>
                        <form className="space-y-5" onSubmit={handleSubmit}>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="space-y-1.5">
                                    <span className="text-[0.85rem] font-semibold text-gray-700">
                                        Nama Lengkap <span className="text-rose-500">*</span>
                                    </span>
                                    <input
                                        className={inputClass}
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Contoh: Budi Santoso"
                                        required
                                    />
                                </label>
                                <label className="space-y-1.5">
                                    <span className="text-[0.85rem] font-semibold text-gray-700">
                                        Nama Perusahaan <span className="text-rose-500">*</span>
                                    </span>
                                    <input
                                        className={inputClass}
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Contoh: PT. Maju Bersama"
                                        required
                                    />
                                </label>
                            </div>

                            <label className="space-y-1.5 block">
                                <span className="text-[0.85rem] font-semibold text-gray-700">
                                    Layanan yang Dibutuhkan <span className="text-rose-500">*</span>
                                </span>
                                <select
                                    className={inputClass}
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </label>

                            <label className="space-y-1.5 block">
                                <span className="text-[0.85rem] font-semibold text-gray-700">Kebutuhan Proyek</span>
                                <textarea
                                    className={`${inputClass} min-h-[180px] resize-y`}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Ceritakan kebutuhan proyek, lokasi pekerjaan, atau target visual yang ingin dicapai..."
                                    required
                                />
                            </label>

                            {submitState.status !== "idle" && (
                                <div className={`rounded-xl border px-4 py-3 text-[0.87rem] ${
                                    submitState.status === "success"
                                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                        : submitState.status === "error"
                                        ? "border-rose-200 bg-rose-50 text-rose-700"
                                        : "border-gray-200 bg-gray-50 text-gray-500"
                                }`}>
                                    {submitState.message}
                                </div>
                            )}

                            <div className="grid gap-3 pt-1 sm:grid-cols-2">
                                <a
                                    href="https://wa.me/628975836972?text=Halo%20CV%20Karya%20Indah%2C%20saya%20ingin%20berkonsultasi."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] px-6 py-3.5 text-[0.95rem] font-semibold text-[var(--color-primary-700)] transition hover:bg-[var(--color-primary-100)]"
                                >
                                    <FiMessageSquare className="text-[1rem]" />
                                    Tanyakan Langsung
                                </a>
                                <button
                                    type="submit"
                                    disabled={submitState.status === "loading"}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-primary-600)] px-6 py-3.5 text-[0.95rem] font-semibold text-white transition hover:bg-[var(--color-primary-700)] disabled:opacity-60"
                                >
                                    <FiSend className="text-[0.9rem]" />
                                    {submitState.status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                                </button>
                            </div>

                        </form>
                    </Reveal>
                </div>
            </div>

            {/* ── Map ── */}
            <div className="bg-slate-50 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal as="div" className="mb-6 flex items-center justify-between">
                        <div>
                            <p className="mb-1 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                                Lokasi
                            </p>
                            <h2 className="font-bold text-[1.4rem] text-gray-900">Peta Lokasi Kami</h2>
                        </div>
                        <a
                            href={mapsLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[0.85rem] font-semibold text-[var(--color-primary-600)] hover:underline"
                        >
                            Buka di Google Maps →
                        </a>
                    </Reveal>
                    <Reveal as="div" delay={60}>
                        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                            <iframe
                                title="Peta lokasi CV Karya Indah"
                                src={mapsEmbedUrl}
                                className="h-[360px] w-full border-0 sm:h-[440px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* ── Info cards ── */}
            <div className="bg-slate-50 py-14 sm:py-16">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <Reveal as="div" className="mb-10 text-center">
                        <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                            Hubungi Kami
                        </p>
                        <h2 className="font-bold text-[2rem] sm:text-[2.4rem] leading-tight text-gray-900">Cara Menghubungi Kami</h2>
                        <p className="mt-3 mx-auto max-w-xl text-[0.97rem] text-gray-500">
                            Kami siap merespons setiap pertanyaan dan kebutuhan proyek Anda.
                        </p>
                    </Reveal>

                    <RevealStagger as="div" className="grid gap-5 sm:grid-cols-3" stagger={70}>

                        <div className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm transition duration-300 hover:-translate-y-1">
                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-50)]">
                                <FiMail className="text-[1.4rem] text-[var(--color-primary-600)] stroke-[1.5]" />
                            </div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)] mb-1">Email</p>
                            <h3 className="font-bold text-[1.05rem] text-gray-900 mb-2">Pertanyaan</h3>
                            <p className="text-[0.87rem] leading-6 text-gray-500 mb-4">
                                Ada pertanyaan tentang layanan atau produk kami? Tim kami siap membantu.
                            </p>
                            <a href={`mailto:${companyData.email}`} className="text-[0.87rem] font-semibold text-[var(--color-primary-600)] hover:underline underline-offset-4">
                                {companyData.email}
                            </a>
                        </div>

                        <div className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm transition duration-300 hover:-translate-y-1">
                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-50)]">
                                <FiPhone className="text-[1.4rem] text-[var(--color-primary-600)] stroke-[1.5]" />
                            </div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)] mb-1">Telepon</p>
                            <h3 className="font-bold text-[1.05rem] text-gray-900 mb-2">Dukungan</h3>
                            <p className="text-[0.87rem] leading-6 text-gray-500 mb-4">
                                Butuh diskusi langsung mengenai proyek? Hubungi tim kami via telepon.
                            </p>
                            <a href={`tel:${companyData.phones[0]}`} className="text-[0.87rem] font-semibold text-[var(--color-primary-600)] hover:underline underline-offset-4">
                                {companyData.phones.join("  /  ")}
                            </a>
                        </div>

                        <div className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm transition duration-300 hover:-translate-y-1">
                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-50)]">
                                <FiMapPin className="text-[1.4rem] text-[var(--color-primary-600)] stroke-[1.5]" />
                            </div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)] mb-1">Alamat</p>
                            <h3 className="font-bold text-[1.05rem] text-gray-900 mb-2">Kunjungi Kami</h3>
                            <p className="text-[0.87rem] leading-6 text-gray-500 mb-4">
                                Ingin bertemu langsung dengan tim kami? Kami menerima kunjungan di kantor.
                            </p>
                            <a href="https://maps.app.goo.gl/gHhTQ7mLCE498mMo6" target="_blank" rel="noreferrer" className="text-[0.87rem] font-semibold text-[var(--color-primary-600)] hover:underline underline-offset-4">
                                {companyData.address}
                            </a>
                        </div>

                        {/* Rekening Bank — hidden
                        <div className="rounded-2xl bg-white border border-gray-100 p-7 shadow-sm transition duration-300 hover:-translate-y-1">
                            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-50)]">
                                <FiCreditCard className="text-[1.4rem] text-[var(--color-primary-600)] stroke-[1.5]" />
                            </div>
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)] mb-1">Pembayaran</p>
                            <h3 className="font-bold text-[1.05rem] text-gray-900 mb-2">Rekening Bank</h3>
                            <p className="text-[0.87rem] leading-6 text-gray-500 mb-4">
                                Untuk pembayaran dan transaksi proyek, gunakan rekening resmi perusahaan.
                            </p>
                            <p className="text-[0.87rem] font-semibold text-gray-800">
                                {companyData.bank?.name}<br />
                                <span className="font-normal text-gray-500">{companyData.bank?.account} · a/n {companyData.bank?.holder}</span>
                            </p>
                        </div>
                        */}

                    </RevealStagger>
                </div>
            </div>

        </section>
    );
}
