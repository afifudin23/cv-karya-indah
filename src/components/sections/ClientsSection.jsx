import { FiBriefcase, FiMapPin } from 'react-icons/fi'
import SectionShell from '../ui/SectionShell'
import { RevealStagger } from '../ui/Reveal'

export default function ClientsSection({ clients }) {
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
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.35rem] border border-[rgba(203,231,220,0.88)] bg-[linear-gradient(180deg,rgba(237,247,242,0.98),rgba(220,238,229,0.96),rgba(204,226,215,0.94))] p-5 shadow-[0_34px_86px_rgba(72,155,214,0.12)] sm:rounded-[2.8rem] sm:p-7 lg:p-9">
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(128,214,229,0.18)] bg-[linear-gradient(180deg,rgba(10,29,38,0.96),rgba(16,46,58,0.94))] p-5 shadow-[0_34px_86px_rgba(5,18,25,0.28),0_0_46px_rgba(88,182,197,0.08)] sm:rounded-[2.4rem] sm:p-7 lg:p-8">
          <div className="pointer-events-none absolute left-[-6%] top-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(88,182,197,0.16)_0%,rgba(88,182,197,0)_74%)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-[-8%] h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(25,86,73,0.16)_0%,rgba(25,86,73,0)_74%)] blur-3xl" />

          <div className="relative grid gap-5 border-b border-[rgba(177,218,232,0.16)] pb-6 sm:pb-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="label-size uppercase tracking-[0.3em] text-white">
                Daftar Klien
              </p>
              <h3 className="content-title-size mt-4 font-display uppercase leading-[0.94] text-white">
                Rekam kerja yang
                <br />
                terus dipercaya
              </h3>
            </div>

            <div className="rounded-[1.7rem] border border-[rgba(128,214,229,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-5 shadow-[0_22px_52px_rgba(5,18,25,0.2),0_0_34px_rgba(88,182,197,0.08)] backdrop-blur-md sm:rounded-[1.9rem] sm:p-6">
              <p className="text-sm leading-7 text-white sm:text-[0.98rem]">
                Beberapa pelanggan utama kami berasal dari sektor manufaktur, retail, distribusi, hingga industri
                minuman. Kehadiran mereka di halaman ini menjadi bukti hubungan kerja yang dibangun secara konsisten
                melalui kualitas hasil dan ketepatan layanan.
              </p>
            </div>
          </div>

          <RevealStagger as="div" className="relative mt-6 grid gap-4 lg:grid-cols-2 lg:gap-5" stagger={70}>
            {clients.map((client, index) => (
              <article
                key={client.name}
                className="group relative overflow-hidden rounded-[1.7rem] border border-[rgba(118,212,227,0.22)] bg-[linear-gradient(180deg,rgba(8,23,31,0.96),rgba(14,39,50,0.94))] p-6 shadow-[0_22px_54px_rgba(5,18,25,0.24),0_0_30px_rgba(88,182,197,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(146,221,235,0.38)] hover:shadow-[0_28px_62px_rgba(5,18,25,0.28),0_0_34px_rgba(88,182,197,0.12)] sm:rounded-[1.95rem] sm:p-7"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgba(88,182,197,0),rgba(88,182,197,0.85),rgba(88,182,197,0))]" />

                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1.1rem] border border-white/18 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <FiBriefcase className="text-[1.25rem]" />
                  </div>
                  <span className="inline-flex min-w-[2.8rem] items-center justify-center rounded-full border border-white/24 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                    0{index + 1}
                  </span>
                </div>

                <p className="label-size mt-5 uppercase tracking-[0.3em] text-white">
                  Pelanggan Setia
                </p>
                <h3 className="mt-4 font-display text-[1.7rem] uppercase leading-[0.94] text-white sm:text-[2rem]">
                  {client.name}
                </h3>

                <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(88,182,197,0.5),rgba(88,182,197,0.08),rgba(88,182,197,0))]" />

                <div className="mt-5 flex items-start gap-3">
                  <FiMapPin className="mt-1 shrink-0 text-[1rem] text-white" />
                  <p className="text-[0.98rem] leading-8 text-white">
                    {client.address}
                  </p>
                </div>
              </article>
            ))}
          </RevealStagger>

          <div className="relative mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-5">
            <div className="rounded-[1.8rem] border border-[rgba(118,212,227,0.22)] bg-[linear-gradient(180deg,rgba(8,23,31,0.96),rgba(14,39,50,0.94))] px-6 py-7 text-white shadow-[0_24px_60px_rgba(5,18,25,0.24),0_0_34px_rgba(88,182,197,0.08)] sm:rounded-[2rem] sm:px-7 sm:py-8">
              <p className="label-size uppercase tracking-[0.3em] text-white">
                Komitmen Relasi
              </p>
              <p className="mt-4 text-[1.45rem] font-semibold leading-tight text-white sm:text-[1.7rem]">
                Hubungan kerja yang dijaga untuk jangka panjang.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-[rgba(128,214,229,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] px-6 py-7 shadow-[0_24px_60px_rgba(5,18,25,0.24),0_0_32px_rgba(88,182,197,0.08)] backdrop-blur-md sm:rounded-[2rem] sm:px-7 sm:py-8">
              <p className="label-size uppercase tracking-[0.3em] text-white">
                Hubungan Jangka Panjang
              </p>
              <p className="mt-4 text-[0.98rem] leading-8 text-white">
                Kami selalu berusaha untuk membangun hubungan jangka panjang dengan setiap pelanggan kami dan terus
                meningkatkan layanan kami berdasarkan masukan mereka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
