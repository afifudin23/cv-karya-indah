export default function StatCard({ title, value }) {
  return (
    <div className="group relative overflow-hidden rounded-[1.6rem] border border-white/60 bg-white/96 px-6 py-6 shadow-[0_22px_52px_rgba(72,155,214,0.16)] transition hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(72,155,214,0.24)]">
      <div className="mb-5 h-[4px] w-16 rounded-full bg-[var(--teal)]" />
      <p className="label-size uppercase tracking-[0.32em] text-[var(--teal-deep)]">{title}</p>
      <p className="mt-4 text-[1.7rem] font-semibold leading-tight text-[var(--ink-strong)]">{value}</p>
    </div>
  )
}
