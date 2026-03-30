function createSeriesItems({ images, ...shared }) {
  return images.map((image) => ({
    ...shared,
    image,
  }))
}

const baseProductionGallery = [
  {
    image: '/produksi/produksi.jpeg',
    title: 'Shopsign Yamaha',
    category: 'Exterior Branding',
    subtitle: 'Fasad dealer dengan identitas merek yang kuat',
    note:
      'Fasad dealer dengan branding besar dan penataan identitas visual yang tegas, rapi, dan langsung terbaca dari area depan bangunan.',
    meta: ['Branding fasad', 'Dealer otomotif', 'Visual besar'],
  },
  {
    image: '/produksi/produksi2.jpeg',
    title: 'Showroom Suzuki',
    category: 'Showroom Facade',
    subtitle: 'Finishing showroom dengan garis visual modern',
    note:
      'Finishing fasad showroom dengan garis bentuk modern, komposisi panel yang bersih, dan identitas merek yang tetap dominan.',
    meta: ['Showroom facade', 'Panel ACP', 'Brand clean'],
  },
  {
    image: '/produksi/produksi3.jpeg',
    title: 'Piaggio & Vespa',
    category: 'Night Signage',
    subtitle: 'Signage malam dengan nuansa premium',
    note:
      'Signage malam hari dengan fokus pada pencahayaan logo dan tampilan premium sehingga identitas brand tetap kuat saat malam.',
    meta: ['Night signage', 'Lighting logo', 'Premium look'],
  },
  {
    image: '/produksi/produksi4.jpeg',
    title: 'Dealer Chery',
    category: 'Polesign & Facade',
    subtitle: 'Kombinasi polesign dan fasad utama',
    note:
      'Kombinasi polesign dan fasad utama yang kuat untuk meningkatkan visibilitas merek dari jarak jauh, terutama pada malam hari.',
    meta: ['Polesign', 'Night visibility', 'Dealer branding'],
  },
  {
    image: '/produksi/produksi5.jpeg',
    title: 'Toko Obat Wali',
    category: 'Retail Front Sign',
    subtitle: 'Front signage retail yang mudah dikenali',
    note:
      'Front signage retail dengan komposisi tipografi besar dan fasad yang mencolok supaya toko mudah dikenali dari arah jalan utama.',
    meta: ['Retail sign', 'Tipografi besar', 'Street visibility'],
  },
  {
    image: '/produksi/produksi6.jpeg',
    title: 'Polesign BSI',
    category: 'Directional Sign',
    subtitle: 'Penanda lokasi dan petunjuk arah',
    note:
      'Contoh polesign yang berfungsi untuk identitas lokasi dan petunjuk arah dengan komposisi visual yang tetap bersih dan jelas.',
    meta: ['Directional sign', 'Outdoor sign', 'Lokasi & arah'],
  },
  {
    image: '/produksi/produksi7.jpeg',
    title: 'Premiere Hotel Tegal',
    category: 'Hospitality Polesign',
    subtitle: 'Polesign hotel yang tegas dan mudah dikenali',
    note:
      'Polesign area hotel yang dirancang untuk memperjelas identitas properti sekaligus membantu pengunjung menemukan akses masuk dengan lebih cepat.',
    meta: ['Hospitality sign', 'Akses masuk', 'Outdoor branding'],
  },
  {
    image: '/produksi/produksi8.jpeg',
    title: 'Billboard Tong Tji',
    category: 'Outdoor Billboard',
    subtitle: 'Media promosi outdoor dengan skala besar',
    note:
      'Billboard Tong Tji dengan visual produk yang dominan untuk memperkuat awareness merek dan menarik perhatian dari jalur lalu lintas utama.',
    meta: ['Billboard', 'Brand campaign', 'Outdoor media'],
  },
  {
    image: '/STAND JOB FAIR WINGS/Picture21.jpg',
    title: 'Stand Job Fair Wings',
    category: 'Event Booth Interior',
    subtitle: 'Booth promosi karier dengan tampilan interaktif',
    note:
      'Area booth Wings untuk job fair dengan komposisi branding merah yang kuat, display produk, dan informasi interaktif bagi pengunjung.',
    meta: ['Job fair', 'Interactive booth', 'Brand activation'],
  },
  {
    image: '/RAK APPAREL YAMAHA/Picture18.jpg',
    title: 'Rak Apparel Yamaha',
    category: 'Retail Display',
    subtitle: 'Display apparel dengan pencahayaan dekoratif',
    note:
      'Rak display apparel Yamaha dengan permainan lighting hangat dan dingin untuk memperkuat tampilan produk sekaligus identitas visual merek.',
    meta: ['Retail display', 'Lighting', 'Apparel rack'],
  },
  {
    image: '/BACKWALL CSO YOGYA MALL/Picture20.jpg',
    title: 'Backwall CSO Yogya Mall',
    category: 'Mall Interior',
    subtitle: 'Backwall fitting room dengan tampilan rapi',
    note:
      'Pengerjaan backwall dan area fitting room di Yogya Mall dengan pendekatan interior yang bersih, modern, dan fungsional untuk area retail.',
    meta: ['Backwall', 'Fitting room', 'Mall interior'],
  },
  {
    image: '/COUNTER KASSA YOGYA MALL/Picture22.jpg',
    title: 'Counter Kassa Yogya Mall',
    category: 'Retail Counter',
    subtitle: 'Counter transaksi untuk area komersial',
    note:
      'Area counter kassa dengan penyusunan modular yang fungsional untuk mendukung alur transaksi dan kenyamanan pada area retail modern.',
    meta: ['Counter kassa', 'Retail area', 'Functional build'],
  },
  {
    image: '/INTERIOR DEALER SUZUKI/Picture31.jpg',
    title: 'Interior Dealer Suzuki',
    category: 'Dealer Interior',
    subtitle: 'Area front desk dealer yang rapi dan profesional',
    note:
      'Area interior dealer Suzuki pada bagian front desk dengan tata elemen yang bersih dan representatif untuk kebutuhan pelayanan pelanggan di showroom.',
    meta: ['Dealer interior', 'Front desk', 'Customer service'],
  },
  {
    image: '/INTERIOR TOKO EMAS/Picture30.jpg',
    title: 'Interior Toko Emas',
    category: 'Luxury Interior',
    subtitle: 'Interior toko dengan nuansa elegan dan terang',
    note:
      'Interior toko emas dengan perpaduan material hangat, pencahayaan merata, dan display counter yang tertata untuk mendukung kesan premium.',
    meta: ['Luxury store', 'Interior fit-out', 'Display counter'],
  },
  {
    image: '/ISLAND COUNTER KOSMETIK/Picture29.jpg',
    title: 'Island Counter Kosmetik',
    category: 'Retail Island Display',
    subtitle: 'Display island untuk area kosmetik modern',
    note:
      'Island counter kosmetik dengan tata display terbuka, pencahayaan terang, dan elemen branding yang dirancang menarik untuk area retail modern.',
    meta: ['Cosmetic island', 'Retail display', 'Brand visibility'],
  },
  {
    image: '/LETTER STAINLESS BACKLIGHT/Picture33.jpg',
    title: 'Letter Stainless Backlight',
    category: 'Backlit Letter Sign',
    subtitle: 'Sign lettering dengan efek cahaya elegan',
    note:
      'Aplikasi letter stainless backlight untuk storefront yang menghadirkan tampilan identitas merek lebih mewah, bersih, dan kuat saat malam hari.',
    meta: ['Backlight letter', 'Storefront sign', 'Night branding'],
  },
  {
    image: '/NEONBOX INDOOR/Picture32.jpg',
    title: 'Neonbox Indoor',
    category: 'Indoor Light Sign',
    subtitle: 'Sign indoor dengan pencahayaan fokus',
    note:
      'Neonbox indoor dengan bentuk ringkas dan cahaya yang menonjol untuk membantu identitas brand tampil jelas di area interior.',
    meta: ['Neonbox', 'Indoor sign', 'Light branding'],
  },
  ...createSeriesItems({
    title: 'Stand Wings PRJ',
    category: 'Exhibition Structure',
    subtitle: 'Pengerjaan struktur booth untuk event skala besar',
    note:
      'Dokumentasi pembangunan stand Wings di Pekan Raya Jakarta yang menampilkan pekerjaan struktur utama sebagai dasar visual booth pameran.',
    meta: ['Booth event', 'Struktur stand', 'PRJ Jakarta'],
    images: [
      '/STAND WINGS PRJ (PEKAN RAYA JAKARTA)/1.jpg',
      '/STAND WINGS PRJ (PEKAN RAYA JAKARTA)/2.jpg',
      '/STAND WINGS PRJ (PEKAN RAYA JAKARTA)/3.jpg',
      '/STAND WINGS PRJ (PEKAN RAYA JAKARTA)/4.jpg',
      '/STAND WINGS PRJ (PEKAN RAYA JAKARTA)/5.jpg',
      '/STAND WINGS PRJ (PEKAN RAYA JAKARTA)/6.jpg',
    ],
  }),
  ...createSeriesItems({
    title: 'Showroom Yamaha',
    category: 'Showroom Interior',
    subtitle: 'Interior area customer dan display showroom',
    note:
      'Dokumentasi interior showroom Yamaha pada area customer service dan penempatan identitas brand di dalam ruang secara sederhana namun jelas.',
    meta: ['Showroom', 'Interior branding', 'Customer area'],
    images: [
      '/SHOWROOM YAMAHA/Picture11.jpg',
      '/SHOWROOM YAMAHA/Picture12.jpg',
      '/SHOWROOM YAMAHA/Picture13.jpg',
    ],
  }),
  ...createSeriesItems({
    title: 'Showroom Chery',
    category: 'Dealer Interior',
    subtitle: 'Interior showroom dengan visual produk premium',
    note:
      'Area showroom Chery dengan tata ruang modern, pencahayaan bersih, dan presentasi kendaraan yang terasa premium di area display utama.',
    meta: ['Dealer interior', 'Vehicle display', 'Premium layout'],
    images: [
      '/SHOWROOM CHERY/Picture14.jpg',
      '/SHOWROOM CHERY/Picture15.jpg',
      '/SHOWROOM CHERY/Picture16.jpg',
      '/SHOWROOM CHERY/Picture17.jpg',
    ],
  }),
  ...createSeriesItems({
    title: 'Island Counter Yo! Active',
    category: 'Island Display',
    subtitle: 'Counter island untuk branding retail di mall',
    note:
      'Island counter Yo! Active yang dirancang sebagai titik display mandiri di area mall dengan bentuk kompak dan identitas brand yang tetap menonjol.',
    meta: ['Island counter', 'Mall display', 'Retail branding'],
    images: [
      '/ISLAND COUNTER YO! ACTIVE YOGYA MALL/Picture24.jpg',
      '/ISLAND COUNTER YO! ACTIVE YOGYA MALL/Picture26.jpg',
      '/ISLAND COUNTER YO! ACTIVE YOGYA MALL/Picture27.jpg',
      '/ISLAND COUNTER YO! ACTIVE YOGYA MALL/Picture28.jpg',
    ],
  }),
]

