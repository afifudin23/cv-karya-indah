import { useEffect, useLayoutEffect, useRef } from 'react';

export default function Header({ isOpen, navItems, currentPath, onNavigate, onToggle, onClose }) {
    const headerBarRef = useRef(null);
    const navRef = useRef(null);

    useLayoutEffect(() => {
        const element = headerBarRef.current;
        if (!element) return undefined;

        const applyHeight = () => {
            document.documentElement.style.setProperty('--header-height', `${element.offsetHeight}px`);
        };

        applyHeight();

        if (typeof ResizeObserver !== 'undefined') {
            const observer = new ResizeObserver(() => applyHeight());
            observer.observe(element);
            return () => observer.disconnect();
        }

        window.addEventListener('resize', applyHeight);
        return () => window.removeEventListener('resize', applyHeight);
    }, []);

    useEffect(() => {
        if (!isOpen) return undefined;

        const handlePointerDown = (event) => {
            if (!navRef.current) return;
            if (navRef.current.contains(event.target)) return;
            onClose?.();
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose?.();
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <nav ref={navRef} className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
            <div ref={headerBarRef} className="w-full border-b border-gray-100">
                <div className="mx-auto flex w-full max-w-[min(96vw,1600px)] items-center justify-between px-4 py-3 min-[960px]:px-6 min-[960px]:py-3.5">
                    {/* Logo */}
                    <a
                        href="/beranda"
                        className="flex min-w-0 items-center gap-3"
                        onClick={(e) => onNavigate(e, '/beranda')}
                    >
                        <img src="/logo.svg" alt="Logo CV Karya Indah" className="h-14 w-auto shrink-0" />
                        <div className="leading-none">
                            <span className="block text-[0.98rem] font-bold uppercase tracking-wide text-gray-900">
                                CV. Karya Indah
                            </span>
                            <span className="block text-[0.68rem] font-medium tracking-wide text-gray-400">
                                Jasa Periklanan & Konstruksi
                            </span>
                        </div>
                    </a>

                    {/* Desktop nav */}
                    <div className="ml-auto hidden items-center gap-0.5 min-[960px]:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => onNavigate(e, item.href)}
                                className={`rounded-lg px-4 py-2 text-[0.88rem] font-medium transition duration-200 ${
                                    currentPath === item.href
                                        ? 'bg-[rgba(0,194,255,0.08)] text-[var(--color-primary-700)]'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}

                        <a
                            href="https://wa.me/6282258661996?text=Halo%20CV%20Karya%20Indah%2C%20saya%20ingin%20berkonsultasi."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary ml-4 text-[0.88rem]"
                        >
                            Hubungi Kami
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button
                        type="button"
                        onClick={onToggle}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-50 active:scale-95 min-[960px]:hidden"
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                        aria-controls="mobile-nav"
                    >
                        <span className="relative block h-4 w-5">
                            <span
                                className={`absolute left-0 top-[1px] block h-0.5 w-5 rounded-full bg-gray-700 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                    isOpen ? 'translate-y-[6px] rotate-45' : ''
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-gray-700 transition-opacity duration-300 ${
                                    isOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-[13px] block h-0.5 w-5 rounded-full bg-gray-700 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                    isOpen ? '-translate-y-[6px] -rotate-45' : ''
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            <div
                id="mobile-nav"
                aria-hidden={!isOpen}
                className={`overflow-hidden bg-white border-t border-gray-100 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] min-[960px]:hidden ${
                    isOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div
                    className={`space-y-1 px-4 py-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? 'translate-y-0' : '-translate-y-2'
                    }`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => onNavigate(e, item.href)}
                            className={`block rounded-xl px-4 py-2.5 text-[0.9rem] font-medium transition duration-200 ${
                                currentPath === item.href
                                    ? 'bg-[rgba(0,194,255,0.08)] text-[var(--color-primary-700)]'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}

                    <div className="pt-2 pb-1">
                        <a
                            href="https://wa.me/6282258661996?text=Halo%20CV%20Karya%20Indah%2C%20saya%20ingin%20berkonsultasi."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary flex w-full justify-center"
                        >
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
