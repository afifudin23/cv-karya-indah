export default function BulletRow({ value }) {
  return (
    <div className="flex gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--teal)]" />
      <p className="text-sm leading-7 text-slate-700">{value}</p>
    </div>
  )
}
