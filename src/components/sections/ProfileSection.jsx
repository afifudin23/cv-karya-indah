import { useState } from 'react';
import PageHeroSlider from '../ui/PageHeroSlider';

import {
  FiCalendar,
  FiUser,
  FiMapPin,
  FiFileText,
  FiEye,
  FiTarget,
  FiShield,
  FiArrowLeft,
  FiArrowRight,
  FiPenTool,
  FiGrid,
  FiHome,
  FiTool,
  FiPhone,
  FiMail,
  FiBriefcase,
  FiTag,
} from 'react-icons/fi';
import ImageViewer from '../ui/ImageViewer';
import { Reveal, RevealStagger } from '../ui/Reveal';

const heroImages = [
  '/office_workshop/picture53.png',
  '/inventaris_mesin/picture56.png',
  '/inventaris_mesin/picture57.png',
];
const profileHighlights = [
  {
    icon: FiCalendar,
    label: 'Berdiri Resmi',
    value: '11 Desember 1992',
    detail: 'Lebih dari tiga dekade melayani kebutuhan branding dan konstruksi visual.',
  },
  {
    icon: FiMapPin,
    label: 'Lokasi',
    value: 'Kota Tegal',
    detail: 'Basis operasional yang mendukung layanan regional dan proyek skala luas.',
  },
];

const serviceCards = [
  {
    icon: FiPenTool,
    title: 'Exterior Goods',
    desc: 'Signage fasad, billboard, neon box, dan huruf timbul untuk identitas visual luar ruangan.',
  },
  {
    icon: FiGrid,
    title: 'Interior Goods',
    desc: 'Wall grafis, display point-of-sale, dan elemen dekorasi interior branded untuk ruang bisnis.',
  },
  {
    icon: FiHome,
    title: 'Digital Printing',
    desc: 'Cetak banner, spanduk, stiker, dan berbagai media cetak format besar resolusi tinggi.',
  },
  {
    icon: FiTool,
    title: 'Konstruksi',
    desc: 'Konstruksi rangka, pemasangan instalasi, hingga finishing proyek visual skala besar.',
  },
];

const servicePillars = ['Advertising', 'Signage', 'Interior', 'Konstruksi'];

const legalityItems = [
  {
    id: '01',
    image: '/legalitas/legalitas1.jpeg',
    eyebrow: 'OSS RBA',
    title: 'Sertifikat Standar',
    subtitle: 'Perizinan berusaha berbasis risiko',
    summary:
      'Dokumen utama OSS yang menegaskan identitas usaha CV Karya Indah, berikut NIB, alamat usaha, dan klasifikasi kegiatan utama.',
    meta: ['NIB 9120207830213', 'Terbit 20 Agustus 2024', 'KBLI 41019'],
  },
  {
    id: '02',
    image: '/legalitas/legalitas2.jpeg',
    eyebrow: 'Perpajakan',
    title: 'Surat Keterangan Terdaftar Pajak',
    subtitle: 'Administrasi NPWP badan usaha',
    summary:
      'Dokumen perpajakan yang memuat NPWP badan, status administrasi, serta rujukan kantor pajak terdaftar untuk perusahaan.',
    meta: ['NPWP 01.527.761.9-501.000', 'KPP Pratama Tegal', '8 Agustus 2024'],
  },
  {
    id: '03',
    image: '/legalitas/legalitas3.jpeg',
    eyebrow: 'Lampiran OSS',
    title: 'Lampiran KBLI dan Persyaratan',
    subtitle: 'Ruang lingkup izin usaha',
    summary:
      'Lampiran yang merangkum kode KBLI, klasifikasi risiko, serta persyaratan dan kewajiban usaha terkait sertifikat standar.',
    meta: ['Lampiran NIB', 'KBLI 41019', 'Persyaratan usaha'],
  },
];

