function handleGlowMove(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--glow-x', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--glow-y', `${event.clientY - rect.top}px`)
  event.currentTarget.style.setProperty('--glow-opacity', '1')
}

function handleGlowLeave(event) {
  event.currentTarget.style.setProperty('--glow-opacity', '0')
}

export default function Footer({ companyData, navItems, onNavigate }) {
  return (
    <footer
      onMouseMove={handleGlowMove}
      onMouseLeave={handleGlowLeave}
      style={{
        '--glow-x': '50%',
        '--glow-y': '50%',
        '--glow-opacity': '0',
      }}
      className="relative overflow-hidden border-t border-[rgba(125,223,255,0.14)] bg-[linear-gradient(180deg,#0b1e2d_0%,#0f172a_100%)] px-4 py-10 text-white sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[var(--glow-opacity)] transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(260px circle at var(--glow-x) var(--glow-y), rgba(255,255,255,0.14), rgba(255,255,255,0.07) 24%, rgba(255,255,255,0.025) 46%, rgba(255,255,255,0) 72%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.52),rgba(255,255,255,0))',
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="label-size mb-3 uppercase tracking-[0.34em] text-[var(--color-primary-400)]">
            CV. Karya Indah
          </p>
          <h3 className="font-display text-3xl uppercase text-white">
            Jasa Periklanan & Konstruksi
          </h3>
          <p className="descriptive-copy mt-4 text-sm leading-7 text-[var(--color-text-on-dark-muted)]">
            One Stop Advertising untuk kebutuhan branding, signage, interior,
            dan konstruksi dengan fokus pada mutu pekerjaan serta kecepatan
            layanan.
          </p>
        </div>

        <div className="grid gap-6 text-sm text-[var(--color-text-on-dark-muted)] sm:grid-cols-2 lg:text-right">
          <div>
            <p className="label-size mb-2 uppercase tracking-[0.3em] text-white/45">Kontak</p>
            <p>{companyData.address}</p>
            <p>{companyData.phones.join(' / ')}</p>
            <p>{companyData.email}</p>
          </div>
          <div>
            <p className="label-size mb-2 uppercase tracking-[0.3em] text-white/45">Navigasi</p>
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => onNavigate(event, item.href)}
                  className="block transition hover:text-[var(--color-primary-300)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-[rgba(125,223,255,0.12)] pt-6 text-xs uppercase tracking-[0.22em] text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} CV. Karya Indah</p>
        <p>Company Profile Website</p>
      </div>
    </footer>
  )
}
