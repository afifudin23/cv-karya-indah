import { useState } from "react";
import { FiBriefcase, FiMapPin, FiUsers, FiAward, FiMessageSquare } from "react-icons/fi";
import { Reveal, RevealStagger } from "../ui/Reveal";

function ClientLogo({ client }) {
    const [failed, setFailed] = useState(false);
    if (client.logo && !failed) {
        return (
            <div className="flex h-11 w-[88px] items-center justify-start">
                <img
                    src={client.logo}
                    alt={client.shortName}
                    className="max-h-[36px] max-w-[80px] object-contain"
                    onError={() => setFailed(true)}
                />
            </div>
        );
    }
    return (
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[var(--color-primary-600)]">
            <FiBriefcase className="text-[1.1rem]" />
        </div>
    );
}

export default function ClientsSection({ clients }) {
    return (
        <section id="pelanggan">

            {/* ── Hero full-bleed ── */}
            <div className="relative flex items-center justify-center overflow-hidden pt-[var(--header-height)] min-h-[100svh]">
                <img
                    src="/hero-images/pelanggan.webp"
                    alt="Pelanggan CV Karya Indah"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center text-white sm:px-12">
                    <h1 className="font-bold text-[2.4rem] leading-tight sm:text-[3.5rem]">
                        Klien yang Telah<br />Mempercayai Kami
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-white/80">
                        Dari perusahaan manufaktur nasional hingga ritel terkemuka — kami bangga menjadi mitra visual branding berbagai institusi di Indonesia.
                    </p>
                    <div className="mt-7 flex flex-wrap justify-center gap-2">
                        {["Manufaktur", "Ritel", "Perbankan", "FMCG"].map((p) => (
                            <span
                                key={p}
                                className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm"
                            >
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Content ── */}
            <div className="bg-slate-50 py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal as="div">
                        <div className="mb-12 sm:mb-16 mx-auto max-w-2xl text-center">
                            <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                                Pelanggan
                            </p>
                            <h2 className="font-bold text-[2rem] sm:text-[2.5rem] leading-tight text-gray-900">
                                Pelanggan Kami
                            </h2>
                            <p className="mt-4 text-[0.97rem] leading-relaxed text-gray-500">
                                Kami telah bekerja sama dengan berbagai klien dari beragam sektor. Daftar ini mencerminkan relasi kerja yang terus dijaga melalui kualitas hasil dan pelayanan yang konsisten.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal as="div" delay={90}>
                        <RevealStagger as="div" className="grid gap-5 lg:grid-cols-2" stagger={70}>
                            {clients.map((client, index) => (
                                <article
                                    key={client.name}
                                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-200"
                                >
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <ClientLogo client={client} />
                                        <span className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gray-500">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)] mb-2">
                                        Pelanggan Setia
                                    </p>
                                    <h3 className="font-bold text-[1.2rem] text-gray-900 mb-4">
                                        {client.name}
                                    </h3>

                                    <div className="h-px w-full bg-gray-100 mb-4" />

                                    <div className="flex items-start gap-2.5">
                                        <FiMapPin className="mt-0.5 shrink-0 text-[var(--color-primary-500)]" />
                                        <p className="text-[0.92rem] leading-6 text-gray-500">{client.address}</p>
                                    </div>
                                </article>
                            ))}
                        </RevealStagger>

                        <div className="mt-16 grid gap-10 sm:grid-cols-3">

                            <div className="flex flex-col items-center text-center px-4">
                                <FiAward className="mb-5 text-[3rem] text-[var(--color-primary-600)]" />
                                <h3 className="mb-3 font-bold text-[1.3rem] text-[var(--color-primary-600)]">Komitmen Kualitas</h3>
                                <p className="text-[0.92rem] leading-relaxed text-gray-500">
                                    Setiap proyek dikerjakan dengan standar kualitas tinggi dan penuh tanggung jawab, dari awal hingga serah terima akhir.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center px-4">
                                <FiUsers className="mb-5 text-[3rem] text-[var(--color-primary-600)]" />
                                <h3 className="mb-3 font-bold text-[1.3rem] text-[var(--color-primary-600)]">Relasi Jangka Panjang</h3>
                                <p className="text-[0.92rem] leading-relaxed text-gray-500">
                                    Kami selalu berusaha membangun hubungan jangka panjang dengan setiap pelanggan dan terus meningkatkan layanan berdasarkan masukan mereka.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center px-4">
                                <FiMessageSquare className="mb-5 text-[3rem] text-[var(--color-primary-600)]" />
                                <h3 className="mb-3 font-bold text-[1.3rem] text-[var(--color-primary-600)]">Konsultasi Gratis</h3>
                                <p className="mb-4 text-[0.92rem] leading-relaxed text-gray-500">
                                    Ingin bermitra dengan kami? Konsultasikan kebutuhan proyek Anda langsung bersama tim CV Karya Indah.
                                </p>
                                <a
                                    href="https://wa.me/628975836972?text=Halo%20CV%20Karya%20Indah%2C%20saya%20ingin%20berkonsultasi."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[0.92rem] font-semibold text-gray-800 underline underline-offset-4 hover:text-[var(--color-primary-600)]"
                                >
                                    Hubungi via WhatsApp
                                </a>
                            </div>

                        </div>
                    </Reveal>
                </div>
            </div>

        </section>
    );
}