const baseOfficeWorkshopGallery = [
  ...createSeriesItems({
    title: 'Tampak Depan',
    category: 'Office Exterior',
    subtitle: 'Area depan kantor yang menjadi wajah pertama perusahaan',
    note:
      'Tampilan depan kantor menegaskan identitas CV Karya Indah sekaligus memberi kesan rapi dan profesional sejak titik pertama kunjungan.',
    meta: ['Front office', 'Identitas perusahaan', 'Area kedatangan'],
    images: [
      '/Office & Workshop/TAMPAK DEPAN KI/Picture34.jpg',
      '/Office & Workshop/TAMPAK DEPAN KI/Picture35.jpg',
    ],
  }),
  {
    image: '/Office & Workshop/RECEPTIONIST/Picture36.jpg',
    title: 'Receptionist',
    category: 'Front Office',
    subtitle: 'Area penerima tamu yang rapi dan representatif',
    note:
      'Receptionist disiapkan sebagai titik sambut yang nyaman untuk tamu, klien, dan partner kerja sebelum masuk ke area diskusi maupun produksi.',
    meta: ['Penerima tamu', 'Front desk', 'Area sambut'],
  },
  {
    image: '/Office & Workshop/RUANG MEETING/Picture37.jpg',
    title: 'Ruang Meeting',
    category: 'Meeting Space',
    subtitle: 'Ruang diskusi untuk koordinasi proyek dan presentasi',
    note:
      'Ruang meeting mendukung kebutuhan presentasi, konsultasi, dan pembahasan proyek agar komunikasi dengan klien maupun tim berjalan lebih fokus.',
    meta: ['Koordinasi proyek', 'Presentasi', 'Diskusi klien'],
  },
  ...createSeriesItems({
    title: 'Ruang Admin',
    category: 'Administrative Area',
    subtitle: 'Pusat administrasi operasional yang tertata rapi',
    note:
      'Area admin membantu kelancaran dokumentasi proyek, pengelolaan dokumen, serta koordinasi internal agar proses kerja tetap terstruktur.',
    meta: ['Administrasi', 'Dokumen kerja', 'Operasional harian'],
    images: [
      '/Office & Workshop/RUANG ADMIN/Picture38.jpg',
      '/Office & Workshop/RUANG ADMIN/Picture39.jpg',
    ],
  }),
  {
    image: '/Office & Workshop/RUANG DIGITAL PRINTING/Picture40.jpg',
    title: 'Ruang Digital Printing',
    category: 'Production Support',
    subtitle: 'Area digital printing untuk kebutuhan visual promosi',
    note:
      'Ruang digital printing menjadi bagian penting untuk pengerjaan media cetak visual dengan alur kerja yang lebih cepat, rapi, dan terkontrol.',
    meta: ['Digital printing', 'Support produksi', 'Output visual'],
  },
  {
    image: '/Office & Workshop/RUANG DESIGN/Picture41.jpg',
    title: 'Ruang Design',
    category: 'Creative Workspace',
    subtitle: 'Ruang kerja visual untuk konsep dan final artwork',
    note:
      'Area design dipakai untuk pengembangan konsep visual, penyusunan artwork, serta sinkronisasi desain sebelum masuk tahap produksi.',
    meta: ['Artwork', 'Konsep visual', 'Creative room'],
  },
  {
    image: '/Office & Workshop/RUANG SABLON/Picture42.jpg',
    title: 'Ruang Sablon',
    category: 'Screen Printing Area',
    subtitle: 'Area sablon yang mendukung proses produksi awal perusahaan',
    note:
      'Ruang sablon merepresentasikan akar awal layanan CV Karya Indah dan tetap menjadi bagian penting untuk pengerjaan kebutuhan screen printing tertentu.',
    meta: ['Screen printing', 'Produksi awal', 'Teknik sablon'],
  },
  {
    image: '/Office & Workshop/WORKSHOP W.S/Picture45.jpg',
    title: 'Workshop Utama',
    category: 'Main Workshop',
    subtitle: 'Area kerja inti untuk pengerjaan struktural dan finishing',
    note:
      'Workshop utama mendukung berbagai kebutuhan pengerjaan konstruksi visual, perakitan komponen, dan proses finishing sebelum instalasi lapangan.',
    meta: ['Workshop utama', 'Perakitan', 'Finishing proyek'],
  },
  {
    image: '/Office & Workshop/WORKSHOP CAT/Picture47.jpg',
    title: 'Workshop Cat',
    category: 'Finishing Area',
    subtitle: 'Area pengecatan untuk hasil visual yang lebih presisi',
    note:
      'Workshop cat dipakai untuk menyempurnakan tampilan akhir elemen branding agar warna, lapisan, dan kualitas finishing lebih terjaga.',
    meta: ['Pengecatan', 'Finishing', 'Quality control'],
  },
  {
    image: '/Office & Workshop/WORKSHOP LAS/Picture48.jpg',
    title: 'Workshop Las',
    category: 'Metal Fabrication',
    subtitle: 'Area pengelasan untuk kebutuhan struktur dan rangka',
    note:
      'Workshop las menjadi titik penting untuk pengerjaan struktur logam, rangka signage, dan kebutuhan fabrikasi lain yang mendukung proyek lapangan.',
    meta: ['Pengelasan', 'Rangka besi', 'Fabrikasi'],
  },
  {
    image: '/Office & Workshop/WORKSHOP KAYU/Picture50.jpg',
    title: 'Workshop Kayu',
    category: 'Woodworking Area',
    subtitle: 'Pengerjaan elemen berbasis kayu untuk display dan interior',
    note:
      'Workshop kayu dipakai untuk kebutuhan display, interior, dan elemen custom dengan pengerjaan yang rapi sesuai spesifikasi proyek.',
    meta: ['Woodworking', 'Display custom', 'Interior build'],
  },
  {
    image: '/Office & Workshop/WORKSHOP KACA/Picture51.jpg',
    title: 'Workshop Kaca',
    category: 'Glass Handling',
    subtitle: 'Penanganan elemen kaca untuk kebutuhan visual dan interior',
    note:
      'Workshop kaca mendukung pengerjaan komponen yang membutuhkan material kaca sebagai bagian dari visual branding maupun interior komersial.',
    meta: ['Material kaca', 'Interior support', 'Visual detail'],
  },
  {
    image: '/Office & Workshop/GUDANG MATERIAL/Picture52.jpg',
    title: 'Gudang Material',
    category: 'Material Storage',
    subtitle: 'Penyimpanan bahan kerja untuk menjaga alur produksi',
    note:
      'Gudang material membantu pengelolaan bahan baku agar stok lebih tertata dan proses pengerjaan proyek berjalan lebih efisien.',
    meta: ['Stok bahan', 'Penyimpanan', 'Alur produksi'],
  },
  {
    image: '/Office & Workshop/GUDANG BARANG JADI/Picture53.jpg',
    title: 'Gudang Barang Jadi',
    category: 'Finished Goods Storage',
    subtitle: 'Area simpan hasil produksi sebelum pengiriman atau instalasi',
    note:
      'Gudang barang jadi dipakai untuk menata hasil produksi yang sudah selesai sebelum masuk proses distribusi, pengiriman, atau pemasangan di lokasi.',
    meta: ['Barang jadi', 'Persiapan kirim', 'Ready to install'],
  },
]

