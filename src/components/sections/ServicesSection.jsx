import SectionShell from "../ui/SectionShell";
import ClientLocationsMap from "../ui/ClientLocationsMap";
import { RevealStagger } from "../ui/Reveal";
import { FiBriefcase, FiMapPin } from "react-icons/fi";

function getIconLabel(icon) {
    switch (icon) {
        case "exterior":
            return "EG";
        case "interior":
            return "IG";
        case "printer":
            return "DP";
        case "tools":
            return "KS";
        default:
            return "KI";
    }
}

export default function ServicesSection({ servicesData, coverageLocations = [], clients = [] }) {
    return (
        <SectionShell
            id="layanan"
            tone="light"
            paddingClassName="pb-20 pt-28 sm:pt-32"
            eyebrow="Layanan"
            title="Layanan Utama"
            intro="Empat kategori layanan utama kami disusun agar lebih rapi, mudah dipindai, dan tetap mencerminkan karakter premium CV Karya Indah."
            sectionClassName="border-y border-[rgba(196,223,235,0.86)] bg-[linear-gradient(180deg,#f9fcfe_0%,#eef5fa_50%,#f7fbfd_100%)]"
        >
            <RevealStagger as="div" className="grid gap-0 sm:gap-6 lg:grid-cols-2" stagger={90}>
                {servicesData.map((service) => (
                    <article
                        key={service.title}
                        className="group relative overflow-visible border-b border-[rgba(15,23,42,0.1)] py-7 last:border-b-0 sm:overflow-hidden sm:rounded-[2.3rem] sm:border sm:border-[rgba(186,214,228,0.85)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(244,249,252,0.97))] sm:p-7 sm:shadow-[0_24px_60px_rgba(72,155,214,0.1)] sm:backdrop-blur-md sm:transition sm:duration-300 sm:hover:-translate-y-1 sm:hover:border-[rgba(0,194,255,0.28)] sm:hover:shadow-[0_30px_72px_rgba(72,155,214,0.16)]"
                    >
                        <div className="pointer-events-none absolute inset-x-10 top-0 hidden h-24 bg-[radial-gradient(circle,rgba(0,194,255,0.12)_0%,rgba(0,194,255,0)_72%)] blur-2xl sm:block" />
                        <div className="pointer-events-none absolute right-0 top-0 hidden h-36 w-36 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,rgba(88,182,197,0.12)_0%,rgba(88,182,197,0)_72%)] blur-2xl sm:block" />

                        <div className="relative z-10">
                            <div className="flex items-start justify-between gap-4">
                                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(14,165,233,0.1)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary-700)] sm:h-14 sm:w-14 sm:rounded-[1.2rem] sm:border sm:border-[rgba(14,165,233,0.16)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(241,248,252,0.96))] sm:text-sm sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_12px_28px_rgba(72,155,214,0.08)]">
                                    {getIconLabel(service.icon)}
                                </div>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-900)] sm:rounded-full sm:border sm:border-[rgba(14,165,233,0.18)] sm:bg-[rgba(240,248,252,0.96)] sm:px-3 sm:py-2 sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.88)]">
                                    {service.icon}
                                </span>
                            </div>

                            <h3 className="mt-5 font-display text-[1.55rem] uppercase leading-[0.98] text-[var(--color-text-strong)] sm:content-title-size sm:mt-6 sm:leading-[0.94]">
                                {service.title}
                            </h3>

                            <div className="mt-4 overflow-hidden rounded-[1.2rem] bg-transparent sm:mt-5 sm:rounded-[1.7rem] sm:border sm:border-[rgba(190,219,231,0.88)] sm:bg-white sm:shadow-[0_18px_44px_rgba(72,155,214,0.1)]">
                                <div className="relative aspect-[16/9] max-h-[250px] w-full overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.imageAlt || service.title}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(11,30,45,0.08))] sm:block" />
                                </div>
                            </div>

                            <p className="descriptive-copy mt-4 max-w-2xl text-[0.94rem] leading-7 text-[var(--color-text-secondary)] sm:text-[1.04rem] sm:leading-8">
                                {service.description}
                            </p>

                            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-900)] sm:hidden">
                                {service.items.join(" • ")}
                            </p>

                            <div className="mt-6 hidden flex-wrap gap-3 sm:flex">
                                {service.items.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-[rgba(14,165,233,0.18)] bg-[linear-gradient(180deg,rgba(248,252,254,0.98),rgba(236,245,250,0.96))] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-900)] shadow-[0_10px_24px_rgba(72,155,214,0.08)]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </RevealStagger>

            {clients?.length ? (
                <div className="mt-10 sm:mt-12 sm:overflow-hidden sm:rounded-[2.6rem] sm:border sm:border-[rgba(186,214,228,0.88)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(241,248,252,0.96))] sm:p-7 sm:shadow-[0_28px_70px_rgba(72,155,214,0.1)] lg:p-8">
                    <div className="grid gap-4 border-b border-[rgba(14,165,233,0.12)] pb-6 sm:gap-5 sm:pb-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                        <div>
                            <p className="label-size uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
                                Bukti Pelanggan
                            </p>
                            <h3 className="mt-3 font-display text-[1.55rem] uppercase leading-[0.98] text-[var(--color-text-strong)] sm:content-title-size sm:mt-4 sm:leading-[0.94]">
                                Klien utama
                                <br />
                                yang sudah dipercaya
                            </h3>
                        </div>

                        <div className="rounded-[1.6rem] border border-[rgba(14,165,233,0.12)] bg-white p-5 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-md sm:rounded-[1.8rem] sm:p-6">
                            <p className="descriptive-copy text-[1rem] leading-8 text-[var(--color-text-secondary)] sm:text-[1.04rem] sm:leading-8">
                                Daftar berikut ditampilkan ulang di halaman layanan agar calon klien lebih mudah melihat
                                portofolio relasi kerja yang mendukung layanan signage, interior, digital printing, dan
                                konstruksi.
                            </p>
                        </div>
                    </div>

                    <RevealStagger as="div" className="mt-6 grid gap-0 sm:mt-7 sm:gap-6 lg:grid-cols-2" stagger={70}>
                        {clients.map((client, index) => (
                            <article
                                key={client.name}
                                className="group relative overflow-visible border-b border-[rgba(15,23,42,0.1)] py-7 last:border-b-0 sm:overflow-hidden sm:rounded-[2.3rem] sm:border sm:border-[rgba(186,214,228,0.85)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(244,249,252,0.97))] sm:p-7 sm:shadow-[0_24px_60px_rgba(72,155,214,0.1)] sm:backdrop-blur-md sm:transition sm:duration-300 sm:hover:-translate-y-1 sm:hover:border-[rgba(0,194,255,0.28)] sm:hover:shadow-[0_30px_72px_rgba(72,155,214,0.16)]"
                            >
                                <div className="pointer-events-none absolute inset-x-10 top-0 hidden h-24 bg-[radial-gradient(circle,rgba(0,194,255,0.12)_0%,rgba(0,194,255,0)_72%)] blur-2xl sm:block" />
                                <div className="pointer-events-none absolute right-0 top-0 hidden h-36 w-36 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,rgba(88,182,197,0.12)_0%,rgba(88,182,197,0)_72%)] blur-2xl sm:block" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(14,165,233,0.1)] text-[var(--color-primary-700)] sm:h-14 sm:w-14 sm:rounded-[1.2rem] sm:border sm:border-[rgba(14,165,233,0.16)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(241,248,252,0.96))] sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_12px_28px_rgba(72,155,214,0.08)]">
                                            <FiBriefcase className="text-[1.15rem] sm:text-[1.4rem]" />
                                        </div>
                                        <span className="inline-flex min-w-[2.6rem] items-center justify-center rounded-full border border-[rgba(15,23,42,0.12)] bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-strong)] shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <p className="label-size mt-5 uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
                                        Pelanggan Setia
                                    </p>
                                    <h3 className="mt-4 font-display text-[1.55rem] uppercase leading-[0.98] text-[var(--color-text-strong)] sm:content-title-size sm:leading-[0.94]">
                                        {client.name}
                                    </h3>

                                    <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(0,194,255,0.26),rgba(15,23,42,0.08),rgba(0,194,255,0))]" />

                                    <div className="mt-5 flex items-start gap-3">
                                        <FiMapPin className="mt-1 shrink-0 text-[1rem] text-[var(--color-primary-700)]" />
                                        <p className="descriptive-copy text-[0.98rem] leading-8 text-[var(--color-text-secondary)]">
                                            {client.address}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </RevealStagger>
                </div>
            ) : null}

            {coverageLocations.length ? (
                <div className="mt-10 sm:mt-12 sm:overflow-hidden sm:rounded-[2.6rem] sm:border sm:border-[rgba(186,214,228,0.88)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(241,248,252,0.96))] sm:p-7 sm:shadow-[0_28px_70px_rgba(72,155,214,0.1)] lg:p-8">
                    <div className="grid gap-4 border-b border-[rgba(14,165,233,0.12)] pb-6 sm:gap-5 sm:pb-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                        <div>
                            <p className="label-size uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
                                Peta Lokasi
                            </p>
                            <h3 className="mt-3 font-display text-[1.55rem] uppercase leading-[0.98] text-[var(--color-text-strong)] sm:content-title-size sm:mt-4 sm:leading-[0.94]">
                                Pelayanan CV Karya Indah
                                <br />
                                di berbagai provinsi
                            </h3>
                        </div>

                        <div className="rounded-[1.6rem] border border-[rgba(14,165,233,0.12)] bg-white p-5 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-md sm:rounded-[1.8rem] sm:p-6">
                            <p className="descriptive-copy text-[1rem] leading-8 text-[var(--color-text-secondary)] sm:text-[1.04rem] sm:leading-8">
                                Peta ini merangkum perusahaan dan pusat aktivitas bisnis dari berbagai kota di Indonesia
                                sebagai gambaran luasnya ekosistem industri yang relevan dengan layanan branding,
                                signage, interior, dan digital printing yang dikerjakan CV Karya Indah.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 sm:mt-6">
                        <ClientLocationsMap locations={coverageLocations} />
                    </div>
                </div>
            ) : null}
        </SectionShell>
    );
}
