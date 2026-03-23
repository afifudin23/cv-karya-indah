import { useState } from 'react'
import ImageViewer from '../ui/ImageViewer'
import SectionShell from '../ui/SectionShell'

const productionGallery = [
  {
    id: '01',
    image: '/produksi/produksi.jpeg',
    title: 'Shopsign Yamaha',
    category: 'Exterior Branding',
    subtitle: 'Fasad dealer dengan identitas merek yang kuat',
    note: 'Fasad dealer dengan branding besar dan penataan identitas visual yang tegas, rapi, dan langsung terbaca dari area depan bangunan.',
    meta: ['Branding fasad', 'Dealer otomotif', 'Visual besar'],
  },
  {
    id: '02',
    image: '/produksi/produksi2.jpeg',
    title: 'Showroom Suzuki',
    category: 'Showroom Facade',
    subtitle: 'Finishing showroom dengan garis visual modern',
    note: 'Finishing fasad showroom dengan garis bentuk modern, komposisi panel yang bersih, dan identitas merek yang tetap dominan.',
    meta: ['Showroom facade', 'Panel ACP', 'Brand clean'],
  },
  {
    id: '03',
    image: '/produksi/produksi3.jpeg',
    title: 'Piaggio & Vespa',
    category: 'Night Signage',
    subtitle: 'Signage malam dengan nuansa premium',
    note: 'Signage malam hari dengan fokus pada pencahayaan logo dan tampilan premium sehingga identitas brand tetap kuat saat malam.',
    meta: ['Night signage', 'Lighting logo', 'Premium look'],
  },
  {
    id: '04',
    image: '/produksi/produksi4.jpeg',
    title: 'Dealer Chery',
    category: 'Polesign & Facade',
    subtitle: 'Kombinasi polesign dan fasad utama',
    note: 'Kombinasi polesign dan fasad utama yang kuat untuk meningkatkan visibilitas merek dari jarak jauh, terutama pada malam hari.',
    meta: ['Polesign', 'Night visibility', 'Dealer branding'],
  },
  {
    id: '05',
    image: '/produksi/produksi5.jpeg',
    title: 'Toko Obat Wali',
    category: 'Retail Front Sign',
    subtitle: 'Front signage retail yang mudah dikenali',
    note: 'Front signage retail dengan komposisi tipografi besar dan fasad yang mencolok supaya toko mudah dikenali dari arah jalan utama.',
    meta: ['Retail sign', 'Tipografi besar', 'Street visibility'],
  },
  {
    id: '06',
    image: '/produksi/produksi6.jpeg',
    title: 'Polesign BSI',
    category: 'Directional Sign',
    subtitle: 'Penanda lokasi dan petunjuk arah',
    note: 'Contoh polesign yang berfungsi untuk identitas lokasi dan petunjuk arah dengan komposisi visual yang tetap bersih dan jelas.',
    meta: ['Directional sign', 'Outdoor sign', 'Lokasi & arah'],
  },
]

export default function ProductionSection({ portfolioGroups }) {
  const [activeImage, setActiveImage] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = productionGallery[activeIndex]
  const previewItems = productionGallery.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    eyebrow: item.category,
  }))
  const openPreview = (index) => {
    setActiveImage({
      items: previewItems,
      index,
    })
  }
  const showPrevious = () => setActiveIndex((current) => (current - 1 + productionGallery.length) % productionGallery.length)
  const showNext = () => setActiveIndex((current) => (current + 1) % productionGallery.length)

  return (
    <>
      <SectionShell
        id="produksi"
        tone="muted"
        paddingClassName="pb-20 pt-28 sm:pt-32"
        eyebrow="Portofolio"
        title="Hasil Produksi"
        intro="Dokumentasi proyek produksi ditampilkan ulang memakai foto asli perusahaan supaya halaman produksi terasa lebih kuat, relevan, dan meyakinkan."
      >
        <div className="grid gap-6 sm:gap-8 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          <div className="rounded-[1.95rem] border border-[rgba(210,228,238,0.96)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,249,252,0.95))] p-3 shadow-[0_22px_56px_rgba(72,155,214,0.11)] sm:rounded-[2.2rem] sm:p-5">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--teal-deep)]">Preview Produksi</p>
                <p className="mt-2 text-base font-semibold text-[var(--ink-strong)] sm:text-lg">{activeItem.title}</p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(186,214,228,0.9)] bg-white text-[var(--teal-deep)] transition hover:border-[var(--teal)] hover:text-[var(--hero)]"
                  aria-label="Produksi sebelumnya"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(186,214,228,0.9)] bg-white text-[var(--teal-deep)] transition hover:border-[var(--teal)] hover:text-[var(--hero)]"
                  aria-label="Produksi berikutnya"
                >
                  &rarr;
                </button>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/90 bg-[radial-gradient(circle_at_top,rgba(88,182,197,0.12),rgba(255,255,255,0.96)_34%,rgba(240,247,250,0.94)_100%)] p-2.5 sm:rounded-[1.8rem] sm:p-4">
              <button
                type="button"
                onClick={() => openPreview(activeIndex)}
                className="flex w-full justify-center overflow-hidden rounded-[1.2rem] bg-white px-2 py-2 shadow-[0_18px_42px_rgba(72,155,214,0.08)] transition hover:shadow-[0_22px_48px_rgba(72,155,214,0.14)] sm:rounded-[1.4rem] sm:px-4 sm:py-4"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="h-auto max-h-[340px] w-auto rounded-[0.9rem] object-contain sm:max-h-[500px] sm:rounded-[1rem]"
                />
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[1.95rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,249,252,0.94))] p-5 shadow-[0_24px_60px_rgba(72,155,214,0.1)] sm:rounded-[2.15rem] sm:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--teal-deep)]">{activeItem.category}</p>
                  <h3 className="mt-3 font-display text-[1.65rem] uppercase leading-[0.94] text-[var(--ink-strong)] sm:text-[2.6rem]">
                    {activeItem.title}
                  </h3>
                  <p className="mt-3 text-base font-medium text-slate-700 sm:text-lg">{activeItem.subtitle}</p>
                </div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--hero)] text-sm font-semibold text-white sm:h-12 sm:w-12">
                  {activeItem.id}
                </span>
              </div>

              <p className="mt-5 text-[0.98rem] leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
                {activeItem.note}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {activeItem.meta.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[rgba(190,219,231,0.95)] bg-[rgba(88,182,197,0.08)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--teal-deep)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {productionGallery.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-[1.35rem] border px-4 py-3.5 text-left transition sm:rounded-[1.5rem] sm:py-4 ${
                    index === activeIndex
                      ? 'border-[var(--teal)] bg-[linear-gradient(180deg,rgba(232,246,250,0.96),rgba(255,255,255,0.98))] shadow-[0_18px_40px_rgba(72,155,214,0.12)]'
                      : 'border-[rgba(210,228,238,0.88)] bg-white/86 hover:border-[rgba(88,182,197,0.4)] hover:bg-[rgba(248,252,254,0.98)]'
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--teal-deep)]">Produksi {item.id}</p>
                  <p className="mt-3 text-base font-semibold leading-6 text-[var(--ink-strong)]">{item.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {portfolioGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[2rem] border border-[rgba(24,35,44,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,249,252,0.94))] p-5 shadow-[0_18px_44px_rgba(72,155,214,0.1)] sm:p-6"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="h-[4px] w-14 rounded-full bg-[var(--teal)]" />
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--teal-deep)]">{group.title}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
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

      <ImageViewer
        key={activeImage?.index ?? 'production-viewer'}
        image={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </>
  )
}
