import { FiAward, FiLayers, FiTool, FiUsers } from "react-icons/fi";
import { Reveal, RevealStagger } from "../ui/Reveal";
import { logoPartners } from "../../data/companyProfileData";

const advantages = [
    {
        icon: FiAward,
        title: "Pengalaman Teruji",
        description:
            "Lebih dari tiga dekade pengalaman membuat setiap proyek dikerjakan dengan alur kerja yang matang, rapi, dan siap menghadapi kebutuhan lapangan.",
    },
    {
        icon: FiLayers,
        title: "Layanan Menyeluruh",
        description:
            "Mulai dari exterior goods, interior goods, hingga dukungan konstruksi — semua ditangani dalam satu ekosistem kerja yang saling terhubung.",
    },
    {
        icon: FiTool,
        title: "Eksekusi Presisi",
        description:
            "Kami mengutamakan material yang tepat, detail produksi yang terjaga, dan hasil visual yang kuat agar fungsi serta citra brand berjalan seimbang.",
    },
    {
        icon: FiUsers,
        title: "Relasi Jangka Panjang",
        description:
            "Tim kami siap memberikan respons cepat dan dukungan berkelanjutan untuk memastikan kepuasan klien di setiap tahap proyek.",
    },
];

const stats = [
    { value: "32+", label: "Tahun Pengalaman" },
    { value: "1992", label: "Berdiri Secara Resmi" },
    { value: "4", label: "Kategori Layanan" },
    { value: "Tegal", label: "Basis Operasional" },
];

