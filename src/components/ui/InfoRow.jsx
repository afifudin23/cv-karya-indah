export default function InfoRow({ label, value }) {
  return (
    <div className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 last:mb-0 sm:grid-cols-[0.4fr_0.6fr] sm:items-start">
      <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">
        {label}
      </span>
      <span className="text-sm leading-6 text-slate-700">{value}</span>
    </div>
  )
}
