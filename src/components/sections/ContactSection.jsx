import ContactItem from '../ui/ContactItem'
import InfoPanel from '../ui/InfoPanel'
import InfoRow from '../ui/InfoRow'
import SectionShell from '../ui/SectionShell'

export default function ContactSection({ companyData }) {
  return (
    <SectionShell
      id="kontak"
      eyebrow="Kontak"
      title="Hubungi Kami"
      intro="Bagian penutup dibuat lebih tegas supaya tetap berfungsi seperti halaman profil perusahaan sekaligus landing page bisnis."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] bg-[var(--hero)] p-8 text-white">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[var(--teal)]">
            Contact Detail
          </p>
          <h3 className="font-display text-4xl uppercase">CV. Karya Indah</h3>
          <p className="mt-4 max-w-xl leading-8 text-slate-300">
            Siap membantu kebutuhan jasa periklanan, interior, eksterior,
            konstruksi visual, dan digital printing untuk bisnis maupun
            institusi.
          </p>
          <div className="mt-8 space-y-5 text-slate-200">
            <ContactItem label="Alamat" value={companyData.address} />
            <ContactItem label="Telepon" value={companyData.phones.join(' / ')} />
            <ContactItem label="Email" value={companyData.email} />
          </div>
        </div>

        <InfoPanel title="Informasi Bank">
          <InfoRow label="Bank" value={companyData.bank.name} />
          <InfoRow label="Nomor Rekening" value={companyData.bank.account} />
          <InfoRow label="Atas Nama" value={companyData.bank.holder} />
        </InfoPanel>
      </div>
    </SectionShell>
  )
}
