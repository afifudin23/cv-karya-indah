import { useState } from 'react'

const companyData = {
  name: 'CV. KARYA INDAH',
  tagline: 'Jasa Periklanan & Konstruksi',
  slogan: 'One Stop Advertising',
  description:
    'CV KARYA INDAH adalah perusahaan yang bergerak dalam bidang jasa periklanan dan konstruksi. Bermula dari percetakan sablon pada akhir dekade 80 dan tercatat berdiri secara sah pada 11 Desember 1992.',
  descriptionLong:
    'Perusahaan kami memproduksi dan menerima jasa segala jenis exterior goods seperti reklame, shopsign, fasad toko, neonbox, letter timbul, billboard, booth, serta interior goods seperti backwall, display, acrylic, meja, kursi, dan berbagai kebutuhan branding ruang usaha. Kami menggunakan material berkualitas dan menjaga mutu pekerjaan serta kecepatan layanan untuk memberikan hasil terbaik kepada setiap klien.',
  address: 'Jl. Bali No. 33 Kota Tegal 52121',
  phones: ['(0283) 356838', '(0283) 358024'],
  email: 'karya.indah.tg@gmail.com',
  director: 'Sunarto Wijaya',
  vision: 'To Be One Stop Advertising Service',
  mission:
    'Memberikan kepuasan kepada klien melalui mutu dan kecepatan layanan.',
  businessType: 'Jasa Periklanan & Konstruksi',
  bank: {
    name: 'Bank Central Asia Cabang Tegal',
    account: '047-057-0008',
    holder: 'CV. Karya Indah',
  },
  legalities: [
    { label: 'Akta Pendirian', value: 'No. 48 Tanggal 11 Desember 1992' },
    { label: 'Tanda Daftar Perusahaan', value: '110452201203' },
    { label: 'NIB', value: '9120207830213' },
    {
      label: 'NPWP',
      value: '01-527-761-9-501-000 / 0015-2776-1950-1000',
    },
  ],
}

const services = [
  {
    title: 'Exterior Goods',
    desc: 'Reklame, shopsign, fasad toko, neonbox, letter timbul, billboard, booth, dan pylon.',
  },
  {
    title: 'Interior Goods',
    desc: 'Backwall, display, acrylic, meja, kursi, showroom interior, dan kebutuhan branding indoor.',
  },
  {
    title: 'Digital Printing',
    desc: 'Digital printing outdoor dan indoor, termasuk screen printing untuk berbagai kebutuhan promosi.',
  },
  {
    title: 'Konstruksi',
    desc: 'Konstruksi sarana billboard, baja ringan, struktur penunjang visual branding, dan pekerjaan pendukung lainnya.',
  },
]

const portfolioGroups = [
  {
    title: 'Hasil Produksi',
    items: [
      'Shopsign Yamaha',
      'Shopsign & Pylon Suzuki Mobil',
      'Fasad Shopsign Dealer Vespa',
      'Shopsign & Pylon Chery Dealer',
      'Logo Fasad Tong Tji',
      'Shopsign ACP Variasi',
      'Pylon Klinik Prodia',
      'Polesign BSI',
    ],
  },
  {
    title: 'Showroom & Interior',
    items: [
      'Stand Wings PRJ',
      'Showroom Yamaha',
      'Showroom Chery',
      'Rack Apparel Yamaha',
      'Backwall CSO Yogya Mall',
      'Stand Job Fair Wings',
      'Counter Kassa Yogya Mall',
      'Island Counter Yo! Active Yogya Mall',
    ],
  },
]

const workspaces = [
  'Tampak Depan KI',
  'Ruang Meeting',
  'Receptionist',
  'Ruang Admin',
  'Ruang Digital Printing',
  'Ruang Design',
  'Ruang Sablon',
  'Workshop',
  'Workshop Cat',
  'Workshop Kayu',
  'Workshop Las',
  'Workshop Kaca',
  'Gudang Material',
  'Gudang Barang Jadi',
]

