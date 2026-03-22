export default function Footer({ companyData, navItems }) {
  return (
    <footer className="border-t border-white/10 bg-[var(--hero)] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="mb-3 text-sm uppercase tracking-[0.34em] text-[var(--teal)]">
            CV. Karya Indah
          </p>
          <h3 className="font-display text-3xl uppercase text-white">
            Jasa Periklanan & Konstruksi
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/68">
            One Stop Advertising untuk kebutuhan branding, signage, interior,
            dan konstruksi dengan fokus pada mutu pekerjaan serta kecepatan
            layanan.
          </p>
        </div>

        <div className="grid gap-6 text-sm text-white/72 sm:grid-cols-2 lg:text-right">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/45">Kontak</p>
            <p>{companyData.address}</p>
            <p>{companyData.phones.join(' / ')}</p>
            <p>{companyData.email}</p>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/45">Navigasi</p>
            <div className="space-y-1">
              {navItems.map((item) => (
                <p key={item.href}>{item.label}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} CV. Karya Indah</p>
        <p>Company Profile Website</p>
      </div>
    </footer>
  )
}
