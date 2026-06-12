import { Reveal } from './Reveal'

export default function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  tone = 'light',
  paddingClassName = 'py-20 sm:py-24',
  sectionClassName = '',
  titleClassName = '',
  introClassName = '',
  children,
  // kept for backward compat, unused
  headingClassName,
  headerVariant,
}) {
  const sectionBg =
    tone === 'dark'
      ? 'bg-slate-900 text-white'
      : tone === 'muted'
        ? 'bg-slate-50'
        : 'bg-white'

  const eyebrowColor =
    tone === 'dark' ? 'text-[var(--color-primary-400)]' : 'text-[var(--color-primary-600)]'
  const titleColor = tone === 'dark' ? 'text-white' : 'text-gray-900'
  const introColor = tone === 'dark' ? 'text-slate-400' : 'text-gray-500'

  return (
    <section
      id={id}
      className={`px-4 ${paddingClassName} sm:px-6 lg:px-8 ${sectionBg} ${sectionClassName}`}
    >
      <div className="mx-auto max-w-7xl">
        <Reveal as="div">
          <div className="mb-12 sm:mb-16 mx-auto max-w-2xl text-center">
            {eyebrow && (
              <p className={`mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}>
                {eyebrow}
              </p>
            )}
            <h2 className={`font-bold text-[2rem] sm:text-[2.5rem] leading-tight ${titleColor} ${titleClassName}`}>
              {title}
            </h2>
            {intro && (
              <p className={`mt-4 text-[0.97rem] leading-relaxed ${introColor} ${introClassName}`}>
                {intro}
              </p>
            )}
          </div>
        </Reveal>

        <Reveal as="div" delay={90}>
          {children}
        </Reveal>
      </div>
    </section>
  )
}
