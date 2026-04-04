export default function InfoPanel({ title, children }) {
  return (
    <div className="h-full overflow-visible rounded-none border-0 bg-transparent p-0 shadow-none sm:overflow-hidden sm:rounded-[2rem] sm:border sm:border-white/70 sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,250,253,0.96))] sm:p-7 sm:shadow-[0_24px_56px_rgba(72,155,214,0.12)]">
      <div className="mb-5 flex items-center gap-4">
        <span className="h-[3px] w-14 rounded-full bg-[var(--teal)]" />
        <p className="label-size uppercase tracking-[0.28em] text-[var(--teal-deep)]">
          {title}
        </p>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
