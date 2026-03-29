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

    const bankRows = [
        { label: "Bank", value: companyData.bank.name },
        { label: "No. rekening", value: companyData.bank.account },
        { label: "Atas nama", value: companyData.bank.holder },
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

    const profileStrengths = [
        "Berawal dari screen printing dan berkembang menjadi mitra produksi visual branding yang lebih lengkap.",
        "Melayani kebutuhan exterior goods, interior goods, hingga konstruksi pendukung branding.",
        "Menjaga kualitas material dan eksekusi agar hasil kerja tetap rapi, kuat, dan tepat waktu.",
    ];

    const servicePillars = ["Advertising", "Signage", "Interior", "Konstruksi"];

    return (
        <section
            id="profil"
            className="relative overflow-hidden border-y border-black/5 bg-[linear-gradient(180deg,#f1f6fa_0%,#f9f6f1_48%,#f3eee7_100%)] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-8%] top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(90,176,185,0.18)_0%,rgba(90,176,185,0)_72%)] blur-2xl" />
                <div className="absolute right-[-6%] top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(26,45,59,0.16)_0%,rgba(26,45,59,0)_72%)] blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-80 w-[34rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0)_74%)]" />
            </div>

            <div className="relative mx-auto max-w-7xl space-y-12 sm:space-y-14">
                <Reveal as="div" className="mb-10 max-w-3xl sm:mb-12">
                    <p className="text-xs uppercase tracking-[0.34em] text-[var(--teal-deep)]">Company Profile</p>
                    <h2 className="mt-4 font-display text-[2.55rem] uppercase leading-[0.92] text-[var(--ink-strong)] sm:text-[4.4rem]">
                        Profil yang lebih
                        <br />
                        tegas dan meyakinkan
                    </h2>
                    <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-slate-600 sm:text-[1.05rem] sm:leading-8">
                        Halaman profil dirancang ulang agar terasa lebih premium, mudah dipindai, dan cukup kuat untuk
                        mewakili rekam jejak CV Karya Indah sebagai partner produksi visual branding dan konstruksi.
                    </p>
                </Reveal>

                <Reveal as="div" className="grid gap-6 sm:gap-8 xl:grid-cols-[0.88fr_1.12fr] xl:items-start" delay={60}>
                    <div className="space-y-6 xl:sticky xl:top-28">
                        <GlowCard
                            tone="dark"
                            className="rounded-[2.3rem] border border-white/15 bg-gradient-to-br from-[#0b1821] via-[#163847] to-[#25586c] p-6 text-white shadow-[0_36px_80px_rgba(17,43,57,0.3)] sm:rounded-[2.5rem] sm:p-10"
                        >
                            <div className="absolute right-0 top-0 h-44 w-44 translate-x-10 -translate-y-10 rounded-full bg-[radial-gradient(circle,rgba(90,176,185,0.38)_0%,rgba(90,176,185,0)_72%)]" />
                            <div className="absolute bottom-0 right-6 text-[5.2rem] font-semibold leading-none text-white/[0.07] sm:text-[7rem]">
                                1992
                            </div>

                            <div className="relative">
                                <p className="text-xs uppercase tracking-[0.34em] text-cyan-100/90">General Profile</p>
                                <h3 className="mt-5 max-w-md font-display text-[2.15rem] uppercase leading-[0.92] text-white sm:text-[4.4rem]">
                                    CV. Karya
                                    <br />
                                    Indah
                                </h3>
                                <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                                    {companyData.tagline}
                                </p>

                                <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                                    {servicePillars.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/95 backdrop-blur-sm"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm sm:mt-10 sm:rounded-[1.8rem] sm:p-5">
                                    <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100/85">
                                        Positioning
                                    </p>
                                    <p className="mt-3 text-[1.35rem] font-semibold leading-tight text-white sm:text-2xl">
                                        {companyData.slogan}
                                    </p>
                                    <p className="mt-3 max-w-lg text-[0.98rem] leading-7 text-slate-300">
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
                        className="rounded-[2.3rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,251,253,0.94))] p-6 shadow-[0_30px_70px_rgba(72,155,214,0.12)] sm:rounded-[2.55rem] sm:p-10"
                    >
                        <div className="mb-7 flex items-center gap-4">
                            <span className="h-[4px] w-16 rounded-full bg-[var(--teal)]" />
                            <p className="text-xs uppercase tracking-[0.3em] text-[var(--teal-deep)]">
                                Tentang Perusahaan
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-5 text-[0.98rem] leading-7 text-slate-700 sm:space-y-6 sm:text-[1.08rem] sm:leading-9">
                                <p>{companyData.description}</p>
                                <p>{companyData.descriptionLong}</p>
                            </div>

                            <div className="grid gap-4 md:grid-cols-3">
                                {snapshotRows.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-[1.6rem] border border-[rgba(212,230,239,0.92)] bg-[linear-gradient(180deg,rgba(251,254,255,0.98),rgba(241,248,251,0.95))] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
                                    >
                                        <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--teal-deep)]">
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

            <Reveal as="section" className="rounded-[2.35rem] border border-white/70 bg-[linear-gradient(180deg,rgba(249,252,254,0.96),rgba(242,247,250,0.94))] p-5 shadow-[0_28px_68px_rgba(72,155,214,0.1)] sm:rounded-[2.6rem] sm:p-8">
                <div className="mb-8 max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.34em] text-[var(--teal-deep)]">Company Snapshot</p>
                    <h3 className="mt-4 font-display text-[2.1rem] uppercase leading-[0.96] text-[var(--ink-strong)] sm:text-[3.2rem]">
                        Sorotan utama
                        <br />
                        perusahaan
                    </h3>
                </div>

                <RevealStagger as="div" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" stagger={70}>
                    {profileHighlights.map((item) => (
                        <MetricCard key={item.label} {...item} />
                    ))}
                </RevealStagger>
            </Reveal>

            <Reveal as="section" className="rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(248,252,254,0.96),rgba(241,247,250,0.95))] p-5 shadow-[0_32px_78px_rgba(72,155,214,0.12)] sm:rounded-[2.8rem] sm:p-8 lg:p-10">
                <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.34em] text-[var(--teal-deep)]">Detail Perusahaan</p>
                    <h3 className="mt-4 font-display text-[2.15rem] uppercase leading-[0.94] text-[var(--ink-strong)] sm:text-[3.8rem]">
                        Informasi pendukung
                        <br />
                        dalam section baru
                    </h3>
                    <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-600 sm:text-base sm:leading-8">
                        Bagian ini dipisahkan dari cerita utama supaya informasi pendukung terasa lebih terstruktur,
                        lebih lega, dan tidak menempel dengan blok tentang perusahaan.
                    </p>
                </div>

                <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 xl:grid-cols-[0.86fr_1.14fr]">
                    <div className="space-y-6">
                        <div className="rounded-[1.8rem] border border-[rgba(145,187,208,0.32)] bg-[linear-gradient(180deg,rgba(232,246,250,0.95),rgba(255,255,255,0.95))] p-5 shadow-[0_18px_46px_rgba(72,155,214,0.1)] sm:rounded-[2rem] sm:p-6">
                            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--teal-deep)]">
                                Mengapa Dipilih
                            </p>
                            <div className="mt-5 space-y-4">
                                {profileStrengths.map((item, index) => (
                                    <div
                                        key={item}
                                        className="rounded-[1.4rem] border border-white/80 bg-white/90 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)]"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--hero)] text-xs font-semibold text-white">
                                                0{index + 1}
                                            </span>
                                            <p className="text-sm leading-7 text-slate-700">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 rounded-[1.4rem] bg-[var(--hero)] px-4 py-4 text-white shadow-[0_18px_42px_rgba(17,43,57,0.18)] sm:rounded-[1.6rem] sm:px-5 sm:py-5">
                                <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100/85">Nilai Utama</p>
                                <p className="mt-3 text-base leading-8 text-slate-200">
                                    Kualitas material, ketepatan pengerjaan, dan perhatian pada kebutuhan klien menjadi
                                    dasar setiap proyek yang kami kerjakan.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-1">
                            <NarrativeCard
                                title="Visi Perusahaan"
                                accent="border-white/10 bg-gradient-to-br from-[#112b39] via-[#1a4c5e] to-[#2b6b7b] text-white"
                                textClassName="text-slate-200"
                                titleClassName="text-cyan-100/90"
                                glowTone="dark"
                            >
                                {companyData.vision}
                            </NarrativeCard>

                            <NarrativeCard title="Misi Perusahaan">{companyData.mission}</NarrativeCard>

                            <NarrativeCard title="Kebijakan K3">
                                Keselamatan dan kesehatan kerja menjadi prioritas utama dalam proses produksi maupun
                                instalasi. Kami menjaga prosedur kerja yang tertib, aman, dan bertanggung jawab untuk
                                tim internal, mitra, maupun pelanggan.
                            </NarrativeCard>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <CompanySheet title="Data Perusahaan" rows={companyRows} />
                        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                            <DetailListCard title="Legalitas Perusahaan" rows={companyData.legalities} />
                            <BankCard title="Informasi Bank" rows={bankRows} />
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal as="section" className="rounded-[2.4rem] border border-white/70 bg-[linear-gradient(135deg,rgba(10,30,41,0.98),rgba(21,63,79,0.96)_58%,rgba(36,92,108,0.94))] p-5 text-white shadow-[0_36px_90px_rgba(17,43,57,0.24)] sm:rounded-[2.8rem] sm:p-8 lg:p-10">
                <div className="grid gap-6 sm:gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
                    <div className="max-w-3xl">
                        <p className="text-xs uppercase tracking-[0.34em] text-cyan-100/82">Struktur Organisasi</p>
                        <h3 className="mt-4 font-display text-[2.15rem] uppercase leading-[0.92] text-white sm:text-[3rem] lg:text-[3.4rem]">
                            Alur kerja yang
                            <br />
                            tertata jelas
                        </h3>
                        <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-slate-200 sm:text-[1.05rem] sm:leading-8">
                            Struktur organisasi ini menampilkan pembagian peran dari level pimpinan sampai divisi
                            operasional agar alur koordinasi, produksi, dan administrasi terasa lebih mudah dipindai
                            saat dilihat di web.
                        </p>

                        <div className="mt-7 grid gap-4 sm:mt-8">
                            <GlowCard
                                tone="dark"
                                className="rounded-[1.45rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm hover:border-white/16 hover:bg-white/[0.1] sm:rounded-[1.6rem] sm:p-5"
                            >
                                <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100/78">Highlights</p>
                                <p className="mt-3 text-[1.05rem] font-semibold leading-7 text-white">
                                    Hierarki operasional, administrasi, dan lapangan tersusun lebih tegas.
                                </p>
                            </GlowCard>

                            <GlowCard
                                tone="dark"
                                className="rounded-[1.45rem] border border-white/10 bg-white/8 p-4 backdrop-blur-sm hover:border-white/16 hover:bg-white/[0.1] sm:rounded-[1.6rem] sm:p-5"
                            >
                                <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100/78">Layout</p>
                                <p className="mt-3 text-[1.05rem] font-semibold leading-7 text-white">
                                    Gambar struktur ditaruh di samping kanan supaya section terasa lebih seimbang.
                                </p>
                            </GlowCard>
                        </div>
                    </div>

                    <GlowCard className="w-full rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] p-3 shadow-[0_24px_70px_rgba(6,18,25,0.2)] backdrop-blur-sm sm:rounded-[2.25rem] sm:p-5">
                        <div className="mb-4 sm:mb-5">
                            <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-100/78">
                                Organization Tree
                            </p>
                            <p className="mt-2 text-base font-semibold text-white sm:text-lg">
                                Bagan organisasi ditampilkan di sisi kanan sebagai fokus visual utama.
                            </p>
                        </div>

                        <div className="rounded-[1.55rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(88,182,197,0.12),rgba(246,251,253,0.96)_34%,rgba(232,242,247,0.92)_100%)] p-3 sm:rounded-[1.9rem] sm:p-6">
                            <div className="flex h-[250px] items-center justify-center overflow-hidden rounded-[1.2rem] bg-white/72 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] sm:h-[460px] sm:rounded-[1.45rem] sm:px-5 sm:py-6 lg:h-[520px]">
                                <img
                                    src="/struktur.jpeg"
                                    alt="Struktur organisasi CV Karya Indah"
                                    onClick={() =>
                                        setLightboxImage({
                                            src: "/struktur.jpeg",
                                            alt: "Struktur organisasi CV Karya Indah",
                                        })
                                    }
                                    className="block h-auto max-h-[360px] w-auto max-w-none cursor-zoom-in object-contain shadow-[0_18px_46px_rgba(72,155,214,0.12)] transition hover:shadow-[0_22px_54px_rgba(72,155,214,0.18)] sm:max-h-[560px]"
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
        <section className="rounded-[2.45rem] border border-white/80 bg-[linear-gradient(180deg,rgba(252,254,255,0.98),rgba(242,248,251,0.95))] p-5 shadow-[0_34px_84px_rgba(72,155,214,0.14)] sm:rounded-[2.85rem] sm:p-8 lg:p-10">
            <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.34em] text-[var(--teal-deep)]">Dokumen Legalitas</p>
                <h3 className="mt-4 font-display text-[2.2rem] uppercase leading-[0.94] text-[var(--ink-strong)] sm:text-[3.7rem]">
                    Empat dokumen
                    <br />
                    legal utama
                </h3>
                <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-slate-600 sm:text-[1.05rem] sm:leading-8">
                    Bagian ini menampilkan legalitas utama perusahaan dalam format slider supaya setiap dokumen tetap
                    mudah dipreview, tetapi tetap rapi dan selaras dengan visual profil.
                </p>
            </div>

            <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
                <GlowCard className="rounded-[1.95rem] border border-[rgba(210,228,238,0.96)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,249,252,0.95))] p-3 shadow-[0_22px_56px_rgba(72,155,214,0.11)] sm:rounded-[2.2rem] sm:p-5">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--teal-deep)]">
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
                    <GlowCard className="rounded-[1.95rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,249,252,0.94))] p-5 shadow-[0_24px_60px_rgba(72,155,214,0.1)] sm:rounded-[2.15rem] sm:p-7">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                                    {activeItem.eyebrow}
                                </p>
                                <h4 className="mt-3 font-display text-[1.65rem] uppercase leading-[0.94] text-[var(--ink-strong)] sm:text-[2.6rem]">
                                    {activeItem.title}
                                </h4>
                                <p className="mt-3 text-base font-medium text-slate-700 sm:text-lg">
                                    {activeItem.subtitle}
                                </p>
                            </div>
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--hero)] text-sm font-semibold text-white sm:h-12 sm:w-12">
                                {activeItem.id}
                            </span>
                        </div>

                        <p className="mt-5 text-[0.98rem] leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
                            {activeItem.summary}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {activeItem.meta.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-[rgba(190,219,231,0.95)] bg-[rgba(88,182,197,0.08)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--teal-deep)]"
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
                                className={`rounded-[1.35rem] border px-4 py-3.5 text-left transition sm:rounded-[1.5rem] sm:py-4 ${
                                    index === activeIndex
                                        ? "border-[var(--teal)] bg-[linear-gradient(180deg,rgba(232,246,250,0.96),rgba(255,255,255,0.98))] shadow-[0_18px_40px_rgba(72,155,214,0.12)]"
                                        : "border-[rgba(210,228,238,0.88)] bg-white/86 hover:border-[rgba(88,182,197,0.4)] hover:bg-[rgba(248,252,254,0.98)]"
                                }`}
                            >
                                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--teal-deep)]">
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
        <GlowCard className="rounded-[1.55rem] border border-white/80 bg-white/88 p-4 shadow-[0_20px_52px_rgba(72,155,214,0.1)] backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(72,155,214,0.15)] sm:rounded-[1.8rem] sm:p-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--teal-deep)]">{label}</p>
            <p className="mt-3 text-[1.25rem] font-semibold leading-tight text-[var(--ink-strong)] sm:text-[1.45rem]">
                {value}
            </p>
            <p className="mt-3 text-[0.98rem] leading-7 text-slate-600">{detail}</p>
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
            className={`rounded-[1.8rem] border p-5 shadow-[0_24px_56px_rgba(72,155,214,0.1)] hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(72,155,214,0.15)] sm:rounded-[2.1rem] sm:p-8 ${accent}`}
        >
            <div className="mb-5 flex items-center gap-3">
                <span className="h-[4px] w-14 rounded-full bg-[var(--teal)]" />
                <p className={`text-xs uppercase tracking-[0.28em] ${titleClassName}`}>{title}</p>
            </div>
            <p className={`text-[0.98rem] leading-7 sm:text-lg sm:leading-9 ${textClassName}`}>{children}</p>
        </GlowCard>
    );
}

