export default function Header({ isOpen, navItems, onToggle, onClose }) {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[color:rgba(24,35,44,0.62)] shadow-[0_18px_40px_rgba(8,16,24,0.24)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#beranda" className="flex items-center">
          <img src="/logo2.png" alt="Logo CV Karya Indah" className="h-10 w-auto brightness-110 contrast-105 sm:h-20 lg:h-14" />
        </a>

        <div className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:bg-white/10 hover:text-white"
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
                onClick={onClose}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 transition hover:bg-white/10 hover:text-white"
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
