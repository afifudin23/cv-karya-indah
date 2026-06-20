import SectionShell from '../ui/SectionShell'
import { RevealStagger } from '../ui/Reveal'

export default function WorkspacesSection({ workspaces }) {
  return (
    <SectionShell
      tone="light"
      eyebrow="Fasilitas"
      title="Fasilitas Kerja"
      intro="Ruang kantor, area koordinasi, dan workshop yang dimiliki CV Karya Indah untuk mendukung kesiapan produksi dan operasional setiap proyek."
    >
      <RevealStagger as="div" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" stagger={60}>
        {workspaces.map((space, index) => (
          <div
            key={space}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-[0.8rem] font-bold text-[var(--color-primary-700)]">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h3 className="font-bold text-[1.05rem] leading-snug text-gray-900">{space}</h3>
          </div>
        ))}
      </RevealStagger>
    </SectionShell>
  )
}

