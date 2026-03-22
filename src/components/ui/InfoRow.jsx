export default function InfoRow({ label, value }) {
  return (
    <div className="grid gap-2 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[0.42fr_0.58fr]">
      <span className="text-sm uppercase tracking-[0.12em] text-slate-400">{label}</span>
      <span className="text-sm leading-6 text-slate-700">{value}</span>
    </div>
  )
}