const inventories = {
  machines: [
    'Mesin digital printing outdoor dan indoor',
    'Peralatan screen printing',
    'Mesin potong, finishing, dan peralatan produksi signage',
  ],
  vehicles: [
    'Kendaraan operasional pengiriman material dan hasil produksi',
    'Armada pendukung instalasi lapangan dan mobilisasi tim workshop',
  ],
}

const clients = [
  {
    name: 'PT. Yamaha Indonesia Motor Manufacturing',
    address:
      'Jl. DR. KRT Radjiman Widyodiningrat, Jl. Raya Bekasi Km. 23, Pulogadung, Jakarta Timur 13920',
  },
  {
    name: 'PT. Akur Pratama',
    address:
      'Jl. Terusan Buah Batu No. 12, Batununggal, Bandung Kidul, Kota Bandung, Jawa Barat 40266',
  },
  {
    name: 'PT. Sayap Mas Utama',
    address:
      'Kawasan Perluasan Utara PT. JIEP, Jl. Tipar Cakung Kav F 5-7, Jakarta 13910',
  },
  {
    name: 'PT. Tong Tji Tea Indonesia',
    address: 'Jl. Raya Tegal-Pemalang, Padaharja, Tegal',
  },
]

const reviews = [
  'Penilaian pelanggan diambil dari Google Review dan menjadi masukan penting untuk peningkatan layanan.',
  'Kami menjaga hubungan jangka panjang dengan klien melalui kualitas hasil, ketepatan pengerjaan, dan komunikasi yang responsif.',
]

