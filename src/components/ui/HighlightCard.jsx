export default function HighlightCard({ title, accent, children }) {
  const accentClass =
    accent === 'ink'
      ? 'border-[var(--ink)] bg-slate-950 text-white'
      : 'border-[var(--teal)] bg-[var(--panel-soft)] text-slate-800'

  return (
    <div className={`rounded-[1.5rem] border-l-4 p-6 ${accentClass}`}>
      <p className="mb-3 text-xs uppercase tracking-[0.3em]">{title}</p>
      <p className="text-lg leading-8">{children}</p>
    </div>
  )
}
