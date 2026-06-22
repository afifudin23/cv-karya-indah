import PageHeroSlider from '../ui/PageHeroSlider';
import { FiUsers, FiAward, FiMessageSquare } from 'react-icons/fi';
import { Reveal } from '../ui/Reveal';
import { logoPartners } from '../../data/companyProfileData';

const heroImages = ['/office_workshop/picture54.png'];

function LogoCard({ client }) {
    const hasLogo = Boolean(client.logo);
    return (
        <div className="shrink-0 flex min-w-[200px] items-center justify-center rounded-2xl border border-gray-100 bg-white px-7 py-5 shadow-sm h-[100px] transition duration-300 hover:shadow-md hover:border-blue-100">
            {hasLogo && (
                <img
                    src={client.logo}
                    alt={client.shortName}
                    className={`${client.logoClass ?? 'max-h-10'} max-w-[140px] object-contain`}
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                    }}
                />
            )}
            <div style={{ display: hasLogo ? 'none' : 'flex' }} className="flex-col items-center gap-1.5">
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

export default function ClientsSection() {
    return (
        <section id="pelanggan">
            {/* â”€â”€ Hero full-bleed â”€â”€ */}
            <div className="relative flex items-center justify-center overflow-hidden pt-[var(--header-height)] min-h-[100svh]">
                <PageHeroSlider images={heroImages} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center text-white sm:px-12">
                    <h1 className="font-bold text-[2.4rem] leading-tight sm:text-[3.5rem]">
                        Klien yang Telah
                        <br />
                        Mempercayai Kami
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-white/80">
                        Dari perusahaan manufaktur nasional hingga ritel terkemuka — kami bangga menjadi mitra visual
                        branding berbagai institusi di Indonesia.
                    </p>
                    <div className="mt-7 flex flex-wrap justify-center gap-2">
                        {['Manufaktur', 'Ritel', 'Perbankan', 'FMCG'].map((p) => (
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

            {/* â”€â”€ Logo Marquee â”€â”€ */}
            <div className="bg-slate-50 pt-20 pb-12 sm:pt-24 sm:pb-14 overflow-hidden">
                <Reveal as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 sm:mb-12 mx-auto max-w-2xl text-center">
                        <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                            Pelanggan
                        </p>
                        <h2 className="font-bold text-[2rem] sm:text-[2.5rem] leading-tight text-gray-900">
                            Pelanggan Setia Kami
                        </h2>
                        <p className="mt-4 text-[0.97rem] leading-relaxed text-gray-500">
                            Kami telah bekerja sama dengan berbagai klien dari beragam sektor — mulai dari industri
                            otomotif, perbankan, ritel, hingga FMCG di seluruh Indonesia.
                        </p>
                    </div>
                </Reveal>

                {/* 3 baris marquee */}
                <div className="marquee-wrap flex flex-col gap-4 py-14">
                    {[
                        { items: logoPartners.slice(0, 6), track: 'marquee-track', speed: '30s' },
                        { items: logoPartners.slice(6, 12), track: 'marquee-track-reverse', speed: '34s' },
                        { items: logoPartners.slice(12), track: 'marquee-track', speed: '28s' },
                    ].map((row, rowIdx) => (
                        <div key={rowIdx} className="relative overflow-hidden">
                            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 sm:w-32" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 sm:w-32" />
                            <div className={`${row.track} gap-5 py-1`} style={{ animationDuration: row.speed }}>
                                {[...row.items, ...row.items, ...row.items, ...row.items].map((partner, i) => (
                                    <LogoCard key={i} client={partner} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Feature columns */}
                <Reveal as="div" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mt-14 grid gap-10 sm:grid-cols-3">
                        <div className="flex flex-col items-center text-center px-4">
                            <FiAward className="mb-5 text-[3rem] text-[var(--color-primary-600)]" />
                            <h3 className="mb-3 font-bold text-[1.3rem] text-[var(--color-primary-600)]">
                                Komitmen Kualitas
                            </h3>
                            <p className="text-[0.92rem] leading-relaxed text-gray-500">
                                Setiap proyek dikerjakan dengan standar kualitas tinggi dan penuh tanggung jawab, dari
                                awal hingga serah terima akhir.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center px-4">
                            <FiUsers className="mb-5 text-[3rem] text-[var(--color-primary-600)]" />
                            <h3 className="mb-3 font-bold text-[1.3rem] text-[var(--color-primary-600)]">
                                Relasi Jangka Panjang
                            </h3>
                            <p className="text-[0.92rem] leading-relaxed text-gray-500">
                                Kami selalu berusaha membangun hubungan jangka panjang dengan setiap pelanggan dan terus
                                meningkatkan layanan berdasarkan masukan mereka.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center px-4">
                            <FiMessageSquare className="mb-5 text-[3rem] text-[var(--color-primary-600)]" />
                            <h3 className="mb-3 font-bold text-[1.3rem] text-[var(--color-primary-600)]">
                                Konsultasi Gratis
                            </h3>
                            <p className="mb-4 text-[0.92rem] leading-relaxed text-gray-500">
                                Ingin bermitra dengan kami? Konsultasikan kebutuhan proyek Anda langsung bersama tim CV
                                Karya Indah.
                            </p>
                            <a
                                href="https://wa.me/6282258661996?text=Halo%20CV%20Karya%20Indah%2C%20saya%20ingin%20berkonsultasi."
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
        </section>
    );
}
