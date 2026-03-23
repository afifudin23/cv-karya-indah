export default function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  tone = 'light',
  headerVariant = 'default',
  paddingClassName = 'py-20',
  children,
}) {
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
  const isFeaturedHeader = headerVariant === 'feature'

  return (
    <section id={id} className={`px-4 ${paddingClassName} sm:px-6 lg:px-8 ${sectionClass}`}>
      <div className="mx-auto max-w-7xl">
        <div
          className={`mb-12 ${
            isFeaturedHeader
              ? 'mx-auto max-w-4xl px-2 sm:px-4'
              : 'max-w-3xl'
          }`}
        >
          <div className={isFeaturedHeader ? 'mx-auto max-w-4xl' : ''}>
            <div
              className={`mb-4 flex items-center gap-4 ${
                isFeaturedHeader ? 'justify-end' : ''
              }`}
            >
              <span className={`h-[3px] rounded-full bg-[var(--teal)] ${isFeaturedHeader ? 'w-14' : 'hidden'}`} />
              <p className={`text-xs uppercase tracking-[0.34em] ${eyebrowClass}`}>
                {eyebrow}
              </p>
            </div>

            <h2
              className={`font-display uppercase ${titleClass} ${
                isFeaturedHeader
                  ? 'text-right text-[2.85rem] leading-[0.95] sm:text-[4rem] lg:text-[4.8rem]'
                  : 'text-4xl sm:text-5xl'
              }`}
            >
              {title}
            </h2>

            {isFeaturedHeader && (
              <div className="ml-auto mt-5 h-px w-28 bg-[linear-gradient(90deg,rgba(88,182,197,0),rgba(88,182,197,0.9),rgba(88,182,197,0))]" />
            )}

            <p
              className={`leading-8 ${introClass} ${
                isFeaturedHeader
                  ? 'mx-auto mt-6 max-w-3xl text-justify text-base sm:text-[1.08rem] sm:leading-9'
                  : 'mt-5 max-w-2xl'
              }`}
            >
              {intro}
            </p>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
