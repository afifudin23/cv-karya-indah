import { useEffect, useLayoutEffect, useRef } from "react";

export default function Header({ isOpen, navItems, currentPath, onNavigate, onToggle, onClose }) {
    const headerBarRef = useRef(null);
    const navRef = useRef(null);

    useLayoutEffect(() => {
        const element = headerBarRef.current;
        if (!element) return undefined;

        const applyHeight = () => {
            document.documentElement.style.setProperty("--header-height", `${element.offsetHeight}px`);
        };

        applyHeight();

        if (typeof ResizeObserver !== "undefined") {
            const observer = new ResizeObserver(() => applyHeight());
            observer.observe(element);
            return () => observer.disconnect();
        }

        window.addEventListener("resize", applyHeight);
        return () => window.removeEventListener("resize", applyHeight);
    }, []);

    useEffect(() => {
        if (!isOpen) return undefined;

        const handlePointerDown = (event) => {
            if (!navRef.current) return;
            if (navRef.current.contains(event.target)) return;
            onClose?.();
        };

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose?.();
            }
        };

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <nav
            ref={navRef}
            className="fixed inset-x-0 top-0 z-50 bg-[linear-gradient(180deg,rgba(11,30,45,0.88),rgba(15,23,42,0.84))] shadow-[0_18px_42px_rgba(0,194,255,0.14)] backdrop-blur-xl"
        >
            <div
                ref={headerBarRef}
                className="w-full border-b border-[rgba(125,223,255,0.14)]"
            >
                <div className="mx-auto flex w-full max-w-[min(96vw,1600px)] items-center justify-between px-3 py-2.5 min-[960px]:px-5 min-[960px]:py-3 lg:px-6">
                <a
                    href="/beranda"
                    className="flex min-w-0 items-center gap-3"
                    onClick={(event) => onNavigate(event, "/beranda")}
                >
                    <img
                        src="/logoku1.png"
                        alt="Logo CV Karya Indah"
                        className="h-10 w-auto shrink-0 brightness-110 contrast-105"
                    />
                    <span className="whitespace-nowrap text-lg font-bold uppercase leading-none tracking-wide text-white">
                        CV. Karya Indah
                    </span>
                </a>

                <div className="ml-auto hidden items-center gap-3 min-[960px]:flex min-[960px]:gap-0">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(event) => onNavigate(event, item.href)}
                            className={`rounded-full px-3.5 py-1.5 text-[0.86rem] font-semibold uppercase tracking-[0.1em] transition  ${
                                currentPath === item.href
                                    ? "border border-[rgba(125,223,255,0.18)] bg-[linear-gradient(180deg,rgba(0,194,255,0.16),rgba(30,144,255,0.12))] text-white shadow-[0_8px_22px_rgba(0,194,255,0.16)]"
                                    : "text-white/80 hover:bg-white/8 hover:text-white"
                            }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={onToggle}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(125,223,255,0.16)] bg-white/8 text-white shadow-sm backdrop-blur transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/12 active:scale-[0.98] min-[960px]:hidden"
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
            </div>

            <div
                id="mobile-nav"
                aria-hidden={!isOpen}
                className={`min-[960px]:hidden overflow-hidden border-t border-[rgba(125,223,255,0.12)] bg-[linear-gradient(180deg,rgba(11,30,45,0.96),rgba(15,23,42,0.95))] transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                    isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div
                    className={`space-y-0.5 px-4 py-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                        isOpen ? "translate-y-0" : "-translate-y-2"
                    }`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(event) => onNavigate(event, item.href)}
                            className={`block rounded-xl px-3.5 py-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.1em] transition ${
                                currentPath === item.href
                                    ? "border border-[rgba(125,223,255,0.14)] bg-[linear-gradient(180deg,rgba(0,194,255,0.16),rgba(30,144,255,0.12))] text-white"
                                    : "text-white/80 hover:bg-white/8 hover:text-white"
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