const heroImage =
  'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Profil', href: '#profil' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Produksi', href: '#produksi' },
    { label: 'Kontak', href: '#kontak' },
  ]

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[color:rgba(245,244,240,0.94)] shadow-[0_10px_28px_rgba(12,21,28,0.07)] backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <a href="#beranda" className="flex items-center">
            <img src="/logo.png" alt="Logo CV Karya Indah" className="h-10 w-auto sm:h-11" />
          </a>

          <div className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-600 transition hover:bg-[var(--panel-soft)] hover:text-[var(--ink-strong)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink-strong)] shadow-sm md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="text-xl">{isOpen ? 'x' : '='}</span>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-black/5 bg-white/95 md:hidden">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 transition hover:bg-[var(--panel-soft)] hover:text-[var(--ink-strong)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        <section
          id="beranda"
          className="relative overflow-hidden bg-[var(--hero)] px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-36"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(89,174,184,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="absolute bottom-0 left-0 h-44 w-[65%] bg-[var(--teal)] clip-diagonal-left" />
          <div className="absolute bottom-0 right-0 h-36 w-[38%] bg-[var(--silver)] clip-diagonal-right" />

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="relative overflow-hidden rounded-[2.4rem] border border-black/10 bg-white shadow-[0_36px_80px_rgba(6,20,27,0.22)]">
              <img
                src={heroImage}
                alt="Gedung modern untuk cover company profile"
                className="h-[420px] w-full object-cover grayscale lg:h-[690px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(5,12,16,0.2)_68%,rgba(5,12,16,0.55))]" />
              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
                <img src="/logo.png" alt="Logo kecil" className="h-9 w-auto" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-slate-700">
                  Company Profile
                </span>
              </div>
              <div className="absolute bottom-8 left-6 right-6 sm:left-10 sm:right-10">
                <p className="mb-3 text-sm uppercase tracking-[0.42em] text-white/72">
                  Company Profile
                </p>
                <h1 className="font-display text-5xl uppercase leading-[0.9] text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
                  Company
                  <br />
                  Profile
                </h1>
              </div>
            </div>

            <div className="relative self-end rounded-[2.4rem] bg-white px-6 py-10 shadow-[0_26px_60px_rgba(8,23,31,0.14)] sm:px-10 lg:translate-y-16">
              <div className="mb-10 max-w-lg">
                <p className="mb-4 text-sm uppercase tracking-[0.36em] text-[var(--teal-deep)]">
                  {companyData.slogan}
                </p>
                <h2 className="font-display text-4xl uppercase leading-none text-[var(--ink-strong)] sm:text-5xl">
                  {companyData.name}
                </h2>
                <div className="my-5 h-[5px] w-full max-w-md bg-[var(--teal)]" />
                <p className="text-xl text-[var(--ink-strong)] sm:text-2xl">
                  {companyData.tagline}
                </p>
              </div>

              <div className="grid gap-5 text-sm text-slate-600 sm:grid-cols-2">
                <StatCard title="Berdiri Resmi" value="11 Des 1992" />
                <StatCard title="Bidang Usaha" value={companyData.businessType} />
                <StatCard title="Direktur" value={companyData.director} />
                <StatCard title="Lokasi" value="Kota Tegal" />
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          id="profil"
          eyebrow="Company Profile"
          title="General Information"
          intro="Konten utama mengikuti company profile PDF: general information, data perusahaan, visi misi, legalitas, kebijakan K3, hasil produksi, office & workshop, inventaris, dan bukti pelanggan."
        >
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-6 rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_40px_rgba(5,20,27,0.06)]">
              <p className="text-lg leading-8 text-slate-700">
                {companyData.description}
              </p>
              <p className="leading-8 text-slate-600">{companyData.descriptionLong}</p>

              <div className="grid gap-5 md:grid-cols-2">
                <HighlightCard title="Visi" accent="teal">
                  {companyData.vision}
                </HighlightCard>
                <HighlightCard title="Misi" accent="ink">
                  {companyData.mission}
                </HighlightCard>
              </div>

              <div className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--panel-soft)] p-6">
                <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                  Kebijakan K3
                </p>
                <p className="leading-8 text-slate-700">
                  Keselamatan dan kesehatan kerja merupakan prioritas utama di CV
                  Karya Indah. Kami berkomitmen menciptakan lingkungan kerja yang
                  aman dan sehat bagi seluruh karyawan, pelanggan, dan mitra kerja
                  dengan penerapan prosedur K3 yang ketat dan konsisten.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <InfoPanel title="Data Perusahaan">
                <InfoRow label="Nama Perusahaan" value={companyData.name} />
                <InfoRow label="Direktur" value={companyData.director} />
                <InfoRow label="Alamat" value={companyData.address} />
                <InfoRow label="No. Telp" value={companyData.phones.join(', ')} />
                <InfoRow label="E-mail" value={companyData.email} />
                <InfoRow label="Jenis Usaha" value={companyData.businessType} />
              </InfoPanel>

              <InfoPanel title="Legalitas Perusahaan">
                {companyData.legalities.map((item) => (
                  <InfoRow key={item.label} label={item.label} value={item.value} />
                ))}
              </InfoPanel>

              <InfoPanel title="Bank">
                <InfoRow label="Bank" value={companyData.bank.name} />
                <InfoRow label="AC" value={companyData.bank.account} />
                <InfoRow label="AN" value={companyData.bank.holder} />
              </InfoPanel>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="layanan"
          tone="dark"
          eyebrow="Layanan"
          title="One Stop Advertising"
          intro="Ruang lingkup layanan dirapikan supaya tetap sama dengan isi profil perusahaan, tetapi tampil lebih mudah dipindai dan terasa lebih premium."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[1.8rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[var(--teal)] hover:bg-white/8"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal)] text-sm font-bold uppercase tracking-[0.2em] text-white">
                  KI
                </div>
                <h3 className="mb-3 font-display text-2xl uppercase text-white">
                  {service.title}
                </h3>
                <p className="leading-7 text-slate-300">{service.desc}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="produksi"
          eyebrow="Portofolio"
          title="Hasil Produksi"
          intro="Daftar pekerjaan mengikuti item-item yang muncul di PDF, lalu disusun menjadi blok konten yang lebih rapi untuk web."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {portfolioGroups.map((group, groupIndex) => (
              <div
                key={group.title}
                className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_18px_40px_rgba(5,20,27,0.06)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={
                      groupIndex === 0
                        ? 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80'
                        : 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80'
                    }
                    alt={group.title}
                    className="h-full w-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,18,25,0.8),rgba(6,18,25,0.2))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="mb-2 text-xs uppercase tracking-[0.26em] text-[var(--teal)]">
                      CV. Karya Indah
                    </p>
                    <h3 className="font-display text-3xl uppercase text-white">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-3 p-6 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.2rem] border border-[var(--line)] bg-[var(--panel-soft)] px-4 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Office & Workshop"
          title="Fasilitas Kerja"
          intro="Bagian ini mengikuti daftar ruang dan workshop yang muncul di PDF, lalu dikemas sebagai grid informasi agar tetap ringan dilihat."
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {workspaces.map((space, index) => (
              <div
                key={space}
                className="rounded-[1.6rem] border border-black/5 bg-white p-5 shadow-[0_12px_30px_rgba(5,20,27,0.05)]"
              >
                <div className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--teal-deep)]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-2xl uppercase text-[var(--ink-strong)]">
                  {space}
                </h3>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          tone="muted"
          eyebrow="Inventaris"
          title="Mesin & Kendaraan"
          intro="PDF menampilkan inventaris mesin dan kendaraan sebagai bagian penting company profile, jadi aku pertahankan sebagai section terpisah."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <InfoPanel title="Inventaris Mesin">
              {inventories.machines.map((item) => (
                <BulletRow key={item} value={item} />
              ))}
            </InfoPanel>
            <InfoPanel title="Inventaris Kendaraan">
              {inventories.vehicles.map((item) => (
                <BulletRow key={item} value={item} />
              ))}
            </InfoPanel>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Pelanggan"
          title="Bukti Pelanggan"
          intro="Klien utama dari PDF ditampilkan ulang agar section referensi tetap sejalan dengan company profile yang kamu kirim."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {clients.map((client) => (
              <div
                key={client.name}
                className="rounded-[1.8rem] border border-black/5 bg-white p-6 shadow-[0_16px_35px_rgba(5,20,27,0.06)]"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
                  Pelanggan
                </p>
                <h3 className="mb-3 font-display text-2xl uppercase text-[var(--ink-strong)]">
                  {client.name}
                </h3>
                <p className="leading-7 text-slate-600">{client.address}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.8rem] bg-[var(--hero)] px-6 py-7 text-white">
            <p className="max-w-4xl leading-8 text-slate-200">
              Kami selalu berusaha membangun hubungan jangka panjang dengan setiap
              pelanggan dan terus meningkatkan layanan berdasarkan masukan mereka.
            </p>
          </div>
        </SectionShell>

        <SectionShell
          tone="dark"
          eyebrow="Review Pelanggan"
          title="Kepercayaan yang Dibangun"
          intro="Bagian review dibuat singkat sesuai PDF, dengan fokus pada trust dan kepuasan pelanggan."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {reviews.map((review, index) => (
              <blockquote
                key={index}
                className="rounded-[1.8rem] border border-white/10 bg-white/5 p-7 text-slate-200"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--teal)]">
                  Testimoni
                </p>
                <p className="text-lg leading-8">{review}</p>
              </blockquote>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="kontak"
          eyebrow="Kontak"
          title="Hubungi Kami"
          intro="Bagian penutup dibuat lebih tegas supaya tetap berfungsi seperti halaman profil perusahaan sekaligus landing page bisnis."
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] bg-[var(--hero)] p-8 text-white">
              <p className="mb-4 text-xs uppercase tracking-[0.32em] text-[var(--teal)]">
                Contact Detail
              </p>
              <h3 className="font-display text-4xl uppercase">CV. Karya Indah</h3>
              <p className="mt-4 max-w-xl leading-8 text-slate-300">
                Siap membantu kebutuhan jasa periklanan, interior, eksterior,
                konstruksi visual, dan digital printing untuk bisnis maupun
                institusi.
              </p>
              <div className="mt-8 space-y-5 text-slate-200">
                <ContactItem label="Alamat" value={companyData.address} />
                <ContactItem label="Telepon" value={companyData.phones.join(' / ')} />
                <ContactItem label="Email" value={companyData.email} />
              </div>
            </div>

            <InfoPanel title="Informasi Bank">
              <InfoRow label="Bank" value={companyData.bank.name} />
              <InfoRow label="Nomor Rekening" value={companyData.bank.account} />
              <InfoRow label="Atas Nama" value={companyData.bank.holder} />
            </InfoPanel>
          </div>
        </SectionShell>
      </main>

      <footer className="border-t border-white/10 bg-[var(--hero)] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-sm uppercase tracking-[0.34em] text-[var(--teal)]">
              CV. Karya Indah
            </p>
            <h3 className="font-display text-3xl uppercase text-white">
              Jasa Periklanan & Konstruksi
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/68">
              One Stop Advertising untuk kebutuhan branding, signage, interior,
              dan konstruksi dengan fokus pada mutu pekerjaan serta kecepatan
              layanan.
            </p>
          </div>

          <div className="grid gap-6 text-sm text-white/72 sm:grid-cols-2 lg:text-right">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/45">
                Kontak
              </p>
              <p>{companyData.address}</p>
              <p>{companyData.phones.join(' / ')}</p>
              <p>{companyData.email}</p>
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/45">
                Navigasi
              </p>
              <div className="space-y-1">
                {navItems.map((item) => (
                  <p key={item.href}>{item.label}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} CV. Karya Indah</p>
          <p>Company Profile Website</p>
        </div>
      </footer>
    </div>
  )
}

function SectionShell({ id, eyebrow, title, intro, tone = 'light', children }) {
  const sectionClass =
    tone === 'dark'
      ? 'bg-[var(--hero)] text-white'
      : tone === 'muted'
        ? 'bg-[var(--panel-soft)]'
        : 'bg-transparent'

  const eyebrowClass =
    tone === 'dark' ? 'text-[var(--teal)]' : 'text-[var(--teal-deep)]'

  const titleClass = tone === 'dark' ? 'text-white' : 'text-[var(--ink-strong)]'
  const introClass = tone === 'dark' ? 'text-slate-300' : 'text-slate-600'

  return (
    <section id={id} className={`px-4 py-20 sm:px-6 lg:px-8 ${sectionClass}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className={`mb-4 text-xs uppercase tracking-[0.34em] ${eyebrowClass}`}>
            {eyebrow}
          </p>
          <h2 className={`font-display text-4xl uppercase sm:text-5xl ${titleClass}`}>
            {title}
          </h2>
          <p className={`mt-5 max-w-2xl leading-8 ${introClass}`}>{intro}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-[1.4rem] border border-[var(--line)] bg-white px-5 py-5">
      <p className="text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
        {title}
      </p>
      <p className="mt-3 text-lg font-semibold text-slate-800">{value}</p>
    </div>
  )
}

function HighlightCard({ title, accent, children }) {
  const accentClass =
    accent === 'ink'
      ? 'border-[var(--ink)] bg-slate-950 text-white'
      : 'border-[var(--teal)] bg-[var(--panel-soft)] text-slate-800'

  return (
    <div className={`rounded-[1.5rem] border-l-4 p-6 ${accentClass}`}>
      <p className="mb-3 text-xs uppercase tracking-[0.3em]">{title}</p>
      <p className="text-lg leading-8">{children}</p>
    </div>
  )
}

function InfoPanel({ title, children }) {
  return (
    <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_16px_35px_rgba(5,20,27,0.06)]">
      <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">
        {title}
      </p>
      <div className="space-y-3">{children}</div>
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="grid gap-2 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[0.42fr_0.58fr]">
      <span className="text-sm uppercase tracking-[0.12em] text-slate-400">
        {label}
      </span>
      <span className="text-sm leading-6 text-slate-700">{value}</span>
    </div>
  )
}

function BulletRow({ value }) {
  return (
    <div className="flex gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--teal)]" />
      <p className="text-sm leading-7 text-slate-700">{value}</p>
    </div>
  )
}

function ContactItem({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.28em] text-[var(--teal)]">
        {label}
      </p>
      <p className="mt-2 text-lg text-white">{value}</p>
    </div>
  )
}