export default function ProfileSection({ companyData }) {
  const [lightboxImage, setLightboxImage] = useState(null);

  const companyRows = [
    { icon: FiTag, label: 'Nama Perusahaan', value: companyData.name },
    { icon: FiUser, label: 'Direktur', value: companyData.director },
    { icon: FiMapPin, label: 'Alamat', value: companyData.address },
    { icon: FiPhone, label: 'No. Telepon', value: companyData.phones.join(', ') },
    { icon: FiMail, label: 'E-mail', value: companyData.email },
    { icon: FiBriefcase, label: 'Jenis Usaha', value: companyData.businessType },
  ];

  const highlights = [
    ...profileHighlights,
    {
      icon: FiUser,
      label: 'Direktur',
      value: companyData.director,
      detail: 'Kepemimpinan yang menjaga kualitas produksi, layanan, dan relasi klien.',
    },
    {
      icon: FiFileText,
      label: 'Legalitas',
      value: `${companyData.legalities.length} Dokumen Utama`,
      detail: 'Dokumen inti perusahaan tersedia untuk mendukung kerja sama profesional.',
    },
  ];

  return (
    <section id="profil">
      {/* ── Hero full-bleed ── */}
      <div className="relative flex items-center justify-center overflow-hidden pt-[var(--header-height)] min-h-[100svh]">
        <PageHeroSlider images={heroImages} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center text-white sm:px-12">
          <h1 className="font-bold text-[2.4rem] leading-tight sm:text-[3.5rem]">
            Mitra Visual Bisnis
            <br />
            Anda Sejak 1992
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-white/80">
            CV Karya Indah adalah perusahaan periklanan dan konstruksi visual yang telah melayani berbagai klien
            korporat di seluruh Indonesia dengan standar kualitas tinggi.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {servicePillars.map((p) => (
              <span
                key={p}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Highlight cards ── */}
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealStagger as="div" className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4" stagger={70}>
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="rounded-2xl bg-[var(--color-primary-50)] p-7 transition duration-300 hover:-translate-y-1"
                >
                  <div className="mb-6">
                    <Icon className="text-[2.4rem] text-[var(--color-primary-600)] stroke-[1.4]" />
                  </div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)] mb-1">
                    {item.label}
                  </p>
                  <p className="font-bold text-[1.05rem] text-gray-900 mb-2">{item.value}</p>
                  <p className="text-[0.87rem] leading-6 text-gray-500">{item.detail}</p>
                </div>
              );
            })}
          </RevealStagger>
        </div>
      </div>

      {/* ── Siapa Kami ── */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-stretch">
            <Reveal as="div" className="flex flex-col justify-center">
              <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                Tentang Perusahaan
              </p>
              <h2 className="mb-6 font-bold text-[2rem] sm:text-[2.5rem] leading-tight text-gray-900">Siapa Kami</h2>
              <div className="space-y-4 text-[0.97rem] leading-7 text-gray-600 text-justify">
                <p>{companyData.description}</p>
                <p>{companyData.descriptionLong}</p>
              </div>
            </Reveal>

            <RevealStagger as="div" className="grid grid-cols-2 grid-rows-2 gap-4 h-full" stagger={70}>
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-[var(--color-primary-50)] p-4 text-center transition duration-300 hover:-translate-y-1 h-full sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-5 sm:text-left"
                  >
                    <div className="shrink-0">
                      <Icon className="text-[1.8rem] sm:text-[2.2rem] text-[var(--color-primary-600)] stroke-[1.4]" />
                    </div>
                    <h3 className="font-bold text-[0.82rem] sm:text-[1.05rem] text-gray-900 leading-snug">
                      {card.title}
                    </h3>
                  </div>
                );
              })}
            </RevealStagger>
          </div>
        </div>
      </div>

      {/* ── Visi & Misi ── */}
      <div className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="mx-auto max-w-2xl text-center mb-14">
            <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
              Arah Perusahaan
            </p>
            <h2 className="font-bold text-[2rem] sm:text-[2.5rem] leading-tight text-gray-900">Visi & Misi</h2>
            <p className="mt-4 text-[0.97rem] leading-relaxed text-gray-500">
              Landasan nilai dan tujuan yang mengarahkan seluruh aktivitas CV Karya Indah.
            </p>
          </Reveal>

          <RevealStagger as="div" className="grid gap-10 md:grid-cols-2" stagger={80}>
            {/* Visi */}
            <div className="flex flex-col items-center text-center px-4">
              <img src="/vector/image.png" alt="" aria-hidden="true" className="mb-8 h-56 w-auto object-contain" />
              <p className="text-[0.82rem] font-semibold text-gray-500 mb-1">Visi Perusahaan</p>
              <h3 className="font-extrabold text-[3rem] sm:text-[3.5rem] leading-none text-[var(--color-primary-600)] mb-5 uppercase tracking-tight">
                Visi
              </h3>
              <p className="text-[0.97rem] leading-7 text-gray-600 max-w-md">{companyData.vision}</p>
            </div>

            {/* Misi */}
            <div className="flex flex-col items-center text-center px-4">
              <img
                src="/vector/image copy 2.png"
                alt=""
                aria-hidden="true"
                className="mb-8 h-56 w-auto object-contain"
              />
              <p className="text-[0.82rem] font-semibold text-gray-500 mb-1">Misi Perusahaan</p>
              <h3 className="font-extrabold text-[3rem] sm:text-[3.5rem] leading-none text-[var(--color-primary-600)] mb-5 uppercase tracking-tight">
                Misi
              </h3>
              <p className="text-[0.97rem] leading-7 text-gray-600 max-w-md">{companyData.mission}</p>
            </div>
          </RevealStagger>
        </div>
      </div>

      {/* ── Informasi Perusahaan ── */}
      <div className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="mb-8 text-center">
            <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
              Detail Perusahaan
            </p>
            <h2 className="font-bold text-[2rem] sm:text-[2.4rem] leading-tight text-gray-900">Informasi Perusahaan</h2>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Data Perusahaan — icon cards */}
            <RevealStagger as="div" stagger={50}>
              <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gray-400">
                Data Perusahaan
              </p>
              <div className="space-y-3">
                {companyRows.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-2xl bg-[var(--color-primary-50)] px-5 py-4"
                    >
                      <div className="mt-0.5 shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[var(--color-primary-600)] shadow-sm">
                        <Icon className="text-[1.1rem] stroke-[1.5]" />
                      </div>
                      <div>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-[0.95rem] font-semibold text-gray-900 leading-snug">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </RevealStagger>

            {/* Legalitas + K3 */}
            <div className="flex flex-col gap-4">
              <RevealStagger as="div" stagger={60}>
                <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-gray-400">
                  Legalitas Perusahaan
                </p>
                <div className="space-y-3">
                  {companyData.legalities.map((item, index) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white px-5 py-5 shadow-sm"
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-600)] text-[0.75rem] font-bold text-white">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gray-400 mb-0.5">
                          {item.label}
                        </p>
                        <p className="break-words text-[0.95rem] font-semibold text-gray-900">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealStagger>

              {/* K3 — solid teal card */}
              <Reveal as="div" delay={80}>
                <div className="rounded-2xl bg-[var(--color-primary-600)] p-7 text-white">
                  <FiShield className="mb-4 text-[2rem] stroke-[1.4] opacity-90" />
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/60 mb-1">
                    Kebijakan K3
                  </p>
                  <h3 className="font-bold text-[1.1rem] mb-3">Keselamatan & Kesehatan Kerja</h3>
                  <p className="text-[0.9rem] leading-7 text-white/80">
                    CV Karya Indah menerapkan standar K3 secara disiplin pada setiap tahapan produksi, pengiriman,
                    hingga instalasi di lapangan.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* ── Struktur Organisasi ── */}
      <div className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal as="div" className="mb-8 text-center">
            <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
              Organisasi
            </p>
            <h2 className="font-bold text-[2rem] sm:text-[2.4rem] leading-tight text-gray-900">Struktur Organisasi</h2>
            <p className="mt-3 mx-auto max-w-xl text-[0.97rem] text-gray-500">
              Susunan jabatan dan pembagian peran yang memastikan koordinasi berjalan efektif di setiap lini.
            </p>
          </Reveal>

          <Reveal as="div" delay={60}>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <button
                type="button"
                onClick={() => setLightboxImage({ src: '/legalitas/struktur.jpeg', alt: 'Struktur organisasi CV Karya Indah' })}
                className="flex w-full justify-center overflow-hidden rounded-xl bg-slate-50 p-4 transition hover:shadow-md"
              >
                <img
                  src="/legalitas/struktur.jpeg"
                  alt="Struktur organisasi CV Karya Indah"
                  className="h-auto max-h-[480px] w-auto rounded-lg object-contain cursor-zoom-in"
                />
              </button>
              <p className="mt-3 text-center text-[0.75rem] text-gray-400">Klik gambar untuk memperbesar</p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Legalitas Showcase ── */}
      <div className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal as="div" delay={60}>
            <LegalitiesShowcase items={legalityItems} onOpenImage={setLightboxImage} />
          </Reveal>
        </div>
      </div>

      <ImageViewer
        key={lightboxImage?.src ?? 'lightbox'}
        image={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </section>
  );
}

