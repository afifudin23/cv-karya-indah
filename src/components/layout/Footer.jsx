export default function Footer({ companyData, navItems, onNavigate }) {
  const services = ['Exterior Goods', 'Interior Goods', 'Digital Printing', 'Konstruksi']

  return (
    <footer className="bg-[var(--color-primary-800)] px-4 pt-14 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="Logo CV Karya Indah" className="h-14 w-auto brightness-0 invert" />
              <div className="leading-none">
                <p className="font-bold text-white text-[0.95rem] uppercase tracking-wide">CV. Karya Indah</p>
                <p className="text-[0.65rem] text-[var(--color-primary-300)] tracking-wide mt-0.5">Jasa Periklanan & Konstruksi</p>
              </div>
            </div>
            <p className="text-[var(--color-primary-200)] text-[0.9rem] leading-7 max-w-xs">
              One Stop Advertising untuk kebutuhan branding, signage, interior, dan konstruksi visual dengan fokus pada mutu dan kecepatan layanan.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-400)] mb-4">Layanan</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-[0.9rem] text-[var(--color-primary-100)]">{s}</li>
              ))}
            </ul>
          </div>

          {/* Navigasi */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-400)] mb-4">Navigasi</p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => onNavigate(e, item.href)}
                    className="text-[0.9rem] text-[var(--color-primary-100)] transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-400)] mb-4">Kontak</p>
            <ul className="space-y-3 text-[0.9rem] text-[var(--color-primary-100)]">
              <li className="leading-6">{companyData.address}</li>
              <li>{companyData.phones.join(' / ')}</li>
              <li>{companyData.email}</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-primary-700)] flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--color-primary-400)]">
          <p>Copyright {new Date().getFullYear()} CV. Karya Indah</p>
          <p>Company Profile Website</p>
        </div>
      </div>
    </footer>
  )
}
