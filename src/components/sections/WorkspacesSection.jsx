import SectionShell from '../ui/SectionShell'

export default function WorkspacesSection({ workspaces }) {
  return (
    <SectionShell
      tone="light"
      eyebrow="Office & Workshop"
      title="Fasilitas Kerja"
      intro="Bagian ini mengikuti daftar ruang dan workshop yang muncul di PDF, lalu dikemas sebagai grid informasi agar tetap ringan dilihat."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {workspaces.map((space, index) => (
          <div
            key={space}
            className="rounded-[1.6rem] border border-black/5 bg-white p-5 shadow-[0_12px_30px_rgba(5,20,27,0.05)]"
          >
            <div className="label-size mb-4 uppercase tracking-[0.3em] text-[var(--teal-deep)]">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="font-display text-2xl uppercase text-[var(--ink-strong)]">{space}</h3>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
