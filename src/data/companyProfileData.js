export const companyData = {
  name: 'CV. KARYA INDAH',
  tagline: 'Jasa Periklanan & Konstruksi',
  slogan: 'One Stop Advertising',
  description:
    'CV KARYA INDAH adalah perusahaan yang bergerak dalam bidang Jasa Periklanan dan Konstruksi. Bermula dari percetakan sablon (screen printing) pada akhir dekade 80. Kami tercatat berdiri secara sah di Notaris pada tanggal 11 Desember 1992.',
  descriptionLong:
    'Perusahaan kami memproduksi dan menerima jasa segala jenis Exterior goods (reklame, shopsign, fasad toko, neonbox, letter timbul, billboard, booth dll) dan Interior goods (backwall, display, acrylic, meja, kursi dll) dengan jenis bahan yang berkualitas dan berusaha memperhatikan keinginan calon konsumen semaksimal mungkin. Hingga saat ini CV Karya Indah terus berkembang menjadi perusahaan yang mapan dibidangnya.',
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

export const navItems = [
  { label: 'Beranda', href: '/beranda' },
  { label: 'Profil', href: '/profil' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Produksi', href: '/produksi' },
  { label: 'Pelanggan', href: '/pelanggan' },
  { label: 'Kontak', href: '/kontak' },
]

export const servicesData = [
  {
    title: 'Exterior Goods',
    description:
      'Menyediakan berbagai kebutuhan media promosi outdoor seperti signage, billboard, neon box, dan elemen visual eksterior lainnya untuk memperkuat identitas bisnis.',
    items: [
      'Reklame',
      'Shop sign',
      'Fasad toko',
      'Neon box',
      'Letter timbul',
      'Billboard',
      'Booth & pylon',
    ],
    icon: 'billboard',
    image:
      'https://unsplash.com/photos/XyQrfarM_VA/download?force=true&w=1400',
    imageAlt: 'Storefront facade with exterior signage',
    highlight:
      'Cocok untuk meningkatkan visibilitas bisnis di area outdoor.',
    cta: 'Konsultasi sekarang',
  },
  {
    title: 'Interior Goods',
    description:
      'Menyediakan kebutuhan branding dan display interior yang mendukung tampilan ruang usaha agar lebih rapi, menarik, dan profesional.',
    items: [
      'Backwall',
      'Display',
      'Acrylic',
      'Meja & kursi',
      'Showroom interior',
      'Branding indoor',
    ],
    icon: 'interior',
    image:
      'https://unsplash.com/photos/W0POSa8LjBk/download?force=true&w=1400',
    imageAlt: 'Modern retail interior with display lighting',
    highlight:
      'Membantu menciptakan tampilan interior yang representatif dan berkelas.',
    cta: 'Hubungi kami',
  },
  {
    title: 'Digital Printing',
    description:
      'Melayani kebutuhan digital printing indoor dan outdoor untuk berbagai media promosi dengan hasil cetak yang rapi dan berkualitas.',
    items: [
      'Printing indoor & outdoor',
      'Banner & spanduk',
      'Sticker & cutting',
      'Screen printing',
      'Media promosi',
    ],
    icon: 'printer',
    image:
      'https://unsplash.com/photos/O1U-YfX7XQA/download?force=true&w=1400',
    imageAlt: 'Printing press machine inside a workshop',
    highlight:
      'Hasil cetak tajam, cepat, dan sesuai kebutuhan promosi bisnis.',
    cta: 'Lihat detail layanan',
  },
  {
    title: 'Konstruksi',
    description:
      'Menyediakan layanan konstruksi pendukung media promosi dan visual branding, mulai dari rangka hingga instalasi lapangan.',
    items: [
      'Struktur billboard',
      'Baja ringan',
      'Rangka signage',
      'Instalasi branding',
      'Pekerjaan sipil ringan',
    ],
    icon: 'tools',
    image:
      'https://unsplash.com/photos/PYBm7NBl6mA/download?force=true&w=1400',
    imageAlt: 'Construction workers on a building site with crane',
    highlight:
      'Dikerjakan dengan perencanaan yang rapi dan material yang sesuai kebutuhan proyek.',
    cta: 'Hubungi tim kami',
  },
]

export const portfolioGroups = [
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

export const workspaces = [
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

export const inventories = {
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

export const clients = [
  {
    name: 'PT. YAMAHA INDONESIA MOTOR MANUFACTURING',
    address:
      'Jl. DR. KRT Radjiman Widyodiningrat (Jl. Raya Bekasi Km. 23) Pulogadung, Jakarta Timur 13920',
  },
  {
    name: 'PT. AKUR PRATAMA',
    address:
      'Jl. Terusan Buah Batu No. 12, Batununggal, Kec. Bandung Kidul, Kota Bandung, Jawa Barat 40266',
  },
  {
    name: 'PT. SAYAP MAS UTAMA',
    address:
      'Kawasan Perluasan Utara PT. JIEP Jl. Tipar Cakung Kav F 5-7 Jakarta 13910',
  },
  {
    name: 'PT. TONG TJI TEA INDONESIA',
    address: 'Jl. Raya Tegal-Pemalang Padaharja-Tegal',
  },
]

export const reviews = [
  'Penilaian pelanggan diambil dari Google Review dan menjadi masukan penting untuk peningkatan layanan.',
  'Kami menjaga hubungan jangka panjang dengan klien melalui kualitas hasil, ketepatan pengerjaan, dan komunikasi yang responsif.',
]

export const heroImage =
  'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80'
