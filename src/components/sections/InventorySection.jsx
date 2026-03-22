import BulletRow from '../ui/BulletRow'
import InfoPanel from '../ui/InfoPanel'
import SectionShell from '../ui/SectionShell'

export default function InventorySection({ inventories }) {
  return (
    <SectionShell
      tone="muted"
      eyebrow="Inventaris"
      title="Mesin & Kendaraan"
      intro="PDF menampilkan inventaris mesin dan kendaraan sebagai bagian penting company profile, jadi aku pertahankan sebagai section terpisah."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <InfoPanel title="Inventaris Mesin">
          {inventories.machines.map((item) => (
            <BulletRow key={item} value={item} />
          ))}
        </InfoPanel>
        <InfoPanel title="Inventaris Kendaraan">
          {inventories.vehicles.map((item) => (
            <BulletRow key={item} value={item} />
          ))}
        </InfoPanel>
      </div>
    </SectionShell>
  )
}
