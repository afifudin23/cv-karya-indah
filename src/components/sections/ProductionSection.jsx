import SectionShell from '../ui/SectionShell'

export default function ProductionSection({ portfolioGroups }) {
  return (
    <SectionShell
      id="produksi"
      tone="muted"
      eyebrow="Portofolio"
      title="Hasil Produksi"
      intro="Daftar pekerjaan mengikuti item-item yang muncul di PDF, lalu disusun menjadi blok konten yang lebih rapi untuk web."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {portfolioGroups.map((group, groupIndex) => (
          <div
            key={group.title}
            className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_18px_40px_rgba(5,20,27,0.06)]"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={
                  groupIndex === 0
                    ? 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80'
                    : 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'
                }
                alt={group.title}
                className="h-full w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,18,25,0.8),rgba(6,18,25,0.2))]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.26em] text-[var(--teal)]">
                  CV. Karya Indah
                </p>
                <h3 className="font-display text-3xl uppercase text-white">{group.title}</h3>
              </div>
            </div>

            <div className="grid gap-3 p-6 sm:grid-cols-2">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-[var(--line)] bg-[var(--panel-soft)] px-4 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
