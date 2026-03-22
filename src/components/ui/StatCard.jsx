export default function StatCard({ title, value }) {
  return (
    <div className="group relative overflow-hidden rounded-[1.6rem] border border-black/5 bg-white px-6 py-6 shadow-[0_12px_34px_rgba(6,18,24,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(6,18,24,0.1)]">
      <div className="mb-5 h-[4px] w-16 rounded-full bg-[var(--teal)]" />
      <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--teal-deep)]">{title}</p>
      <p className="mt-4 text-[1.7rem] font-semibold leading-tight text-[var(--ink-strong)]">{value}</p>
    </div>
  )
}