function LegalitiesShowcase({ items, onOpenImage }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];
  const lightboxItems = items.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    eyebrow: item.eyebrow,
  }));

  return (
    <div>
      <div className="mb-8 text-center">
        <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
          Dokumen Legal
        </p>
        <h2 className="mb-2 font-bold text-[2rem] sm:text-[2.4rem] leading-tight text-gray-900">Legalitas Perusahaan</h2>
        <p className="text-[0.97rem] text-gray-500">
          Dokumen legal utama yang mendasari operasional dan kepercayaan mitra kerja.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2 xl:items-start">
        {/* Image preview */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[0.85rem] font-semibold text-gray-700">{activeItem.title}</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i - 1 + items.length) % items.length)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-blue-300 hover:text-[var(--color-primary-600)]"
                aria-label="Sebelumnya"
              >
                <FiArrowLeft className="text-[0.85rem]" />
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((i) => (i + 1) % items.length)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition hover:border-blue-300 hover:text-[var(--color-primary-600)]"
                aria-label="Berikutnya"
              >
                <FiArrowRight className="text-[0.85rem]" />
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenImage({ items: lightboxItems, index: activeIndex })}
            className="flex w-full justify-center overflow-hidden rounded-xl border border-gray-100 bg-slate-50 p-4 transition hover:shadow-md"
          >
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="h-auto max-h-[400px] w-auto rounded-lg object-contain"
            />
          </button>
          <p className="mt-3 text-center text-[0.75rem] text-gray-400">Klik gambar untuk memperbesar</p>
        </div>

        {/* Detail + selector */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-[var(--color-primary-50)] p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                  {activeItem.eyebrow}
                </p>
                <h4 className="mt-1 font-bold text-[1.1rem] text-gray-900">{activeItem.title}</h4>
                <p className="mt-0.5 text-[0.88rem] font-medium text-gray-500">{activeItem.subtitle}</p>
              </div>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-600)] text-[0.8rem] font-bold text-white">
                {activeItem.id}
              </span>
            </div>
            <p className="mb-4 text-[0.92rem] leading-7 text-gray-600">{activeItem.summary}</p>
            <div className="flex flex-wrap gap-2">
              {activeItem.meta.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-blue-100 bg-white px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-700)]"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                  index === activeIndex
                    ? 'border-[var(--color-primary-300)] bg-[var(--color-primary-50)] shadow-sm'
                    : 'border-gray-200 bg-white hover:border-blue-200 hover:bg-slate-50'
                }`}
              >
                <span
                  className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.7rem] font-bold ${
                    index === activeIndex ? 'bg-[var(--color-primary-600)] text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {item.id}
                </span>
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                    {item.eyebrow}
                  </p>
                  <p className="mt-0.5 text-[0.88rem] font-semibold text-gray-800">{item.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
