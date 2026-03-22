import SectionShell from '../ui/SectionShell'

export default function ReviewsSection({ reviews }) {
  return (
    <SectionShell
      tone="dark"
      eyebrow="Review Pelanggan"
      title="Kepercayaan yang Dibangun"
      intro="Bagian review dibuat singkat sesuai PDF, dengan fokus pada trust dan kepuasan pelanggan."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {reviews.map((review, index) => (
          <blockquote
            key={index}
            className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7 text-slate-200"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--teal)]">
              Testimoni
            </p>
            <p className="text-lg leading-8">{review}</p>
          </blockquote>
        ))}
      </div>
    </SectionShell>
  )
}
