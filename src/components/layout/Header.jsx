export default function Header({
  isOpen,
  navItems,
  currentPath,
  onNavigate,
  onToggle,
  onClose,
}) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[color:rgba(24,35,44,0.62)] shadow-[0_18px_42px_rgba(72,155,214,0.22)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="/beranda"
          className="flex items-center"
          onClick={(event) => onNavigate(event, '/beranda')}
        >
          <img src="/logo2.png" alt="Logo CV Karya Indah" className="h-10 w-auto brightness-110 contrast-105 sm:h-20 lg:h-14" />
        </a>

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => onNavigate(event, item.href)}
              className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition ${
                currentPath === item.href
                  ? 'bg-white/14 text-white shadow-[0_8px_20px_rgba(72,155,214,0.18)]'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggle}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm backdrop-blur md:hidden"
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{isOpen ? 'x' : '='}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[color:rgba(24,35,44,0.92)] md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => onNavigate(event, item.href)}
                className={`block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
                  currentPath === item.href
                    ? 'bg-white/12 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
