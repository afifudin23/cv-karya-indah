import StatCard from '../ui/StatCard'

export default function HeroSection({ companyData, heroImage }) {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="relative min-h-screen overflow-hidden">
        <img
          src={heroImage}
          alt="Gedung modern untuk cover company profile"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,12,16,0.22),rgba(5,12,16,0.52))]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="/logo1.png"
              alt="Logo CV Karya Indah"
              className="w-full max-w-[150px] drop-shadow-[0_18px_40px_rgba(0,0,0,0.32)] sm:max-w-[180px] lg:max-w-[220px]"
            />
            <div className="mt-6 rounded-[1.8rem] bg-white/92 px-6 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-8">
              <h1 className="font-display text-3xl uppercase leading-none text-white sm:text-4xl lg:text-[4rem]">
                {companyData.name}
              </h1>
              <div className="mx-auto my-4 h-[4px] w-full max-w-[520px] bg-[var(--teal)]" />
              <p className="text-base text-white sm:text-lg lg:text-[2rem]">
                {companyData.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[linear-gradient(180deg,#fbfaf8,#f3efe9)] p-5 shadow-[0_18px_48px_rgba(6,18,24,0.08)] sm:p-6 lg:p-7">
          <div className="grid gap-5 text-sm text-slate-600 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard title="Berdiri Resmi" value="11 Des 1992" />
            <StatCard title="Bidang Usaha" value={companyData.businessType} />
            <StatCard title="Direktur" value={companyData.director} />
            <StatCard title="Lokasi" value="Kota Tegal" />
          </div>
        </div>
      </div>
    </section>
  )
}
