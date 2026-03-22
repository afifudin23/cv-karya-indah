import HighlightCard from '../ui/HighlightCard'
import InfoPanel from '../ui/InfoPanel'
import InfoRow from '../ui/InfoRow'
import SectionShell from '../ui/SectionShell'

export default function ProfileSection({ companyData }) {
  return (
    <SectionShell
      id="profil"
      tone="light"
      eyebrow="Company Profile"
      title="General Information"
      intro="Konten utama mengikuti company profile PDF: general information, data perusahaan, visi misi, legalitas, kebijakan K3, hasil produksi, office & workshop, inventaris, dan bukti pelanggan."
    >
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(5,20,27,0.06)]">
          <p className="text-lg leading-8 text-slate-700">{companyData.description}</p>
          <p className="leading-8 text-slate-600">{companyData.descriptionLong}</p>

          <div className="grid gap-5 md:grid-cols-2">
            <HighlightCard title="Visi" accent="teal">
              {companyData.vision}
            </HighlightCard>
            <HighlightCard title="Misi" accent="ink">
              {companyData.mission}
            </HighlightCard>
          </div>

          <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel-soft)] p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
              Kebijakan K3
            </p>
            <p className="leading-8 text-slate-700">
              Keselamatan dan kesehatan kerja merupakan prioritas utama di CV
              Karya Indah. Kami berkomitmen menciptakan lingkungan kerja yang
              aman dan sehat bagi seluruh karyawan, pelanggan, dan mitra kerja
              dengan penerapan prosedur K3 yang ketat dan konsisten.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <InfoPanel title="Data Perusahaan">
            <InfoRow label="Nama Perusahaan" value={companyData.name} />
            <InfoRow label="Direktur" value={companyData.director} />
            <InfoRow label="Alamat" value={companyData.address} />
            <InfoRow label="No. Telp" value={companyData.phones.join(', ')} />
            <InfoRow label="E-mail" value={companyData.email} />
            <InfoRow label="Jenis Usaha" value={companyData.businessType} />
          </InfoPanel>

          <InfoPanel title="Legalitas Perusahaan">
            {companyData.legalities.map((item) => (
              <InfoRow key={item.label} label={item.label} value={item.value} />
            ))}
          </InfoPanel>

          <InfoPanel title="Bank">
            <InfoRow label="Bank" value={companyData.bank.name} />
            <InfoRow label="AC" value={companyData.bank.account} />
            <InfoRow label="AN" value={companyData.bank.holder} />
          </InfoPanel>
        </div>
      </div>
    </SectionShell>
  )
}
