import SectionShell from '../ui/SectionShell'
import ClientLocationsMap from '../ui/ClientLocationsMap'
import { RevealStagger } from '../ui/Reveal'

function getIconLabel(icon) {
  switch (icon) {
    case 'billboard':
      return 'BD'
    case 'interior':
      return 'IN'
    case 'printer':
      return 'DP'
    case 'tools':
      return 'KS'
    default:
      return 'KI'
  }
}

export default function ServicesSection({ servicesData, coverageLocations = [] }) {
  return (
    <SectionShell
      id="layanan"
      tone="dark"
      paddingClassName="pb-20 pt-28 sm:pt-32"
      eyebrow="Layanan"
      title="Layanan Utama"
      intro="Empat kategori layanan utama kami disusun agar lebih rapi, mudah dipindai, dan tetap mencerminkan karakter premium CV Karya Indah."
    >
      <RevealStagger as="div" className="grid gap-6 lg:grid-cols-2" stagger={90}>
        {servicesData.map((service) => (
          <article
            key={service.title}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-6 shadow-[0_24px_60px_rgba(6,18,25,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[rgba(88,182,197,0.45)] hover:shadow-[0_30px_70px_rgba(6,18,25,0.24)] sm:rounded-[2.3rem] sm:p-7"
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 h-24 bg-[radial-gradient(circle,rgba(88,182,197,0.2)_0%,rgba(88,182,197,0)_72%)] blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/12 bg-white/10 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                  {getIconLabel(service.icon)}
                </div>
                <span className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                  {service.icon}
                </span>
              </div>

              <h3 className="mt-6 font-display text-[2rem] uppercase leading-[0.94] text-white sm:text-[2.45rem]">
                {service.title}
              </h3>

              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_18px_44px_rgba(6,18,25,0.18)] sm:rounded-[1.7rem]">
                <div className="relative aspect-[16/9] max-h-[250px] w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,25,0.06),rgba(5,18,25,0.22))]" />
                </div>
              </div>

              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-300 sm:text-base sm:leading-8">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {service.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </RevealStagger>

      {coverageLocations.length ? (
        <div className="mt-10 overflow-hidden rounded-[2.3rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_28px_70px_rgba(6,18,25,0.22)] sm:mt-12 sm:rounded-[2.6rem] sm:p-7 lg:p-8">
          <div className="grid gap-5 border-b border-white/10 pb-6 sm:pb-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-100/82">
                Peta Sebaran
              </p>
              <h3 className="mt-4 font-display text-[2.1rem] uppercase leading-[0.94] text-white sm:text-[3rem]">
                Sebaran perusahaan
                <br />
                di berbagai provinsi
              </h3>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_44px_rgba(6,18,25,0.18)] backdrop-blur-md sm:rounded-[1.8rem] sm:p-6">
              <p className="text-[0.98rem] leading-7 text-slate-300 sm:text-base sm:leading-8">
                Peta ini merangkum perusahaan dan pusat aktivitas bisnis dari berbagai kota di Indonesia sebagai
                gambaran luasnya ekosistem industri yang relevan dengan layanan branding, signage, interior, dan
                digital printing yang dikerjakan CV Karya Indah.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ClientLocationsMap locations={coverageLocations} />
          </div>
        </div>
      ) : null}
    </SectionShell>
  )
}
