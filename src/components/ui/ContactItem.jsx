export default function ContactItem({ label, value }) {
    return (
        <div className="rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <p className="label-size uppercase tracking-[0.28em] text-cyan-100/82">{label}</p>
            <p className="mt-2 text-lg text-white">{value}</p>
        </div>
    );
}