function CompanySheet({ title, rows }) {
    return (
        <GlowCard className="rounded-[1.95rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(244,250,253,0.95))] p-5 shadow-[0_28px_68px_rgba(72,155,214,0.12)] hover:-translate-y-1 hover:shadow-[0_30px_72px_rgba(72,155,214,0.16)] sm:rounded-[2.3rem] sm:p-8">
            <div className="mb-6 flex items-center gap-4 sm:mb-8">
                <span className="h-[5px] w-16 rounded-full bg-[var(--teal)]" />
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--teal-deep)]">{title}</p>
            </div>

            <div className="overflow-hidden rounded-[1.8rem] border border-[rgba(210,228,238,0.88)] bg-white/90">
                {rows.map((item, index) => (
                    <div
                        key={item.label}
                        className={`grid gap-3 px-4 py-4 md:grid-cols-[150px_minmax(0,1fr)] md:items-start md:px-5 md:py-5 ${
                            index !== rows.length - 1 ? "border-b border-[rgba(210,228,238,0.78)]" : ""
                        }`}
                    >
                        <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.1)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--teal-deep)]">
                            {item.label}
                        </span>
                        <p className="text-[1rem] leading-7 text-slate-700 sm:text-[1.08rem]">{item.value}</p>
                    </div>
                ))}
            </div>
        </GlowCard>
    );
}

