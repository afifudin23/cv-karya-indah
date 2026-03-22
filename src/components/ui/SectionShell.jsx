export default function SectionShell({ id, eyebrow, title, intro, tone = 'light', children }) {
  const sectionClass =
    tone === 'dark'
      ? 'bg-[var(--hero)] text-white'
      : tone === 'muted'
        ? 'border-y border-black/5 bg-white'
        : 'border-y border-black/5 bg-[#f7f4ef]'

  const eyebrowClass =
    tone === 'dark' ? 'text-[var(--teal)]' : 'text-[var(--teal-deep)]'

  const titleClass = tone === 'dark' ? 'text-white' : 'text-[var(--ink-strong)]'
  const introClass = tone === 'dark' ? 'text-slate-300' : 'text-slate-600'

  return (
    <section id={id} className={`px-4 py-20 sm:px-6 lg:px-8 ${sectionClass}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className={`mb-4 text-xs uppercase tracking-[0.34em] ${eyebrowClass}`}>
            {eyebrow}
          </p>
          <h2 className={`font-display text-4xl uppercase sm:text-5xl ${titleClass}`}>
            {title}
          </h2>
          <p className={`mt-5 max-w-2xl leading-8 ${introClass}`}>{intro}</p>
        </div>
        {children}
      </div>
    </section>
  )
}
