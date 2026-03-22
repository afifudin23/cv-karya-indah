export default function InfoPanel({ title, children }) {
  return (
    <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_16px_35px_rgba(5,20,27,0.06)]">
      <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
        {title}
      </p>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
