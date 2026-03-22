export default function ProfileSection({ companyData }) {
  const profileHighlights = [
    { label: 'Berdiri Resmi', value: '11 Desember 1992' },
    { label: 'Direktur', value: companyData.director },
    { label: 'Lokasi', value: 'Kota Tegal' },
    { label: 'Legalitas', value: `${companyData.legalities.length} Dokumen` },
  ]

  return (
    <section
      id="profil"
      className="border-y border-black/5 bg-[radial-gradient(circle_at_top,#f7fbfd_0%,#f7f4ef_42%,#f5f1ea_100%)] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-16 rounded-full bg-[var(--teal)]" />
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--teal-deep)]">
                Company Overview
              </p>
            </div>

            <h2 className="mt-6 font-display text-[3rem] uppercase leading-[0.9] text-[var(--ink-strong)] sm:text-[4.4rem] lg:text-[5.8rem]">
              General
              <br />
              Information
            </h2>

            <div className="mt-7 h-px w-28 bg-[linear-gradient(90deg,rgba(88,182,197,0),rgba(88,182,197,0.9),rgba(88,182,197,0))]" />
          </div>

          <div className="space-y-8 text-slate-700 lg:pt-20">
            <p className="text-justify text-lg leading-9 sm:text-[1.3rem] sm:leading-10">
              {companyData.description}
            </p>
            <p className="text-justify text-lg leading-9 sm:text-[1.3rem] sm:leading-10">
              {companyData.descriptionLong}
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {profileHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.9rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,249,252,0.98))] px-6 py-6 shadow-[0_22px_48px_rgba(72,155,214,0.1)]"
            >
              <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--teal-deep)]">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-semibold leading-tight text-[var(--ink-strong)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.06fr_0.94fr]">
          <div className="space-y-6">
            <div className="rounded-[2.2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(244,249,252,0.95))] p-8 shadow-[0_24px_56px_rgba(72,155,214,0.12)] sm:p-9">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-16 rounded-full bg-[var(--teal)]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                  Visi Perusahaan
                </p>
              </div>
              <p className="text-lg leading-9 text-slate-700">{companyData.vision}</p>
            </div>

            <div className="rounded-[2.2rem] border border-[rgba(72,155,214,0.16)] bg-[linear-gradient(180deg,rgba(231,246,252,0.88),rgba(255,255,255,0.95))] p-8 shadow-[0_24px_56px_rgba(72,155,214,0.1)] sm:p-9">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-14 rounded-full bg-[var(--teal)]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                  Misi Perusahaan
                </p>
              </div>
              <p className="text-justify text-lg leading-9 text-slate-700">
                {companyData.mission}
              </p>
            </div>

            <div className="rounded-[2.2rem] border border-[rgba(72,155,214,0.16)] bg-[linear-gradient(180deg,rgba(232,247,252,0.9),rgba(255,255,255,0.96))] p-8 shadow-[0_24px_56px_rgba(72,155,214,0.1)] sm:p-9">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-14 rounded-full bg-[var(--teal)]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                  Kebijakan K3
                </p>
              </div>
              <p className="text-justify leading-8 text-slate-700">
                Keselamatan dan kesehatan kerja merupakan prioritas utama di CV
                Karya Indah. Kami berkomitmen menciptakan lingkungan kerja yang
                aman dan sehat bagi seluruh karyawan, pelanggan, dan mitra
                kerja melalui penerapan prosedur K3 yang disiplin, konsisten,
                dan bertanggung jawab.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2.2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,250,253,0.96))] p-8 shadow-[0_24px_56px_rgba(72,155,214,0.12)]">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-[3px] w-14 rounded-full bg-[var(--teal)]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                  Data Perusahaan
                </p>
              </div>
              <div className="space-y-3">
                <div className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                  <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">Nama Perusahaan</span>
                  <span className="text-sm leading-6 text-slate-700">{companyData.name}</span>
                </div>
                <div className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                  <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">Direktur</span>
                  <span className="text-sm leading-6 text-slate-700">{companyData.director}</span>
                </div>
                <div className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                  <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">Alamat</span>
                  <span className="text-sm leading-6 text-slate-700">{companyData.address}</span>
                </div>
                <div className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                  <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">No. Telp</span>
                  <span className="text-sm leading-6 text-slate-700">{companyData.phones.join(', ')}</span>
                </div>
                <div className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                  <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">E-mail</span>
                  <span className="text-sm leading-6 text-slate-700">{companyData.email}</span>
                </div>
                <div className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                  <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">Jenis Usaha</span>
                  <span className="text-sm leading-6 text-slate-700">{companyData.businessType}</span>
                </div>
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,250,253,0.96))] p-8 shadow-[0_24px_56px_rgba(72,155,214,0.12)]">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-[3px] w-14 rounded-full bg-[var(--teal)]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                  Legalitas Perusahaan
                </p>
              </div>
              <div className="space-y-3">
                {companyData.legalities.map((item) => (
                  <div key={item.label} className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                    <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">{item.label}</span>
                    <span className="text-sm leading-6 text-slate-700">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,250,253,0.96))] p-8 shadow-[0_24px_56px_rgba(72,155,214,0.12)]">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-[3px] w-14 rounded-full bg-[var(--teal)]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                  Informasi Bank
                </p>
              </div>
              <div className="space-y-3">
                <div className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                  <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">Bank</span>
                  <span className="text-sm leading-6 text-slate-700">{companyData.bank.name}</span>
                </div>
                <div className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                  <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">No. Rekening</span>
                  <span className="text-sm leading-6 text-slate-700">{companyData.bank.account}</span>
                </div>
                <div className="grid gap-3 rounded-[1.25rem] border border-slate-100/90 bg-white/75 px-4 py-4 sm:grid-cols-[0.4fr_0.6fr]">
                  <span className="inline-flex w-fit rounded-full bg-[rgba(72,155,214,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--teal-deep)]">Atas Nama</span>
                  <span className="text-sm leading-6 text-slate-700">{companyData.bank.holder}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
