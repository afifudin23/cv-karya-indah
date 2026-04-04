import { Reveal } from './Reveal'

export default function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  tone = 'light',
  headerVariant = 'default',
  paddingClassName = 'py-20',
  sectionClassName = '',
  headingClassName = '',
  titleClassName = '',
  introClassName = '',
  children,
}) {
  const sectionClass =
    tone === 'dark'
      ? 'bg-[linear-gradient(180deg,var(--color-bg-canvas)_0%,var(--color-bg-surface)_100%)] text-white'
      : tone === 'muted'
        // ? 'border-y border-[var(--color-border-soft)] bg-white'
        ? 'border-y border-[var(--color-border-soft)] bg-[linear-gradient(180deg,#f7fbff_0%,#f2f7fb_52%,#eef5fa_100%)]'
        : 'border-y border-[var(--color-border-soft)] bg-[linear-gradient(180deg,#f7fbff_0%,#eef4f8_100%)]'

  const eyebrowClass =
    tone === 'dark' ? 'text-[var(--teal)]' : 'text-[var(--teal-deep)]'

  const titleClass = tone === 'dark' ? 'text-white' : 'text-[var(--ink-strong)]'
  const introClass = tone === 'dark' ? 'text-slate-300' : 'text-slate-600'
  const isFeaturedHeader = headerVariant === 'feature'

  return (
    <section id={id} className={`px-4 ${paddingClassName} sm:px-6 lg:px-8 ${sectionClass} ${sectionClassName}`}>
      <div className="mx-auto max-w-7xl">
        <Reveal as="div">
          <div
            className={`mb-12 w-full ${isFeaturedHeader ? 'px-2 sm:px-4' : ''} ${headingClassName}`}
          >
          <div className="w-full">
            <div
              className={`mb-4 flex items-center gap-4 ${
                isFeaturedHeader ? 'justify-end' : ''
              }`}
            >
              <span className={`h-[3px] rounded-full bg-[linear-gradient(90deg,var(--color-primary-500),var(--color-primary-700))] ${isFeaturedHeader ? 'w-14 shadow-[0_0_18px_rgba(0,194,255,0.3)]' : 'hidden'}`} />
              <p className={`label-size uppercase tracking-[0.34em] ${eyebrowClass}`}>
                {eyebrow}
              </p>
            </div>

            <h2
              className={`font-display uppercase ${titleClass} ${
                isFeaturedHeader
                  ? 'text-right text-[2.1rem] leading-[1.05] sm:text-[3.1rem] lg:text-[4.4rem]'
                  : 'section-title-size'
              } ${titleClassName}`}
            >
              {title}
            </h2>

            {isFeaturedHeader && (
              <div className="ml-auto mt-5 h-px w-28 bg-[linear-gradient(90deg,rgba(0,194,255,0),rgba(0,194,255,0.9),rgba(30,144,255,0))]" />
            )}

            <p
              className={`descriptive-copy leading-8 ${introClass} ${
                isFeaturedHeader
                  ? 'mt-6 w-full text-left text-[1rem] sm:text-[1.08rem] sm:leading-9'
                  : 'mt-5 w-full'
              } ${introClassName}`}
            >
              {intro}
            </p>
          </div>
        </div>
        </Reveal>

        <Reveal as="div" delay={90}>
          {children}
        </Reveal>
      </div>
    </section>
  )
}
