import { createElement, useState } from "react";
import ImageViewer from "../ui/ImageViewer";
import { Reveal, RevealStagger } from "../ui/Reveal";

export default function ProfileSection({ companyData }) {
    const [lightboxImage, setLightboxImage] = useState(null);

    const profileHighlights = [
        {
            label: "Berdiri Resmi",
            value: "11 Desember 1992",
            detail: "Lebih dari tiga dekade melayani kebutuhan branding dan konstruksi visual.",
        },
        {
            label: "Direktur",
            value: companyData.director,
            detail: "Kepemimpinan yang menjaga kualitas produksi, layanan, dan relasi klien.",
        },
        {
            label: "Lokasi",
            value: "Kota Tegal",
            detail: "Basis operasional yang mendukung layanan regional dan kebutuhan proyek skala luas.",
        },
        {
            label: "Legalitas",
            value: `${companyData.legalities.length} dokumen utama`,
            detail: "Dokumen inti perusahaan tersedia untuk mendukung kerja sama profesional.",
        },
    ];

    const companyRows = [
        { label: "Nama perusahaan", value: companyData.name },
        { label: "Direktur", value: companyData.director },
        { label: "Alamat", value: companyData.address },
        { label: "No. telp", value: companyData.phones.join(", ") },
        { label: "E-mail", value: companyData.email },
        { label: "Jenis usaha", value: companyData.businessType },
    ];

    const legalityShowcaseItems = [
        {
            id: "01",
            image: "/legalitas1.jpeg",
            eyebrow: "OSS RBA",
            title: "Sertifikat Standar",
            subtitle: "Perizinan berusaha berbasis risiko",
            summary:
                "Dokumen utama OSS yang menegaskan identitas usaha CV Karya Indah, berikut NIB, alamat usaha, dan klasifikasi kegiatan utama.",
            meta: ["NIB 9120207830213", "Terbit 20 Agustus 2024", "KBLI 41019"],
        },
        {
            id: "02",
            image: "/legalitas2.jpeg",
            eyebrow: "Perpajakan",
            title: "Surat Keterangan Terdaftar Pajak",
            subtitle: "Administrasi NPWP badan usaha",
            summary:
                "Dokumen perpajakan yang memuat NPWP badan, status administrasi, serta rujukan kantor pajak terdaftar untuk perusahaan.",
            meta: ["NPWP 01.527.761.9-501.000", "KPP Pratama Tegal", "8 Agustus 2024"],
        },
        {
            id: "03",
            image: "/legalitas3.jpeg",
            eyebrow: "Lampiran OSS",
            title: "Lampiran KBLI dan Persyaratan",
            subtitle: "Ruang lingkup izin usaha",
            summary:
                "Lampiran yang merangkum kode KBLI, klasifikasi risiko, serta persyaratan dan kewajiban usaha yang terkait dengan sertifikat standar.",
            meta: ["Lampiran NIB", "KBLI 41019", "Persyaratan usaha"],
        },
    ];

    const snapshotRows = [
        { label: "Bidang utama", value: companyData.businessType },
        { label: "Slogan", value: companyData.slogan },
        { label: "Kontak", value: companyData.email },
    ];

    const servicePillars = ["Advertising", "Signage", "Interior", "Konstruksi"];

    return (
        <section
            id="profil"
            className="relative overflow-hidden border-y border-black/5 bg-[linear-gradient(180deg,#eef6ff_0%,#f7fbff_52%,#edf6fb_100%)] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(90,176,185,0.18)_0%,rgba(90,176,185,0)_72%)] blur-2xl" />
                <div className="absolute right-[-6%] top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(26,45,59,0.16)_0%,rgba(26,45,59,0)_72%)] blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-80 w-[34rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0)_74%)]" />
            </div>

            <div className="relative mx-auto max-w-7xl space-y-12 sm:space-y-14">
                <div className="sm:space-y-6">
                    <Reveal as="div" className="max-w-3xl hidden sm:block">
                        <p className="label-size uppercase tracking-[0.34em] text-[var(--teal-deep)]">
                            Profil Perusahaan
                        </p>
                    </Reveal>

                    <Reveal
                        as="div"
                        className="grid gap-6 sm:gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-start"
                        delay={60}
                    >
                        <div className="space-y-6 xl:sticky xl:top-28">
                            <GlowCard
                                tone="dark"
                                className="rounded-none border-0 bg-transparent p-0 text-[var(--ink-strong)] shadow-none sm:rounded-[2.5rem] sm:border sm:border-white/15 sm:bg-[linear-gradient(180deg,rgba(9,28,45,0.98),rgba(14,40,61,0.96))] sm:p-10 sm:text-white sm:shadow-[0_36px_80px_rgba(17,43,57,0.3)]"
                            >
                                <div className="absolute right-0 top-0 hidden h-44 w-44 translate-x-10 -translate-y-10 rounded-full bg-[radial-gradient(circle,rgba(90,176,185,0.38)_0%,rgba(90,176,185,0)_72%)] sm:block" />
                                <div className="absolute bottom-0 right-6 hidden text-[7rem] font-semibold leading-none text-white/[0.07] sm:block">
                                    1992
                                </div>

                                <div className="relative">
                                    <p className="label-size uppercase tracking-[0.34em] text-[var(--teal-deep)] sm:text-cyan-100/90">
                                        General Profile
                                    </p>
                                    <h3 className="mt-4 max-w-fit font-display text-[2.05rem] uppercase leading-[0.92] text-[var(--ink-strong)] sm:mt-5 sm:text-[4.4rem] sm:text-white">
                                        CV. Karya Indah
                                    </h3>
                                    <p className="descriptive-copy mt-4 max-w-xl text-[0.94rem] leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8 sm:text-slate-200">
                                        {companyData.tagline}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                                        {servicePillars.map((item) => (
                                            <span
                                                key={item}
                                                className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 sm:rounded-full sm:border sm:border-white/12 sm:bg-white/10 sm:px-4 sm:py-2 sm:text-xs sm:text-white/95 sm:backdrop-blur-sm"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 border-t border-[rgba(15,23,42,0.1)] pt-6 sm:mt-10 sm:rounded-[1.8rem] sm:border sm:border-white/10 sm:bg-white/10 sm:p-5 sm:backdrop-blur-sm">
                                        <p className="label-size uppercase tracking-[0.28em] text-[var(--teal-deep)] sm:text-cyan-100/85">
                                            Positioning
                                        </p>
                                        <p className="mt-3 text-[1.25rem] font-semibold leading-tight text-[var(--ink-strong)] sm:text-2xl sm:text-white">
                                            {companyData.slogan}
                                        </p>
                                        <p className="descriptive-copy mt-3 max-w-lg text-[0.94rem] leading-7 text-slate-600 sm:text-[0.98rem] sm:text-slate-300">
                                            Dari percetakan sablon hingga pengerjaan signage, interior, dan konstruksi
                                            visual, kami menata layanan end-to-end agar hasil kerja tetap presisi dan
                                            profesional.
                                        </p>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>

                        <GlowCard
                            as="article"
                            tone="light"
                            className="rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[2.55rem] sm:border sm:border-white/75 sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,251,253,0.94))] sm:p-10 sm:shadow-[0_30px_70px_rgba(72,155,214,0.12)]"
                        >
                            <div className="mb-5 flex items-center gap-4 sm:mb-7">
                                <span className="h-[4px] w-16 rounded-full bg-[var(--teal)]" />
                                <p className="label-size uppercase tracking-[0.3em] text-[var(--teal-deep)]">
                                    Tentang Perusahaan
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="descriptive-copy space-y-5 text-[0.95rem] leading-7 text-slate-700 sm:space-y-6 sm:text-[1.08rem] sm:leading-9">
                                    <p>{companyData.description}</p>
                                    <p>{companyData.descriptionLong}</p>
                                </div>

                                <div className="grid gap-4 md:grid-cols-3">
                                    {snapshotRows.map((item) => (
                                        <div
                                            key={item.label}
                                            className="border-b border-[rgba(15,23,42,0.1)] py-4 last:border-b-0 sm:rounded-[1.6rem] sm:border sm:border-[rgba(212,230,239,0.92)] sm:bg-[linear-gradient(180deg,rgba(251,254,255,0.98),rgba(241,248,251,0.95))] sm:px-5 sm:py-5 sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
                                        >
                                            <p className="label-size uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                                                {item.label}
                                            </p>
                                            <p className="mt-3 max-w-full break-words text-[1rem] font-semibold leading-[1.5] text-[var(--ink-strong)] sm:text-[1.12rem]">
                                                {item.value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GlowCard>
                    </Reveal>
                </div>

                <Reveal
                    as="section"
                    className="rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[2.6rem] sm:border sm:border-white/70 sm:bg-[linear-gradient(180deg,rgba(249,252,254,0.96),rgba(242,247,250,0.94))] sm:p-8 sm:shadow-[0_28px_68px_rgba(72,155,214,0.1)]"
                >
                    <div className="mb-8 w-full">
                        <p className="label-size uppercase tracking-[0.34em] text-[var(--teal-deep)]">Profil Singkat</p>
                        <h3 className="mt-3 font-display uppercase leading-[1] text-[1.85rem] text-[var(--ink-strong)] sm:mt-4 sm:text-[length:var(--text-section-title)] sm:leading-[0.96]">
                            Sorotan Profil
                        </h3>
                        <p className="descriptive-copy mt-3 w-full text-[0.92rem] leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
                            Bagian ini merangkum identitas, pengalaman, dan keunggulan utama CV Karya Indah sebagai
                            landasan kepercayaan bagi calon mitra dan pelanggan.
                        </p>
                    </div>

                    <RevealStagger as="div" className="grid gap-0 sm:gap-4 md:grid-cols-2 xl:grid-cols-4" stagger={70}>
                        {profileHighlights.map((item) => (
                            <MetricCard key={item.label} {...item} />
                        ))}
                    </RevealStagger>
                </Reveal>

                <Reveal
                    as="section"
                    className="rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[2.8rem] sm:border sm:border-white/70 sm:bg-[linear-gradient(180deg,rgba(248,252,254,0.96),rgba(241,247,250,0.95))] sm:p-8 sm:shadow-[0_32px_78px_rgba(72,155,214,0.12)] lg:p-10"
                >
                    <div className="w-full">
                        <p className="label-size uppercase tracking-[0.34em] text-[var(--teal-deep)]">
                            Detail Perusahaan
                        </p>
                        <h3 className="mt-3 font-display uppercase leading-[1] text-[1.85rem] text-[var(--ink-strong)] sm:mt-4 sm:text-[length:var(--text-section-title)] sm:leading-[0.94]">
                            Informasi Perusahaan
                        </h3>
                        <p className="descriptive-copy mt-3 w-full text-[0.92rem] leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
                            Bagian ini menyajikan data inti perusahaan, legalitas, visi, misi, dan kebijakan kerja
                            secara terstruktur agar mudah dipahami dalam satu alur baca.
                        </p>
                    </div>

                    <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
                        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:auto-rows-fr">
                            <CompanySheet title="Data Perusahaan" rows={companyRows} />
                            <DetailListCard title="Legalitas Perusahaan" rows={companyData.legalities} />
                        </div>

                        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:auto-rows-fr">
                            <NarrativeCard
                                title="Visi Perusahaan"
                                accent="sm:border-white/10 sm:bg-[linear-gradient(180deg,rgba(9,28,45,0.98),rgba(14,40,61,0.96))] sm:text-white"
                                textClassName="text-slate-700 sm:text-slate-200"
                                titleClassName="text-[var(--teal-deep)] sm:text-cyan-100/90"
                                glowTone="dark"
                            >
                                {companyData.vision}
                            </NarrativeCard>

                            <NarrativeCard
                                title="Misi Perusahaan"
                                accent="sm:border-white/10 sm:bg-[linear-gradient(180deg,rgba(9,28,45,0.98),rgba(14,40,61,0.96))] sm:text-white"
                                textClassName="text-slate-700 sm:text-slate-200"
                                titleClassName="text-[var(--teal-deep)] sm:text-cyan-100/90"
                                glowTone="dark"
                            >
                                {companyData.mission}
                            </NarrativeCard>
                        </div>

                        <NarrativeCard title="Kebijakan K3">
                            CV Karya Indah menerapkan kebijakan keselamatan dan kesehatan kerja secara disiplin pada
                            setiap tahapan produksi, pengiriman, hingga instalasi di lapangan. Setiap aktivitas
                            operasional dijalankan dengan prosedur kerja yang tertib, penggunaan perlengkapan yang
                            sesuai, serta pengawasan yang bertanggung jawab agar mutu pekerjaan tetap terjaga dan
                            seluruh tim, mitra, maupun pelanggan merasa aman selama proses berlangsung.
                        </NarrativeCard>
                    </div>
                </Reveal>

                <Reveal
                    as="section"
                    onMouseMove={handleGlowMove}
                    onMouseLeave={handleGlowLeave}
                    style={{
                        "--glow-x": "50%",
                        "--glow-y": "50%",
                        "--glow-opacity": "0",
                    }}
                    className="relative overflow-hidden rounded-none border-0 bg-transparent p-0 text-[var(--ink-strong)] shadow-none sm:rounded-[2.8rem] sm:border sm:border-white/70 sm:bg-[linear-gradient(135deg,rgba(9,28,45,0.98),rgba(14,40,61,0.96)_58%,rgba(27,78,103,0.94))] sm:p-8 sm:text-white sm:shadow-[0_36px_90px_rgba(17,43,57,0.24)] lg:p-10"
                >
                    <div
                        className="pointer-events-none absolute inset-0 hidden opacity-[var(--glow-opacity)] transition-opacity duration-300 sm:block"
                        style={{
                            background:
                                "radial-gradient(260px circle at var(--glow-x) var(--glow-y), rgba(255,255,255,0.16), rgba(255,255,255,0.08) 24%, rgba(255,255,255,0.03) 46%, rgba(255,255,255,0) 72%)",
                        }}
                    />
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 hidden h-px sm:block"
                        style={{
                            background:
                                "linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.52),rgba(255,255,255,0))",
                        }}
                    />
                    <div className="grid gap-6 px-0 py-0 sm:gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
                        <div className="w-full">
                            <p className="label-size uppercase tracking-[0.34em] text-[var(--teal-deep)] sm:text-cyan-100/82">
                                Struktur Organisasi
                            </p>
                            <h3 className="mt-3 font-display uppercase leading-[1] text-[1.85rem] text-[var(--ink-strong)] sm:mt-4 sm:text-[length:var(--text-section-title)] sm:leading-[0.92] sm:text-white">
                                Struktur Organisasi
                            </h3>
                            <p className="descriptive-copy mt-3 w-full text-[0.92rem] leading-7 text-slate-600 sm:mt-5 sm:text-[1.05rem] sm:leading-8 sm:text-slate-200">
                                Bagian ini menampilkan susunan jabatan dan pembagian peran secara jelas agar alur
                                koordinasi, tanggung jawab, dan proses kerja perusahaan mudah dipahami.
                            </p>

                            <div className="mt-7 grid gap-0 sm:mt-8 sm:gap-4">
                                <GlowCard
                                    tone="light"
                                    className="border-b border-[var(--color-border-soft)] bg-transparent pb-4 last:border-b-0 sm:rounded-[1.6rem] sm:border sm:border-white/10 sm:bg-white/8 sm:p-5 sm:backdrop-blur-sm sm:hover:border-white/16 sm:hover:bg-white/[0.1]"
                                >
                                    <p className="label-size uppercase tracking-[0.28em] text-[var(--teal-deep)] sm:text-cyan-100/78">
                                        Highlights
                                    </p>
                                    <p className="descriptive-copy mt-2 text-[0.95rem] font-normal leading-7 text-slate-700 sm:mt-3 sm:text-[1.05rem] sm:text-white">
                                        Hierarki operasional, administrasi, dan lapangan tersusun lebih tegas.
                                    </p>
                                </GlowCard>

                                <GlowCard
                                    tone="light"
                                    className="border-b border-[var(--color-border-soft)] bg-transparent pb-4 last:border-b-0 sm:rounded-[1.6rem] sm:border sm:border-white/10 sm:bg-white/8 sm:p-5 sm:backdrop-blur-sm sm:hover:border-white/16 sm:hover:bg-white/[0.1]"
                                >
                                    <p className="label-size uppercase tracking-[0.28em] text-[var(--teal-deep)] sm:text-cyan-100/78">
                                        Layout
                                    </p>
                                    <p className="descriptive-copy mt-2 text-[0.95rem] font-normal leading-7 text-slate-700 sm:mt-3 sm:text-[1.05rem] sm:text-white">
                                        Gambar struktur ditaruh di samping kanan supaya section terasa lebih seimbang.
                                    </p>
                                </GlowCard>
                            </div>
                        </div>

                        <GlowCard className="w-full rounded-none border-0 bg-transparent p-0 shadow-none backdrop-blur-none sm:rounded-[2.25rem] sm:border sm:border-white/12 sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] sm:p-5 sm:shadow-[0_24px_70px_rgba(6,18,25,0.2)] sm:backdrop-blur-sm">
                            <div className="mb-4 sm:mb-5">
                                <p className="label-size uppercase tracking-[0.28em] text-[var(--teal-deep)] sm:text-cyan-100/78">
                                    Organization Tree
                                </p>
                                <p className="mt-2 text-base font-normal text-[var(--ink-strong)] sm:text-lg sm:text-white">
                                    Bagan organisasi ditampilkan di sisi kanan sebagai fokus visual utama.
                                </p>
                            </div>

                            <div className="rounded-none border-0 bg-transparent p-0 sm:rounded-[1.9rem] sm:border sm:border-white/10 sm:bg-[radial-gradient(circle_at_top,rgba(88,182,197,0.12),rgba(246,251,253,0.96)_34%,rgba(232,242,247,0.92)_100%)] sm:p-6">
                                <div className="flex h-[250px] items-center justify-center overflow-hidden rounded-[1.05rem] bg-white/92 p-2 shadow-none sm:h-[460px] sm:rounded-[1.45rem] sm:bg-white/72 sm:px-5 sm:py-6 sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] lg:h-[520px]">
                                    <img
                                        src="/struktur.jpeg"
                                        alt="Struktur organisasi CV Karya Indah"
                                        onClick={() =>
                                            setLightboxImage({
                                                src: "/struktur.jpeg",
                                                alt: "Struktur organisasi CV Karya Indah",
                                            })
                                        }
                                        className="block h-auto max-h-[360px] w-auto max-w-none cursor-zoom-in object-contain shadow-none transition sm:max-h-[560px] sm:shadow-[0_18px_46px_rgba(72,155,214,0.12)] sm:hover:shadow-[0_22px_54px_rgba(72,155,214,0.18)]"
                                    />
                                </div>
                            </div>
                        </GlowCard>
                    </div>
                </Reveal>

                <Reveal as="div" delay={60}>
                    <LegalitiesShowcase items={legalityShowcaseItems} onOpenImage={setLightboxImage} />
                </Reveal>
            </div>

            <ImageViewer
                key={lightboxImage?.src ?? "lightbox"}
                image={lightboxImage}
                onClose={() => setLightboxImage(null)}
            />
        </section>
    );
}

function LegalitiesShowcase({ items, onOpenImage }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = items[activeIndex];
    const lightboxItems = items.map((item) => ({
        src: item.image,
        alt: item.title,
        title: item.title,
        eyebrow: item.eyebrow,
    }));

    const handlePrevious = () => {
        setActiveIndex((current) => (current - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % items.length);
    };

    return (
        <section className="rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[2.85rem] sm:border sm:border-white/80 sm:bg-[linear-gradient(180deg,rgba(252,254,255,0.98),rgba(242,248,251,0.95))] sm:p-8 sm:shadow-[0_34px_84px_rgba(72,155,214,0.14)] lg:p-10">
            <div className="w-full">
                <p className="label-size uppercase tracking-[0.34em] text-[var(--teal-deep)]">Dokumen Legalitas</p>
                <h3 className="mt-3 font-display uppercase leading-[1] text-[1.85rem] text-[var(--ink-strong)] sm:mt-4 sm:text-[length:var(--text-section-title)] sm:leading-[0.94]">
                    Legalitas Perusahaan
                </h3>
                <p className="descriptive-copy mt-3 w-full text-[0.92rem] leading-7 text-slate-600 sm:mt-5 sm:text-[1.05rem] sm:leading-8">
                    Bagian ini menampilkan dokumen legal utama perusahaan secara ringkas dan terstruktur agar validitas
                    usaha dapat ditinjau dengan lebih mudah dan meyakinkan.
                </p>
            </div>

            <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
                <GlowCard className="rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[2.2rem] sm:border sm:border-[rgba(210,228,238,0.96)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,249,252,0.95))] sm:p-5 sm:shadow-[0_22px_56px_rgba(72,155,214,0.11)]">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="label-size uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                                Preview Dokumen
                            </p>
                            <p className="mt-2 text-base font-semibold text-[var(--ink-strong)] sm:text-lg">
                                {activeItem.title}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 self-start sm:self-auto">
                            <button
                                type="button"
                                onClick={handlePrevious}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(186,214,228,0.9)] bg-white text-[var(--teal-deep)] transition hover:border-[var(--teal)] hover:text-[var(--hero)]"
                                aria-label="Dokumen sebelumnya"
                            >
                                &larr;
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(186,214,228,0.9)] bg-white text-[var(--teal-deep)] transition hover:border-[var(--teal)] hover:text-[var(--hero)]"
                                aria-label="Dokumen berikutnya"
                            >
                                &rarr;
                            </button>
                        </div>
                    </div>

                    <div className="rounded-[1.6rem] border border-white/90 bg-[radial-gradient(circle_at_top,rgba(88,182,197,0.12),rgba(255,255,255,0.96)_34%,rgba(240,247,250,0.94)_100%)] p-2.5 sm:rounded-[1.8rem] sm:p-4">
                        <button
                            type="button"
                            onClick={() =>
                                onOpenImage({
                                    items: lightboxItems,
                                    index: activeIndex,
                                })
                            }
                            className="flex w-full justify-center overflow-hidden rounded-[1.2rem] bg-white px-2 py-2 shadow-[0_18px_42px_rgba(72,155,214,0.08)] transition hover:shadow-[0_22px_48px_rgba(72,155,214,0.14)] sm:rounded-[1.4rem] sm:px-4 sm:py-4"
                        >
                            <img
                                src={activeItem.image}
                                alt={activeItem.title}
                                className="h-auto max-h-[360px] w-auto rounded-[0.9rem] object-contain sm:max-h-[520px] sm:rounded-[1rem]"
                            />
                        </button>
                    </div>
                </GlowCard>

                <div className="space-y-5">
                    <GlowCard className="rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[2.15rem] sm:border sm:border-white/80 sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,249,252,0.94))] sm:p-7 sm:shadow-[0_24px_60px_rgba(72,155,214,0.1)]">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <p className="label-size uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                                    {activeItem.eyebrow}
                                </p>
                                <h4 className="content-title-size mt-3 font-display uppercase leading-[0.94] text-[var(--ink-strong)]">
                                    {activeItem.title}
                                </h4>
                                <p className="descriptive-copy mt-3 text-base font-medium text-slate-700 sm:text-lg">
                                    {activeItem.subtitle}
                                </p>
                            </div>
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--hero)] text-sm font-semibold text-white sm:h-12 sm:w-12">
                                {activeItem.id}
                            </span>
                        </div>

                        <p className="descriptive-copy mt-5 text-[0.98rem] leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
                            {activeItem.summary}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {activeItem.meta.map((item) => (
                                <span
                                    key={item}
                                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--teal-deep)] sm:rounded-full sm:border sm:border-[rgba(190,219,231,0.95)] sm:bg-[rgba(88,182,197,0.08)] sm:px-4 sm:py-2"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </GlowCard>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {items.map((item, index) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                className={`border-b border-[rgba(15,23,42,0.12)] bg-transparent px-0 py-3 text-left transition last:border-b-0 sm:rounded-[1.5rem] sm:border sm:px-4 sm:py-4 ${
                                    index === activeIndex
                                        ? "text-[var(--ink-strong)] sm:border-[var(--teal)] sm:bg-[linear-gradient(180deg,rgba(232,246,250,0.96),rgba(255,255,255,0.98))] sm:shadow-[0_18px_40px_rgba(72,155,214,0.12)]"
                                        : "text-slate-600 sm:border-[rgba(210,228,238,0.88)] sm:bg-white/86 sm:hover:border-[rgba(88,182,197,0.4)] sm:hover:bg-[rgba(248,252,254,0.98)]"
                                }`}
                            >
                                <p className="label-size uppercase tracking-[0.24em] text-[var(--teal-deep)]">
                                    Legalitas {item.id}
                                </p>
                                <p className="mt-3 text-base font-semibold leading-6 text-[var(--ink-strong)]">
                                    {item.title}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function handleGlowMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    event.currentTarget.style.setProperty("--glow-opacity", "1");
}

function handleGlowLeave(event) {
    event.currentTarget.style.setProperty("--glow-opacity", "0");
}

function GlowCard({ as: Component = "div", tone = "light", className = "", style, children, ...props }) {
    const isDark = tone === "dark";

    return createElement(
        Component,
        {
            onMouseMove: handleGlowMove,
            onMouseLeave: handleGlowLeave,
            style: {
                "--glow-x": "50%",
                "--glow-y": "50%",
                "--glow-opacity": "0",
                ...style,
            },
            className: `group relative isolate overflow-hidden transition duration-300 ${className}`,
            ...props,
        },
        <>
            <div
                className="pointer-events-none absolute inset-0 opacity-[var(--glow-opacity)] transition-opacity duration-300"
                style={{
                    background: isDark
                        ? "radial-gradient(240px circle at var(--glow-x) var(--glow-y), rgba(255,255,255,0.16), rgba(255,255,255,0.08) 24%, rgba(255,255,255,0.03) 46%, rgba(255,255,255,0) 72%)"
                        : "radial-gradient(240px circle at var(--glow-x) var(--glow-y), rgba(88,182,197,0.22), rgba(88,182,197,0.11) 24%, rgba(88,182,197,0.035) 46%, rgba(88,182,197,0) 72%)",
                }}
            />
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                    background: isDark
                        ? "linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.52),rgba(255,255,255,0))"
                        : "linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.92),rgba(255,255,255,0))",
                }}
            />
            <div className="relative z-10">{children}</div>
        </>,
    );
}

function MetricCard({ label, value, detail }) {
    return (
        <GlowCard className="border-b border-[rgba(15,23,42,0.1)] py-5 last:border-b-0 sm:rounded-[1.8rem] sm:border sm:border-white/80 sm:bg-white/88 sm:p-5 sm:shadow-[0_20px_52px_rgba(72,155,214,0.1)] sm:backdrop-blur-sm sm:hover:-translate-y-1 sm:hover:shadow-[0_26px_58px_rgba(72,155,214,0.15)]">
            <p className="label-size uppercase tracking-[0.3em] text-[var(--teal-deep)]">{label}</p>
            <p className="mt-3 text-[1.25rem] font-semibold leading-tight text-[var(--ink-strong)] sm:text-[1.45rem]">
                {value}
            </p>
            <p className="descriptive-copy mt-3 text-[0.98rem] leading-7 text-slate-600">{detail}</p>
        </GlowCard>
    );
}

function NarrativeCard({
    title,
    children,
    accent = "border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,250,253,0.92))] text-[var(--ink-strong)]",
    textClassName = "text-slate-700",
    titleClassName = "text-[var(--teal-deep)]",
    glowTone = "light",
}) {
    return (
        <GlowCard
            tone={glowTone}
            className={`h-full rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[2.1rem] sm:border sm:p-8 sm:shadow-[0_24px_56px_rgba(72,155,214,0.1)] sm:hover:-translate-y-1 sm:hover:shadow-[0_28px_60px_rgba(72,155,214,0.15)] ${accent}`}
        >
            <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="h-[4px] w-14 rounded-full bg-[var(--teal)]" />
                <p className={`label-size uppercase tracking-[0.28em] ${titleClassName}`}>{title}</p>
            </div>
            <p className={`descriptive-copy text-[0.95rem] leading-7 sm:text-lg sm:leading-9 ${textClassName}`}>
                {children}
            </p>
        </GlowCard>
    );
}

function CompanySheet({ title, rows }) {
    return (
        <GlowCard className="h-full rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[2.3rem] sm:border sm:border-white/80 sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(244,250,253,0.95))] sm:p-8 sm:shadow-[0_28px_68px_rgba(72,155,214,0.12)] sm:hover:-translate-y-1 sm:hover:shadow-[0_30px_72px_rgba(72,155,214,0.16)]">
            <div className="mb-5 flex items-center gap-4 sm:mb-8">
                <span className="h-[5px] w-16 rounded-full bg-[var(--teal)]" />
                <p className="label-size uppercase tracking-[0.3em] text-[var(--teal-deep)]">{title}</p>
            </div>

            <div className="space-y-4">
                {rows.map((item, index) => (
                    <GlowCard
                        key={index}
                        className="border-b border-[rgba(15,23,42,0.1)] py-4 last:border-b-0 sm:rounded-[1.55rem] sm:border sm:border-[rgba(205,225,236,0.96)] sm:bg-[linear-gradient(180deg,rgba(252,254,255,0.98),rgba(242,248,252,0.98))] sm:px-5 sm:py-5 sm:shadow-[0_14px_32px_rgba(72,155,214,0.08),inset_0_1px_0_rgba(255,255,255,0.88)] sm:hover:-translate-y-1 sm:hover:border-[rgba(88,182,197,0.42)] sm:hover:shadow-[0_20px_38px_rgba(72,155,214,0.16),inset_0_1px_0_rgba(255,255,255,0.92)]"
                    >
                        <div className="grid gap-3 md:grid-cols-[150px_minmax(0,1fr)] md:items-start">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--teal-deep)] sm:inline-flex sm:w-fit sm:rounded-full sm:bg-[rgba(72,155,214,0.1)] sm:px-3 sm:py-1.5">
                                {item.label}
                            </span>
                            <p className="text-[1rem] leading-7 text-slate-700 sm:text-[1.08rem]">{item.value}</p>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </GlowCard>
    );
}

function DetailListCard({ title, rows }) {
    return (
        <div className="h-full rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[2.2rem] sm:border sm:border-white/80 sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(244,250,253,0.95))] sm:p-8 sm:shadow-[0_26px_64px_rgba(72,155,214,0.11)]">
            <div className="mb-5 flex items-center gap-4 sm:mb-7">
                <span className="h-[5px] w-16 rounded-full bg-[var(--teal)]" />
                <p className="label-size uppercase tracking-[0.3em] text-[var(--teal-deep)]">{title}</p>
            </div>

            <div className="space-y-4">
                {rows.map((item, index) => (
                    <GlowCard
                        key={item.label}
                        className="border-b border-[rgba(15,23,42,0.1)] py-4 last:border-b-0 sm:rounded-[1.55rem] sm:border sm:border-[rgba(205,225,236,0.96)] sm:bg-[linear-gradient(180deg,rgba(252,254,255,0.98),rgba(242,248,252,0.98))] sm:px-5 sm:py-5 sm:shadow-[0_14px_32px_rgba(72,155,214,0.08),inset_0_1px_0_rgba(255,255,255,0.88)] sm:hover:-translate-y-1 sm:hover:border-[rgba(88,182,197,0.42)] sm:hover:shadow-[0_20px_38px_rgba(72,155,214,0.16),inset_0_1px_0_rgba(255,255,255,0.92)]"
                    >
                        <div className="flex items-start gap-3 sm:gap-4">
                            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(72,155,214,0.12)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--teal-deep)]">
                                0{index + 1}
                            </span>
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--teal-deep)]">
                                    {item.label}
                                </p>
                                <p className="mt-2 break-words text-[0.98rem] leading-7 text-slate-800 sm:text-[1.04rem]">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </div>
    );
}
