import SectionShell from '../ui/SectionShell'

export default function ServicesSection({ services }) {
  return (
    <SectionShell
      id="layanan"
      tone="dark"
      paddingClassName="pb-20 pt-28 sm:pt-32"
      eyebrow="Layanan"
      title="One Stop Advertising"
      intro="Ruang lingkup layanan dirapikan supaya tetap sama dengan isi profil perusahaan, tetapi tampil lebih mudah dipindai dan terasa lebih premium."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[var(--teal)] hover:bg-white/8"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal)] text-sm font-bold uppercase tracking-[0.2em] text-white">
              KI
            </div>
            <h3 className="mb-3 font-display text-2xl uppercase text-white">{service.title}</h3>
            <p className="leading-7 text-slate-300">{service.desc}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
