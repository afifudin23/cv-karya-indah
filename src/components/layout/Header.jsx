export default function Header({ isOpen, navItems, currentPath, onNavigate, onToggle }) {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[color:rgba(24,35,44,0.62)] shadow-[0_18px_42px_rgba(72,155,214,0.22)] backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <a href="/beranda" className="flex items-center" onClick={(event) => onNavigate(event, "/beranda")}>
                    <img
                        src="/logo2.png"
                        alt="Logo CV Karya Indah"
                        className="h-10 w-auto brightness-110 contrast-105 sm:h-20 lg:h-14"
                    />
                </a>

                <div className="hidden items-center gap-3 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(event) => onNavigate(event, item.href)}
                            className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] transition ${
                                currentPath === item.href
                                    ? "bg-white/14 text-white shadow-[0_8px_20px_rgba(72,155,214,0.18)]"
                                    : "text-white/80 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={onToggle}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-sm backdrop-blur transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/12 active:scale-[0.98] md:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    aria-controls="mobile-nav"
                >
                    <span className="relative block h-4 w-5">
                        <span
                            className={`absolute left-0 top-[1px] block h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                                isOpen ? "translate-y-[6px] rotate-45" : "translate-y-0 rotate-0"
                            }`}
                        />
                        <span
                            className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-white transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                                isOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`absolute left-0 top-[13px] block h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                                isOpen ? "-translate-y-[6px] -rotate-45" : "translate-y-0 rotate-0"
                            }`}
                        />
                    </span>
                </button>
            </div>

            <div
                id="mobile-nav"
                aria-hidden={!isOpen}
                className={`md:hidden overflow-hidden border-t border-white/10 bg-[color:rgba(24,35,44,0.92)] transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                    isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div
                    className={`space-y-1 px-4 py-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                        isOpen ? "translate-y-0" : "-translate-y-2"
                    }`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(event) => onNavigate(event, item.href)}
                            className={`block rounded-2xl px-4 py-2.5 text-[0.78rem] sm:py-3 sm:text-sm font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] transition ${
                                currentPath === item.href
                                    ? "bg-white/12 text-white"
                                    : "text-white/80 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
