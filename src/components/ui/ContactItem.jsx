export default function ContactItem({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.28em] text-[var(--teal)]">{label}</p>
      <p className="mt-2 text-lg text-white">{value}</p>
    </div>
  )
}