export default function HeroSection({ companyData, onNavigate }) {
    return (
        <section id="beranda" className="relative overflow-hidden pt-[var(--header-height)]">

            {/* ── Video Hero (Mobile) ── */}
            <div className="relative h-[calc(100svh-var(--header-height))] overflow-hidden lg:hidden">
                <video
                    src="/hero-vid.mp4"
                    autoPlay loop muted playsInline
                    className="hero-image-intro absolute inset-0 block h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
                    <HeroContent companyData={companyData} onNavigate={onNavigate} size="sm" />
                </div>
            </div>

            {/* ── Video Hero (Desktop) ── */}
            <div className="relative hidden h-[calc(100svh-var(--header-height))] overflow-hidden lg:block">
                <video
                    src="/hero-vid.mp4"
                    autoPlay loop muted playsInline
                    className="hero-image-intro absolute inset-0 block h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
                    <HeroContent companyData={companyData} onNavigate={onNavigate} size="lg" />
                </div>
            </div>


            {/* ── Dipercaya oleh Perusahaan ── */}
            <div className="bg-slate-50 py-16 sm:py-20 overflow-hidden">
                <Reveal as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-10">
                        <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                            Pelanggan
                        </p>
                        <h2 className="font-bold text-[2rem] sm:text-[2.5rem] leading-tight text-gray-900">
                            Dipercaya oleh Perusahaan Terdepan
                        </h2>
                        <p className="mt-4 text-[0.97rem] leading-relaxed text-gray-500">
                            Berbagai perusahaan terkemuka di Indonesia telah mempercayakan kebutuhan branding dan konstruksi visual mereka kepada kami.
                        </p>
                    </div>
                </Reveal>

                {/* 3 baris marquee */}
                <div className="marquee-wrap flex flex-col gap-4">
                    {[
                        { items: logoPartners.slice(0, 6),  track: "marquee-track",         speed: "30s" },
                        { items: logoPartners.slice(6, 12), track: "marquee-track-reverse",  speed: "34s" },
                        { items: logoPartners.slice(12),    track: "marquee-track",          speed: "28s" },
                    ].map((row, rowIdx) => (
                        <div key={rowIdx} className="relative overflow-hidden">
                            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 sm:w-32" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 sm:w-32" />
                            <div className={`${row.track} gap-5 py-1`} style={{ animationDuration: row.speed }}>
                                {[...row.items, ...row.items].map((partner, i) => (
                                    <ClientLogoCard key={i} client={partner} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <Reveal as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 text-center" delay={80}>
                    <button
                        onClick={(e) => onNavigate(e, "/pelanggan")}
                        className="btn btn-primary"
                    >
                        Lihat Semua Pelanggan
                    </button>
                </Reveal>
            </div>

            {/* ── Mengapa Pilih Kami ── */}
            <div className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Reveal as="div">
                        <div className="mx-auto max-w-2xl text-center mb-12">
                            <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                                Keunggulan
                            </p>
                            <h2 className="font-bold text-[2rem] sm:text-[2.5rem] leading-tight text-gray-900">
                                Mengapa Pilih Kami
                            </h2>
                            <p className="mt-4 text-[0.97rem] leading-relaxed text-gray-500">
                                Kami mengedepankan kualitas untuk setiap kebutuhan branding dan konstruksi visual bisnis Anda.
                            </p>
                        </div>
                    </Reveal>

                    <RevealStagger as="div" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={80}>
                        {advantages.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl bg-[var(--color-primary-50)] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="mb-6">
                                        <Icon className="text-[2.6rem] text-gray-900 stroke-[1.4]" />
                                    </div>
                                    <h3 className="font-bold text-[1.15rem] text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-[0.9rem] leading-7 text-gray-600">{item.description}</p>
                                </div>
                            );
                        })}
                    </RevealStagger>

                    <Reveal as="div" className="mt-12">
                        <div className="rounded-2xl bg-[var(--color-primary-600)] px-8 py-10 text-center text-white">
                            <h3 className="font-bold text-[1.5rem] sm:text-[1.8rem] mb-3">
                                Siap Mulai Proyek Anda?
                            </h3>
                            <p className="text-white/80 text-[0.97rem] mb-7 max-w-xl mx-auto">
                                Konsultasikan kebutuhan branding, signage, atau konstruksi visual bisnis Anda bersama tim CV Karya Indah.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a
                                    href="https://wa.me/628975836972?text=Halo%20CV%20Karya%20Indah%2C%20saya%20ingin%20berkonsultasi."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[0.9rem] font-bold text-[var(--color-primary-700)] transition hover:bg-white/90"
                                >
                                    Hubungi via WhatsApp
                                </a>
                                <button
                                    onClick={(e) => onNavigate(e, "/kontak")}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-[0.9rem] font-bold text-white transition hover:bg-white/10"
                                >
                                    Form Kontak
                                </button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

function ClientLogoCard({ client }) {
    const hasLogo = Boolean(client.logo);
    return (
        <div className="shrink-0 flex min-w-[200px] items-center justify-center rounded-2xl border border-gray-100 bg-white px-7 py-5 shadow-sm h-[100px] group transition duration-300 hover:shadow-md hover:border-blue-100">
            {hasLogo && (
                <img
                    src={client.logo}
                    alt={client.shortName}
                    className={`${client.logoClass ?? "max-h-14"} max-w-[160px] object-contain`}
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                    }}
                />
            )}
            <div
                style={{ display: hasLogo ? "none" : "flex" }}
                className="flex-col items-center gap-1.5"
            >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[0.72rem] font-extrabold tracking-wide text-[var(--color-primary-700)]">
                    {client.initials}
                </div>
                <span className="text-center text-[0.72rem] font-semibold leading-tight text-gray-500">
                    {client.shortName}
                </span>
            </div>
        </div>
    );
}

function HeroContent({ companyData, onNavigate, size }) {
    const isLg = size === "lg";
    return (
        <div className={`flex flex-col items-center text-center ${isLg ? "max-w-4xl" : "max-w-2xl"}`}>
            <h1 className={`motion-fade-up-delayed font-bold text-white leading-tight ${isLg ? "text-[2.4rem] lg:text-[3rem]" : "text-[1.75rem] sm:text-[2.1rem]"}`}>
                {companyData.tagline}<br />{companyData.slogan}
            </h1>
            <p className={`motion-rise-in text-white/80 leading-relaxed ${isLg ? "mt-5 max-w-2xl text-[1.15rem]" : "mt-4 max-w-lg text-[1rem]"}`}>
                Layanan branding, signage, interior, dan konstruksi visual yang profesional untuk bisnis dan institusi di seluruh Indonesia.
            </p>
            <div className={`motion-rise-in flex flex-wrap justify-center ${isLg ? "mt-9 gap-4" : "mt-7 gap-3"}`}>
                <a
                    href="https://wa.me/628975836972?text=Halo%20CV%20Karya%20Indah%2C%20saya%20ingin%20berkonsultasi."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center rounded-lg bg-[var(--color-primary-600)] font-semibold text-white transition hover:bg-[var(--color-primary-700)] ${isLg ? "px-8 py-3.5 text-[1rem]" : "px-6 py-3 text-[0.95rem]"}`}
                >
                    Konsultasi Gratis
                </a>
                <button
                    onClick={(e) => onNavigate(e, "/layanan")}
                    className={`inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 ${isLg ? "px-8 py-3.5 text-[1rem]" : "px-6 py-3 text-[0.95rem]"}`}
                >
                    Lihat Layanan
                </button>
            </div>
        </div>
    );
}
