import { FiAward, FiLayers, FiTool } from "react-icons/fi";

export default function HeroSection({ companyData, heroImage }) {
    const profileNarrative = [
        "CV Karya Indah merupakan perusahaan yang bergerak di bidang jasa periklanan dan konstruksi. Berawal dari usaha percetakan sablon pada akhir dekade 1980-an, perusahaan ini terus berkembang hingga resmi berdiri secara legal pada 11 Desember 1992.",
        "Seiring dengan perkembangan usaha, CV Karya Indah melayani kebutuhan eksterior seperti reklame, shop sign, fasad toko, neon box, huruf timbul, billboard, booth, dan berbagai media promosi lainnya.",
        "Untuk kebutuhan interior, kami juga menangani backwall, display, produk berbahan akrilik, meja, kursi, serta elemen pendukung lain yang dirancang sesuai konsep ruang dan kebutuhan bisnis klien.",
        "Dengan fokus pada kualitas material dan hasil produksi, CV Karya Indah terus berkembang menjadi perusahaan yang profesional, terpercaya, dan kompetitif di bidangnya.",
    ];

    const profileMeta = ["Berdiri resmi 11 Des 1992", "Jasa Periklanan & Konstruksi", "Berbasis di Kota Tegal"];

    const profileAdvantages = [
        {
            title: "Pengalaman teruji",
            description:
                "Lebih dari tiga dekade pengalaman membuat setiap proyek dikerjakan dengan alur kerja yang matang, rapi, dan lebih siap menghadapi kebutuhan lapangan.",
            icon: FiAward,
            toneClass:
                "border-[rgba(118,212,227,0.24)] bg-[linear-gradient(180deg,rgba(8,23,31,0.96),rgba(14,39,50,0.94))] shadow-[0_22px_54px_rgba(5,18,25,0.28),0_0_30px_rgba(88,182,197,0.12)]",
        },
        {
            title: "Layanan menyeluruh",
            description:
                "Mulai dari kebutuhan exterior goods, interior goods, hingga dukungan konstruksi, semua ditangani dalam satu ekosistem kerja yang saling terhubung.",
            icon: FiLayers,
            toneClass:
                "border-[rgba(118,212,227,0.24)] bg-[linear-gradient(180deg,rgba(10,28,37,0.96),rgba(17,48,61,0.94))] shadow-[0_22px_54px_rgba(5,18,25,0.28),0_0_30px_rgba(88,182,197,0.13)]",
        },
        {
            title: "Eksekusi presisi",
            description:
                "Kami mengutamakan material yang tepat, detail produksi yang terjaga, dan hasil visual yang kuat agar fungsi serta citra brand berjalan seimbang.",
            icon: FiTool,
            toneClass:
                "border-[rgba(118,212,227,0.24)] bg-[linear-gradient(180deg,rgba(12,32,40,0.96),rgba(20,58,70,0.94))] shadow-[0_22px_54px_rgba(5,18,25,0.28),0_0_30px_rgba(88,182,197,0.14)]",
        },
    ];

    return (
        <section id="beranda" className="relative overflow-hidden">
            <div className="relative min-h-screen overflow-hidden">
                <img
                    src={heroImage}
                    alt="Gedung modern untuk cover company profile"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,12,16,0.22),rgba(5,12,16,0.52))]" />

                <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/logo.png"
                            alt="Logo CV Karya Indah"
                            className="w-full max-w-[150px] drop-shadow-[0_18px_40px_rgba(0,0,0,0.32)] sm:max-w-[180px] lg:max-w-[220px]"
                        />
                        <div className="mt-6 rounded-[1.8rem] bg-white/92 px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-8">
                            <h1 className="font-display text-3xl uppercase leading-none text-white sm:text-4xl lg:text-[4rem]">
                                {companyData.name}
                            </h1>
                            <div className="mx-auto my-4 h-[4px] w-full max-w-[520px] bg-[var(--teal)]" />
                            <p className="text-base text-white sm:text-lg lg:text-[2rem]">{companyData.tagline}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 overflow-hidden border-y border-white/8 bg-[linear-gradient(180deg,#edf7f2_0%,#dceee5_42%,#cce2d7_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[-6%] top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(88,182,140,0.16)_0%,rgba(88,182,140,0)_72%)] blur-3xl" />
                    <div className="absolute right-[-8%] top-28 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(44,108,82,0.12)_0%,rgba(44,108,82,0)_74%)] blur-3xl" />
                    <div className="absolute bottom-0 left-1/2 h-64 w-[36rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_76%)]" />
                </div>
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(128,214,229,0.22)] bg-[linear-gradient(180deg,rgba(10,29,38,0.96),rgba(16,46,58,0.94))] p-6 shadow-[0_34px_86px_rgba(5,18,25,0.3),0_0_46px_rgba(88,182,197,0.1)] sm:rounded-[2.8rem] sm:p-8 lg:p-10 xl:p-12">
                        <div className="pointer-events-none absolute left-[-6%] top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(88,182,197,0.18)_0%,rgba(88,182,197,0)_72%)] blur-3xl" />
                        <div className="pointer-events-none absolute bottom-0 right-[-6%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(17,43,57,0.12)_0%,rgba(17,43,57,0)_74%)] blur-3xl" />
                        <div className="pointer-events-none absolute inset-x-20 top-0 h-14 bg-[radial-gradient(circle,rgba(88,182,197,0.14)_0%,rgba(88,182,197,0)_72%)] blur-2xl" />

                        <div className="relative">
                            <div className="flex flex-col gap-6 border-b border-[rgba(177,218,232,0.18)] pb-7 sm:gap-7 lg:flex-row lg:items-end lg:justify-between lg:pb-8">
                                <div className="max-w-3xl">
                                    <p className="text-xs uppercase tracking-[0.34em] text-cyan-100/80">
                                        Profil Perusahaan
                                    </p>
                                    <h2 className="mt-4 font-display text-[2.4rem] uppercase leading-[0.92] text-white sm:text-[3.6rem] lg:text-[4.2rem]">
                                        CV Karya Indah
                                    </h2>
                                    <p className="mt-5 max-w-2xl text-[0.98rem] leading-8 text-slate-200 sm:text-[1.05rem]">
                                        Perusahaan periklanan dan konstruksi yang tumbuh dari pengalaman panjang,
                                        kualitas pengerjaan, dan komitmen untuk memberi hasil visual yang kuat bagi
                                        setiap klien.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2.5 lg:max-w-xl lg:justify-end">
                                    {profileMeta.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-7 rounded-[1.8rem] border border-[rgba(128,214,229,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-5 shadow-[0_22px_52px_rgba(5,18,25,0.2),0_0_34px_rgba(88,182,197,0.08)] backdrop-blur-md sm:rounded-[2.1rem] sm:p-7 lg:mt-8 lg:p-8">
                                <div className="mb-5 flex items-center gap-4">
                                    <span className="h-[3px] w-14 rounded-full bg-[var(--teal)]" />
                                    <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100/80">
                                        Tentang CV Karya Indah
                                    </p>
                                </div>

                                <div className="grid gap-5 lg:grid-cols-2 lg:gap-x-8">
                                    {profileNarrative.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="text-[0.96rem] leading-8 text-justify text-slate-200 sm:text-[1rem] sm:leading-8"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="relative mt-8 overflow-hidden rounded-[2.2rem] border border-[rgba(214,231,240,0.28)] bg-[linear-gradient(180deg,rgba(11,31,40,0.72),rgba(15,39,49,0.6))] p-5 shadow-[0_32px_76px_rgba(5,18,25,0.26),0_0_40px_rgba(88,182,197,0.08)] backdrop-blur-sm sm:mt-10 sm:rounded-[2.6rem] sm:p-7 lg:p-9">
                        <div className="pointer-events-none absolute left-0 top-0 h-28 w-56 bg-[radial-gradient(circle,rgba(88,182,197,0.18)_0%,rgba(88,182,197,0)_72%)] blur-2xl" />
                        <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-56 bg-[radial-gradient(circle,rgba(17,43,57,0.12)_0%,rgba(17,43,57,0)_74%)] blur-2xl" />

                        <div className="relative rounded-[1.8rem] border border-[rgba(128,214,229,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_30px_rgba(88,182,197,0.06)] backdrop-blur-md sm:rounded-[2.1rem] sm:p-6 lg:p-7">
                            <div className="grid gap-6 border-b border-[rgba(177,218,232,0.16)] pb-6 sm:gap-7 sm:pb-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                                <div>
                                    <div className="flex items-center gap-4">
                                        <span className="h-[3px] w-14 rounded-full bg-[var(--teal)]" />
                                        <p className="text-xs uppercase tracking-[0.34em] text-cyan-100/80">
                                            Mengapa Pilih Kami
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-4 sm:mt-7 lg:grid-cols-3 lg:gap-5">
                                {profileAdvantages.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <article
                                            key={item.title}
                                            className={`group relative overflow-hidden rounded-[1.7rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_54px_rgba(72,155,214,0.12)] sm:rounded-[1.9rem] sm:p-7 ${item.toneClass}`}
                                        >
                                            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(88,182,197,0),rgba(88,182,197,0.88),rgba(88,182,197,0))]" />

                                            <div className="flex items-center justify-between gap-4">
                                                <div className="inline-flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/12 bg-white/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition group-hover:bg-white/14">
                                                    <Icon className="text-[1.6rem]" />
                                                </div>
                                                <span className="inline-flex min-w-[2.6rem] justify-center rounded-full border border-white/18 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-50">
                                                    0{index + 1}
                                                </span>
                                            </div>

                                            <h3 className="mt-6 text-[1.3rem] font-semibold leading-tight text-white sm:text-[1.4rem]">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 text-[0.95rem] leading-7 text-slate-50 sm:text-[0.98rem]">
                                                {item.description}
                                            </p>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
