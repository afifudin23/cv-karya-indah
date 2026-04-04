import { useRef } from "react";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import SectionShell from "../ui/SectionShell";
import { RevealStagger } from "../ui/Reveal";

export default function ClientsSection({ clients }) {
    const glowFrameRef = useRef(null);
    const glowStateRef = useRef(null);

    const handleGlowMove = (event) => {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const nextState = {
            target,
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        };

        glowStateRef.current = nextState;

        if (glowFrameRef.current) {
            return;
        }

        glowFrameRef.current = requestAnimationFrame(() => {
            glowFrameRef.current = null;
            const state = glowStateRef.current;
            if (!state?.target) {
                return;
            }

            state.target.style.setProperty("--glow-x", `${state.x}px`);
            state.target.style.setProperty("--glow-y", `${state.y}px`);
            state.target.style.setProperty("--glow-opacity", "1");
        });
    };

    const handleGlowLeave = (event) => {
        if (glowFrameRef.current) {
            cancelAnimationFrame(glowFrameRef.current);
            glowFrameRef.current = null;
        }
        glowStateRef.current = null;
        event.currentTarget.style.setProperty("--glow-opacity", "0");
    };

    return (
        <SectionShell
            id="pelanggan"
            tone="light"
            paddingClassName="pt-24 pb-20 sm:pt-20 sm:pb-24"
            sectionClassName="bg-[linear-gradient(180deg,#edf7f2_0%,#dceee5_42%,#cce2d7_100%)]"
            titleClassName="leading-[0.95]"
            eyebrow="Pelanggan"
            title="Bukti Pelanggan"
            intro="Kami telah bekerja sama dengan berbagai klien dari beragam sektor. Daftar ini ditampilkan ulang sebagai bukti relasi kerja yang terus dijaga melalui kualitas hasil, komunikasi yang baik, dan pelayanan yang konsisten."
        >
            <div
                onMouseMove={handleGlowMove}
                onMouseLeave={handleGlowLeave}
                style={{
                    "--glow-x": "50%",
                    "--glow-y": "50%",
                    "--glow-opacity": "0",
                }}
                className="relative mx-auto max-w-6xl overflow-visible rounded-none border-0 bg-transparent p-0 shadow-none sm:overflow-hidden sm:rounded-[2.8rem] sm:border sm:border-[rgba(186,214,228,0.85)] sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,248,253,0.96))] sm:p-7 sm:shadow-[0_34px_86px_rgba(72,155,214,0.12)] lg:p-9"
            >
                <div
                    className="pointer-events-none absolute inset-0 hidden opacity-[var(--glow-opacity)] transition-opacity duration-300 sm:block"
                    style={{
                        background:
                            "radial-gradient(240px circle at var(--glow-x) var(--glow-y), rgba(0,194,255,0.14), rgba(0,194,255,0.07) 24%, rgba(0,194,255,0.03) 46%, rgba(0,194,255,0) 72%)",
                    }}
                />
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 hidden h-px sm:block"
                    style={{
                        background: "linear-gradient(90deg,rgba(0,194,255,0),rgba(0,194,255,0.5),rgba(0,194,255,0))",
                    }}
                />

                <div className="pointer-events-none absolute left-[-6%] top-10 hidden h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.12)_0%,rgba(0,194,255,0)_74%)] blur-3xl sm:block" />
                <div className="pointer-events-none absolute bottom-0 right-[-8%] hidden h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.1)_0%,rgba(14,165,233,0)_74%)] blur-3xl sm:block" />

                <div className="relative">
                    <div className="grid gap-5 border-b border-[rgba(14,165,233,0.12)] pb-6 sm:pb-7">
                        <div>
                            <p className="label-size uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
                                Daftar Klien
                            </p>
                            <h3 className="content-title-size mt-4 font-display uppercase leading-[0.94] text-[var(--color-text-strong)]">
                                Rekam kerja yang terus dipercaya
                            </h3>
                        </div>
                    </div>

                    <RevealStagger as="div" className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-5" stagger={70}>
                        {clients.map((client, index) => (
                            <article
                                key={client.name}
                                className="group relative overflow-hidden rounded-[1.7rem] border border-[rgba(186,214,228,0.85)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,248,251,0.96))] p-6 shadow-[0_22px_54px_rgba(72,155,214,0.1)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(0,194,255,0.22)] hover:shadow-[0_28px_62px_rgba(72,155,214,0.14)] sm:rounded-[1.95rem] sm:p-7"
                            >
                                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(0,194,255,0),rgba(0,194,255,0.75),rgba(0,194,255,0))]" />

                                <div className="flex items-start justify-between gap-4">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] border border-[rgba(14,165,233,0.18)] bg-[rgba(14,165,233,0.08)] text-[var(--color-primary-900)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                                        <FiBriefcase className="text-[1.25rem]" />
                                    </div>
                                    <span className="inline-flex min-w-[2.8rem] items-center justify-center rounded-full border border-[rgba(15,23,42,0.12)] bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-text-strong)] shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
                                        0{index + 1}
                                    </span>
                                </div>

                                <p className="label-size mt-5 uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
                                    Pelanggan Setia
                                </p>
                                <h3 className="mt-4 font-display text-[1.7rem] uppercase leading-[0.94] text-[var(--color-text-strong)] sm:text-[2rem]">
                                    {client.name}
                                </h3>

                                <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(0,194,255,0.26),rgba(15,23,42,0.08),rgba(0,194,255,0))]" />

                                <div className="mt-5 flex items-start gap-3">
                                    <FiMapPin className="mt-1 shrink-0 text-[1rem] text-[var(--color-primary-700)]" />
                                    <p className="text-[0.98rem] leading-8 text-[var(--color-text-secondary)]">
                                        {client.address}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </RevealStagger>

                    <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-5">
                        <div className="rounded-[1.8rem] border border-[rgba(186,214,228,0.85)] bg-white px-6 py-7 shadow-[0_24px_60px_rgba(72,155,214,0.1)] sm:rounded-[2rem] sm:px-7 sm:py-8">
                            <p className="label-size uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
                                Komitmen Relasi
                            </p>
                            <p className="mt-4 text-[1.45rem] font-semibold leading-tight text-[var(--color-text-strong)] sm:text-[1.7rem]">
                                Hubungan kerja yang dijaga untuk jangka panjang.
                            </p>
                        </div>

                        <div className="rounded-[1.8rem] border border-[rgba(186,214,228,0.75)] bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(244,248,251,0.9))] px-6 py-7 shadow-[0_24px_60px_rgba(72,155,214,0.1)] sm:rounded-[2rem] sm:px-7 sm:py-8">
                            <p className="label-size uppercase tracking-[0.3em] text-[var(--color-primary-700)]">
                                Hubungan Jangka Panjang
                            </p>
                            <p className="descriptive-copy mt-4 text-[0.98rem] leading-8 text-slate-600">
                                Kami selalu berusaha untuk membangun hubungan jangka panjang dengan setiap pelanggan
                                kami dan terus meningkatkan layanan kami berdasarkan masukan mereka.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionShell>
    );
}
