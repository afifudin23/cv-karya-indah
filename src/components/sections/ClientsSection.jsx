import SectionShell from '../ui/SectionShell'

export default function ClientsSection({ clients }) {
  return (
    <SectionShell
      tone="muted"
      eyebrow="Pelanggan"
      title="Bukti Pelanggan"
      intro="Klien utama dari PDF ditampilkan ulang agar section referensi tetap sejalan dengan company profile yang kamu kirim."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {clients.map((client) => (
          <div
            key={client.name}
            className="rounded-[1.8rem] border border-black/5 bg-white p-6 shadow-[0_16px_35px_rgba(5,20,27,0.06)]"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
              Pelanggan
            </p>
            <h3 className="mb-3 font-display text-2xl uppercase text-[var(--ink-strong)]">
              {client.name}
            </h3>
            <p className="leading-7 text-slate-600">{client.address}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[1.8rem] bg-[var(--hero)] px-6 py-7 text-white">
        <p className="max-w-4xl leading-8 text-slate-200">
          Kami selalu berusaha membangun hubungan jangka panjang dengan setiap
          pelanggan dan terus meningkatkan layanan berdasarkan masukan mereka.
        </p>
      </div>
    </SectionShell>
  )
}
