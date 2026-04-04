export default function ContactItem({ label, value }) {
    return (
        <div className="border-b border-[rgba(15,23,42,0.1)] py-4 last:border-b-0 sm:rounded-[1.25rem] sm:border sm:border-white/10 sm:bg-white/8 sm:px-4 sm:py-4 sm:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <p className="label-size uppercase tracking-[0.28em] text-[var(--color-primary-700)] sm:text-cyan-100/82">{label}</p>
            <p className="mt-2 text-[0.98rem] leading-7 text-slate-700 sm:text-lg sm:text-white">{value}</p>
        </div>
    );
}
