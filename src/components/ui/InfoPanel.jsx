export default function InfoPanel({ title, children }) {
  return (
    <div className="h-full overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,250,253,0.96))] p-7 shadow-[0_24px_56px_rgba(72,155,214,0.12)]">
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