function DetailListCard({ title, rows }) {
    return (
        <div className="rounded-[1.95rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(244,250,253,0.95))] p-5 shadow-[0_26px_64px_rgba(72,155,214,0.11)] sm:rounded-[2.2rem] sm:p-8">
            <div className="mb-6 flex items-center gap-4 sm:mb-7">
                <span className="h-[5px] w-16 rounded-full bg-[var(--teal)]" />
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--teal-deep)]">{title}</p>
            </div>

            <div className="space-y-4">
                {rows.map((item, index) => (
                    <GlowCard
                        key={item.label}
                        className="rounded-[1.35rem] border border-[rgba(205,225,236,0.96)] bg-[linear-gradient(180deg,rgba(252,254,255,0.98),rgba(242,248,252,0.98))] px-4 py-4 shadow-[0_14px_32px_rgba(72,155,214,0.08),inset_0_1px_0_rgba(255,255,255,0.88)] hover:-translate-y-1 hover:border-[rgba(88,182,197,0.42)] hover:shadow-[0_20px_38px_rgba(72,155,214,0.16),inset_0_1px_0_rgba(255,255,255,0.92)] sm:rounded-[1.55rem] sm:px-5 sm:py-5"
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

function BankCard({ title, rows }) {
    return (
        <GlowCard
            tone="dark"
            className="rounded-[1.95rem] border border-white/10 bg-gradient-to-br from-[#0e2330] via-[#153949] to-[#23586b] p-5 text-white shadow-[0_26px_70px_rgba(17,43,57,0.26)] hover:-translate-y-1 hover:shadow-[0_30px_76px_rgba(17,43,57,0.34)] sm:rounded-[2.2rem] sm:p-8"
        >
            <div className="mb-6 flex items-center gap-4 sm:mb-7">
                <span className="h-[5px] w-16 rounded-full bg-[var(--teal)]" />
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-100/90">{title}</p>
            </div>

            <div className="space-y-4">
                {rows.map((item) => (
                    <GlowCard
                        key={item.label}
                        tone="dark"
                        className="rounded-[1.3rem] border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.13] sm:rounded-[1.5rem] sm:px-5 sm:py-5"
                    >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-100/85">
                            {item.label}
                        </p>
                        <p className="mt-2 text-[1rem] leading-7 text-slate-100 sm:text-[1.08rem]">{item.value}</p>
                    </GlowCard>
                ))}
            </div>
        </GlowCard>
    );
}
