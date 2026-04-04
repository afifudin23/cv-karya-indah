export default function InfoRow({ label, value }) {
  return (
    <div className="grid gap-2 border-b border-[rgba(15,23,42,0.08)] py-3 last:border-b-0 sm:gap-3 sm:rounded-[1.25rem] sm:border sm:border-slate-100/90 sm:bg-white/75 sm:px-4 sm:py-4 sm:last:mb-0 sm:grid-cols-[0.4fr_0.6fr] sm:items-start">
      <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">
        {label}
      </span>
      <span className="text-[0.95rem] leading-7 text-slate-700 sm:text-sm sm:leading-6">{value}</span>
    </div>
  )
}