const baseInventoryShowcase = [
  ...createSeriesItems({
    title: 'Inventaris Mesin',
    category: 'Production Equipment',
    subtitle: 'Peralatan inti untuk mendukung proses produksi visual',
    note:
      'Dokumentasi inventaris mesin menampilkan kesiapan perangkat produksi CV Karya Indah untuk kebutuhan digital printing, finishing, dan pengerjaan signage yang lebih presisi.',
    meta: ['Digital printing', 'Finishing tools', 'Support signage'],
    images: [
      '/Inventaris Mesin/Picture54.jpg',
      '/Inventaris Mesin/Picture55.jpg',
      '/Inventaris Mesin/Picture56.jpg',
      '/Inventaris Mesin/Picture57.jpg',
      '/Inventaris Mesin/Picture58.jpg',
      '/Inventaris Mesin/Picture59.jpg',
    ],
  }),
  ...createSeriesItems({
    title: 'Inventaris Kendaraan',
    category: 'Operational Fleet',
    subtitle: 'Armada operasional untuk distribusi dan instalasi proyek',
    note:
      'Inventaris kendaraan memperlihatkan dukungan mobilitas lapangan yang membantu pengiriman material, distribusi hasil produksi, dan kebutuhan instalasi proyek secara lebih efisien.',
    meta: ['Armada operasional', 'Distribusi proyek', 'Instalasi lapangan'],
    images: [
      '/Iventaris Kendaraan/Picture60.jpg',
      '/Iventaris Kendaraan/Picture61.jpg',
      '/Iventaris Kendaraan/Picture62.jpg',
      '/Iventaris Kendaraan/Picture63.jpg',
      '/Iventaris Kendaraan/Picture64.jpg',
      '/Iventaris Kendaraan/Picture65.jpg',
    ],
  }),
]

