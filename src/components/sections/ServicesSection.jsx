import { FiPenTool, FiGrid, FiPrinter, FiTool } from 'react-icons/fi';
import PageHeroSlider from '../ui/PageHeroSlider';
import ClientLocationsMap from '../ui/ClientLocationsMap';
import { Reveal, RevealStagger } from '../ui/Reveal';

const heroImages = ['/office_workshop/picture36.png'];

const iconMap = {
  exterior: FiPenTool,
  interior: FiGrid,
  printer: FiPrinter,
  tools: FiTool,
};

export default function ServicesSection({ servicesData, coverageLocations = [] }) {
  return (
    <section id="layanan">
      {/* ── Hero full-bleed ── */}
      <div className="relative flex items-center justify-center overflow-hidden pt-[var(--header-height)] min-h-[100svh]">
        <PageHeroSlider images={heroImages} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center text-white sm:px-12">
          <h1 className="font-bold text-[2.4rem] leading-tight sm:text-[3.5rem]">Solusi Bisnis Terlengkap</h1>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-white/80">
            Dari signage eksterior, interior branded, cetak digital, hingga konstruksi visual — semua dikerjakan dalam
            satu ekosistem kerja yang presisi dan profesional.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {['Exterior Goods', 'Interior Goods', 'Digital Printing', 'Konstruksi'].map((p) => (
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

      {/* ── Services Grid ── */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
              Layanan
            </p>
            <h2 className="font-bold text-[2rem] sm:text-[2.5rem] leading-tight text-gray-900">Layanan Utama Kami</h2>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-gray-500">
              Empat kategori layanan untuk mendukung kebutuhan branding, signage, interior, dan konstruksi visual bisnis
              Anda.
            </p>
          </Reveal>

          <RevealStagger as="div" className="grid gap-7 lg:grid-cols-2" stagger={90}>
            {servicesData.map((service) => {
              const Icon = iconMap[service.icon] ?? FiTool;
              return (
                <article
                  key={service.title}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt || service.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-7">
                    {/* Icon + Title */}
                    <div className="mb-4 flex items-center gap-3">
                      <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-50)]">
                        <Icon className="text-[1.2rem] text-[var(--color-primary-600)] stroke-[1.5]" />
                      </div>
                      <h3 className="font-bold text-[1.25rem] text-gray-900 leading-snug">{service.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="mb-5 text-[0.95rem] leading-7 text-gray-500">{service.description}</p>

                    {/* Highlight callout */}
                    <div className="mb-5 flex items-start gap-3 rounded-xl bg-[var(--color-primary-50)] px-4 py-3">
                      <span className="mt-[5px] h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary-500)]" />
                      <p className="text-[0.85rem] font-medium leading-relaxed text-[var(--color-primary-700)]">
                        {service.highlight}
                      </p>
                    </div>

                    {/* Item pills */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-100 px-3 py-1 text-[0.72rem] font-semibold text-gray-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </RevealStagger>
        </div>
      </div>

      {/* ── Coverage map ── */}
      {coverageLocations.length ? (
        <div className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal as="div" className="mb-10">
              <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                Peta Jangkauan
              </p>
              <h3 className="font-bold text-[2rem] sm:text-[2.4rem] text-gray-900">
                Pelanggan Yang Kami Layani di Berbagai Provinsi
              </h3>
            </Reveal>
            <Reveal as="div" delay={60}>
              <div className="rounded-2xl border border-gray-100 bg-slate-50 p-6 lg:p-8">
                <ClientLocationsMap locations={coverageLocations} />
              </div>
            </Reveal>
          </div>
        </div>
      ) : null}
    </section>
  );
}
