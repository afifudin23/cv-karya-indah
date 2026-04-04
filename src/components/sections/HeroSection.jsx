import { FiAward, FiLayers, FiTool } from "react-icons/fi";
import { Reveal, RevealStagger } from "../ui/Reveal";

function handleGlowMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    event.currentTarget.style.setProperty("--glow-opacity", "1");
}

function handleGlowLeave(event) {
    event.currentTarget.style.setProperty("--glow-opacity", "0");
}

export default function HeroSection({ companyData, heroImage }) {
    const profileNarrative = [
        "CV Karya Indah merupakan perusahaan yang bergerak di bidang jasa periklanan dan konstruksi. Berawal dari usaha percetakan sablon pada akhir dekade 1980-an, perusahaan ini terus berkembang hingga resmi berdiri secara legal pada 11 Desember 1992. Seiring dengan perkembangan usaha, CV Karya Indah melayani kebutuhan eksterior seperti reklame, shop sign, fasad toko, neon box, huruf timbul, billboard, booth, dan berbagai media promosi lainnya.",
        "Untuk kebutuhan interior, kami juga menangani backwall, display, produk berbahan akrilik, meja, kursi, serta elemen pendukung lain yang dirancang sesuai konsep ruang dan kebutuhan bisnis klien. Dengan fokus pada kualitas material dan hasil produksi, CV Karya Indah terus berkembang menjadi perusahaan yang profesional, terpercaya, dan kompetitif di bidangnya.",
    ];

    const profileMeta = ["Berdiri resmi 11 Des 1992", "Jasa Periklanan & Konstruksi", "Berbasis di Kota Tegal"];

    const profileAdvantages = [
        {
            title: "Pengalaman teruji",
            description:
                "Lebih dari tiga dekade pengalaman membuat setiap proyek dikerjakan dengan alur kerja yang matang, rapi, dan lebih siap menghadapi kebutuhan lapangan.",
            icon: FiAward,
            toneClass:
                "sm:border-[rgba(0,194,255,0.14)] sm:bg-[linear-gradient(180deg,rgba(244,250,255,0.98),rgba(229,238,245,0.96))] sm:shadow-[0_24px_56px_rgba(15,23,42,0.12),0_0_24px_rgba(0,194,255,0.06)]",
        },
        {
            title: "Layanan menyeluruh",
            description:
                "Mulai dari kebutuhan exterior goods, interior goods, hingga dukungan konstruksi, semua ditangani dalam satu ekosistem kerja yang saling terhubung.",
            icon: FiLayers,
            toneClass:
                "sm:border-[rgba(14,165,233,0.16)] sm:bg-[linear-gradient(180deg,rgba(240,249,255,0.98),rgba(224,236,246,0.96))] sm:shadow-[0_24px_56px_rgba(15,23,42,0.13),0_0_28px_rgba(14,165,233,0.08)]",
        },
        {
            title: "Eksekusi presisi",
            description:
                "Kami mengutamakan material yang tepat, detail produksi yang terjaga, dan hasil visual yang kuat agar fungsi serta citra brand berjalan seimbang.",
            icon: FiTool,
            toneClass:
                "sm:border-[rgba(0,194,255,0.14)] sm:bg-[linear-gradient(180deg,rgba(238,247,253,0.98),rgba(223,235,244,0.96))] sm:shadow-[0_24px_56px_rgba(15,23,42,0.12),0_0_24px_rgba(0,194,255,0.06)]",
        },
    ];

    return (
        <section id="beranda" className="relative overflow-hidden pt-[var(--header-height)]">
            {/* < 1024px (tablet & mobile): hero mengikuti viewport seperti versi sebelumnya */}
            <div className="relative h-[calc(100svh-var(--header-height))] overflow-hidden lg:hidden">
                <img
                    src={heroImage}
                    alt="Gedung modern untuk cover company profile"
                    width="1536"
                    height="1024"
                    loading="eager"
                    fetchPriority="high"
                    className="hero-image-intro absolute inset-0 block h-full w-full object-cover object-[center_28%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,30,45,0.3),rgba(15,23,42,0.46))]" />

                <div className="pointer-events-none absolute inset-0 z-10 mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6">
                    <div className="flex flex-col items-center text-center">
                        <Reveal as="div" className="flex w-full justify-center" duration={820}>
                            <img
                                src="/logoku1.png"
                                alt="Logo CV Karya Indah"
                                className="mx-auto w-full max-w-[100px] drop-shadow-[0_18px_40px_rgba(0,0,0,0.32)]"
                            />
                        </Reveal>
                        <Reveal
                            as="div"
                            delay={120}
                            duration={880}
                            className="mt-3 rounded-[1.35rem] bg-white/92 px-3.5 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:mt-4 sm:px-5 sm:py-4"
                        >
                            <h1 className="font-hero-brand text-[1.55rem] uppercase leading-[1.04] text-white sm:text-[2.1rem]">
                                {companyData.name}
                            </h1>
                            <div className="mx-auto my-2.5 h-[3px] w-full max-w-[360px] bg-[var(--teal)]" />
                            <p className="text-[0.82rem] font-medium tracking-[0.01em] text-white sm:text-[1.02rem]">
                                {companyData.tagline}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>

            {/* >= 1024px: gambar full (tidak kepotong), overlay tetap center via sticky */}
            <div className="relative hidden overflow-hidden lg:block">
                <img
                    src={heroImage}
                    alt="Gedung modern untuk cover company profile"
                    width="1536"
                    height="1024"
                    loading="eager"
                    fetchPriority="high"
                    className="hero-image-intro block h-auto w-full"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,30,45,0.3),rgba(15,23,42,0.46))]" />

                <div className="pointer-events-none absolute inset-0 z-10">
                    <div className="sticky top-[var(--header-height)] mx-auto flex h-[calc(100svh-var(--header-height))] max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
                        <div className="flex -translate-y-24 flex-col items-center text-center">
                            <Reveal as="div" className="flex w-full justify-center" duration={820}>
                                <img
                                    src="/logoku1.png"
                                    alt="Logo CV Karya Indah"
                                    className="mx-auto w-full max-w-[160px] drop-shadow-[0_18px_40px_rgba(0,0,0,0.32)]"
                                />
                            </Reveal>

                            <Reveal
                                as="div"
                                delay={120}
                                duration={880}
                                className="mt-4 rounded-[1.35rem] bg-white/92 px-7 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                            >
                                <h1 className="font-hero-brand text-[2.9rem] uppercase leading-[1.04] text-white">
                                    {companyData.name}
                                </h1>
                                <div className="mx-auto my-3 h-[3px] w-full max-w-[420px] bg-[var(--teal)]" />
                                <p className="text-[1.35rem] font-medium tracking-[0.01em] text-white">
                                    {companyData.tagline}
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 overflow-hidden border-y border-[rgba(191,221,232,0.45)] bg-[linear-gradient(180deg,#f7fbfe_0%,#edf6fb_48%,#e7f1f7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-6%] top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(88,182,197,0.12)_0%,rgba(88,182,197,0)_72%)] blur-3xl" />
                    <div className="absolute right-[-8%] top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(88,182,197,0.09)_0%,rgba(88,182,197,0)_74%)] blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(231,241,247,0.9)_0%,rgba(255,255,255,0)_76%)]" />
                </div>
                <div className="mx-auto max-w-7xl">
                    <Reveal
                        as="div"
                        onMouseMove={handleGlowMove}
                        onMouseLeave={handleGlowLeave}
                        style={{
                            "--glow-x": "50%",
                            "--glow-y": "50%",
                            "--glow-opacity": "0",
                        }}
                        className="relative overflow-visible rounded-none border-0 bg-transparent p-0 shadow-none sm:overflow-hidden sm:rounded-[2.8rem] sm:border sm:border-[rgba(186,214,228,0.85)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,248,253,0.96))] sm:p-8 sm:shadow-[0_34px_86px_rgba(72,155,214,0.12)] lg:p-10 xl:p-12"
                    >
                        <div
                            className="pointer-events-none absolute inset-0 hidden opacity-[var(--glow-opacity)] transition-opacity duration-300 sm:block"
                            style={{
                                background:
                                    "radial-gradient(240px circle at var(--glow-x) var(--glow-y), rgba(0,194,255,0.16), rgba(0,194,255,0.08) 24%, rgba(0,194,255,0.03) 46%, rgba(0,194,255,0) 72%)",
                            }}
                        />
                        <div
                            className="pointer-events-none absolute inset-x-0 top-0 hidden h-px sm:block"
                            style={{
                                background:
                                    "linear-gradient(90deg,rgba(0,194,255,0),rgba(0,194,255,0.56),rgba(0,194,255,0))",
                            }}
                        />
                        <div className="pointer-events-none absolute left-[-6%] top-8 hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.14)_0%,rgba(0,194,255,0)_72%)] blur-3xl sm:block" />
                        <div className="pointer-events-none absolute bottom-0 right-[-6%] hidden h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12)_0%,rgba(14,165,233,0)_74%)] blur-3xl sm:block" />
                        <div className="pointer-events-none absolute inset-x-20 top-0 hidden h-14 bg-[radial-gradient(circle,rgba(0,194,255,0.12)_0%,rgba(0,194,255,0)_72%)] blur-2xl sm:block" />

                        <div className="relative">
                                <div className="flex flex-col gap-4 pb-5 sm:gap-7 sm:border-b sm:border-[rgba(177,218,232,0.18)] sm:pb-8 lg:flex-row lg:items-end lg:justify-between">
                                    <div className="max-w-3xl">
                                        <p className="label-size uppercase tracking-[0.24em] text-[var(--color-primary-900)] sm:tracking-[0.34em]">
                                            Profil Perusahaan
                                        </p>
                                        <h2 className="mt-3 font-display text-[2rem] uppercase leading-[0.94] text-[var(--color-text-strong)] sm:mt-4 sm:text-[3.6rem] sm:leading-[0.92] lg:text-[4.2rem]">
                                            CV Karya Indah
                                        </h2>
                                        <p className="mt-4 max-w-2xl text-justify text-[0.92rem] leading-7 text-[var(--color-text-secondary)] sm:mt-5 sm:text-[1.05rem] sm:leading-8">
                                            Perusahaan periklanan dan konstruksi yang tumbuh dari pengalaman panjang,
                                            kualitas pengerjaan, dan komitmen untuk memberi hasil visual yang kuat bagi
                                            setiap klien.
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2.5 lg:max-w-xl lg:justify-end">
                                        {profileMeta.map((item) => (
                                            <span
                                                key={item}
                                                className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-secondary)] sm:rounded-full sm:border sm:border-[rgba(15,23,42,0.12)] sm:bg-white sm:px-4 sm:py-2 sm:text-[0.8rem] sm:tracking-[0.14em] sm:text-[var(--color-text-secondary)] sm:shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-5 rounded-none border-0 bg-transparent p-0 shadow-none sm:mt-7 sm:rounded-[2.1rem] sm:border sm:border-[rgba(191,221,232,0.74)] sm:bg-[linear-gradient(180deg,#fbfdff_0%,#f3f9fd_42%,#eaf4fb_100%)] sm:p-7 sm:shadow-[0_18px_42px_rgba(5,18,25,0.12),0_0_26px_rgba(88,182,197,0.08)] lg:mt-8 lg:p-8">
                                    <div className="mb-4 flex items-center gap-4 sm:mb-5">
                                        <span className="h-[3px] w-12 rounded-full bg-[var(--teal)] sm:w-14" />
                                        <p className="label-size uppercase tracking-[0.22em] text-[var(--teal-deep)] sm:tracking-[0.3em]">
                                            Tentang CV Karya Indah
                                        </p>
                                    </div>

                                    <div className="grid gap-5 lg:grid-cols-2 lg:gap-x-8">
                                        {profileNarrative.map((paragraph) => (
                                            <p
                                                key={paragraph}
                                                className="text-[0.95rem] leading-7 text-justify text-slate-700 sm:text-[1.05rem] sm:leading-9"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal
                            as="section"
                            className="relative mt-8 overflow-visible rounded-none border-0 bg-transparent p-0 shadow-none sm:mt-10 sm:overflow-hidden sm:rounded-[2.6rem] sm:border sm:border-[rgba(14,165,233,0.14)] sm:bg-[linear-gradient(180deg,rgba(241,248,253,0.98),rgba(228,238,246,0.96))] sm:p-7 sm:shadow-[0_32px_80px_rgba(15,23,42,0.12),0_0_30px_rgba(14,165,233,0.06)] lg:p-9"
                        >
                            <div className="pointer-events-none absolute left-0 top-0 hidden h-28 w-56 bg-[radial-gradient(circle,rgba(0,194,255,0.14)_0%,rgba(0,194,255,0)_72%)] blur-2xl sm:block" />
                            <div className="pointer-events-none absolute bottom-0 right-0 hidden h-28 w-56 bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,rgba(249,115,22,0)_74%)] blur-2xl sm:block" />

                            <div className="relative rounded-none border-0 bg-transparent p-0 shadow-none backdrop-blur-none sm:rounded-[2.1rem] sm:border sm:border-[rgba(14,165,233,0.12)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(255,255,255,0.24))] sm:p-6 sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_0_24px_rgba(14,165,233,0.03)] sm:backdrop-blur-md lg:p-7">
                                <div className="grid gap-4 pb-5 sm:gap-7 sm:border-b sm:border-[rgba(14,165,233,0.12)] sm:pb-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <span className="h-[3px] w-14 rounded-full bg-[linear-gradient(90deg,var(--color-primary-500),var(--color-primary-700))] shadow-[0_0_14px_rgba(0,194,255,0.34)]" />
                                            <p className="label-size uppercase tracking-[0.18em] text-[var(--color-primary-900)]">
                                                Mengapa Pilih Kami
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <RevealStagger
                                    as="div"
                                    className="mt-2 grid gap-0 sm:mt-7 sm:gap-4 lg:grid-cols-3 lg:gap-5"
                                    stagger={90}
                                >
                                    {profileAdvantages.map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <article
                                                key={item.title}
                                                className={`group relative overflow-visible border-b border-[rgba(15,23,42,0.1)] py-5 last:border-b-0 sm:overflow-hidden sm:rounded-[1.9rem] sm:border-0 sm:p-7 sm:transition sm:duration-300 sm:hover:-translate-y-1 sm:hover:border-[rgba(0,194,255,0.24)] sm:hover:shadow-[0_28px_54px_rgba(15,23,42,0.16),0_0_22px_rgba(0,194,255,0.08)] ${item.toneClass}`}
                                            >
                                                <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-[2px] bg-[linear-gradient(90deg,rgba(0,194,255,0),rgba(0,194,255,0.92),rgba(30,144,255,0))] sm:block" />

                                                <div className="flex items-center justify-between gap-4">
                                                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-[rgba(14,165,233,0.18)] bg-[rgba(14,165,233,0.08)] text-[var(--color-primary-700)] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:h-14 sm:w-14 sm:rounded-[1.2rem] sm:border-[rgba(15,23,42,0.16)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(229,238,245,0.82))] sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] sm:transition sm:group-hover:border-[rgba(0,194,255,0.32)] sm:group-hover:text-[var(--color-primary-600)]">
                                                        <Icon className="text-[1.35rem] sm:text-[1.6rem]" />
                                                    </div>
                                                    <span className="inline-flex min-w-[2.4rem] justify-center rounded-full border border-[rgba(15,23,42,0.12)] bg-white px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-900)] shadow-[0_10px_22px_rgba(15,23,42,0.06)] sm:min-w-[2.6rem] sm:border-[rgba(15,23,42,0.14)] sm:bg-[rgba(255,255,255,0.58)] sm:text-[0.78rem] sm:shadow-none">
                                                        0{index + 1}
                                                    </span>
                                                </div>

                                                <h3 className="mt-4 text-[1.15rem] font-semibold leading-[1.25] text-[var(--color-text-strong)] sm:mt-6 sm:text-[1.5rem]">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-2 text-justify text-[0.92rem] leading-7 text-[var(--color-text-secondary)] sm:mt-3 sm:text-[1.04rem] sm:leading-8">
                                                    {item.description}
                                                </p>
                                            </article>
                                        );
                                    })}
                                </RevealStagger>
                            </div>
	                        </Reveal>
	                    </div>
	                </div>
	        </section>
	    );
}