const baseReviewShowcase = createSeriesItems({
  title: 'Review Pelanggan',
  category: 'Google Review',
  subtitle: 'Tangkapan kepercayaan yang dibangun dari hasil kerja nyata',
  note:
    'Dokumentasi review pelanggan ditampilkan sebagai bukti kepuasan klien terhadap kualitas hasil, ketepatan pengerjaan, dan komunikasi layanan CV Karya Indah yang terus dijaga.',
  meta: ['Google review', 'Kepercayaan klien', 'Masukan layanan'],
  images: [
    '/Review Pelanggan/1.png',
    '/Review Pelanggan/2.png',
    '/Review Pelanggan/3.png',
    '/Review Pelanggan/4.png',
    '/Review Pelanggan/5.png',
    '/Review Pelanggan/6.png',
    '/Review Pelanggan/7.png',
    '/Review Pelanggan/8.png',
    '/Review Pelanggan/9.png',
    '/Review Pelanggan/10.png',
    '/Review Pelanggan/11.png',
    '/Review Pelanggan/12.png',
  ],
})

function withIds(items) {
  return items.map((item, index) => ({
    ...item,
    id: String(index + 1).padStart(2, '0'),
  }))
}

export const productionShowcaseItems = withIds(baseProductionGallery)
export const officeWorkshopShowcaseItems = withIds(baseOfficeWorkshopGallery)
export const inventoryShowcaseItems = withIds(baseInventoryShowcase)
export const reviewShowcaseItems = withIds(baseReviewShowcase)
