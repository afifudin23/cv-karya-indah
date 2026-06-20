import ShowcaseGallery from '../ui/ShowcaseGallery';
import PageHeroSlider from '../ui/PageHeroSlider';
import { productionShowcaseItems } from '../../data/showcaseData';
import { Reveal } from '../ui/Reveal';

const heroImages = ['/produksi/produksi32.png'];

export default function ProductionSection() {
  return (
    <section id="produksi">
      {/* â”€â”€ Hero full-bleed â”€â”€ */}
      <div className="relative flex items-center justify-center overflow-hidden pt-[var(--header-height)] min-h-[100svh]">
        <PageHeroSlider images={heroImages} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center text-white sm:px-12">
          <h1 className="font-bold text-[2.4rem] leading-tight sm:text-[3.5rem]">
            Karya Nyata
            <br />
            yang Berbicara
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-relaxed text-white/80">
            Dokumentasi proyek signage, branding visual, dan konstruksi yang telah kami kerjakan untuk berbagai klien
            korporat di Indonesia.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {['Exterior Goods', 'Interior Goods', 'Digital Printing', 'Konstruksi'].map((p) => (
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

      {/* â”€â”€ Content â”€â”€ */}
      <div className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal as="div">
            <div className="mb-12 sm:mb-16 mx-auto max-w-2xl text-center">
              <p className="mb-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-600)]">
                Produksi
              </p>
              <h2 className="font-bold text-[2rem] sm:text-[2.5rem] leading-tight text-gray-900">Hasil Produksi</h2>
              <p className="mt-4 text-[0.97rem] leading-relaxed text-gray-500">
                Dokumentasi proyek produksi yang telah kami kerjakan â€” mulai dari signage, interior, cetak digital,
                hingga konstruksi visual skala besar.
              </p>
            </div>
          </Reveal>
          <Reveal as="div" delay={90}>
            <div className="mx-auto max-w-4xl">
              <ShowcaseGallery
                items={productionShowcaseItems}
                showcaseEyebrow="Production Showcase"
                showcaseIntro="Dokumentasi proyek visual branding dan signage yang dipilih untuk ditampilkan lebih fokus."
                counterLabel="Produksi"
                metaLabel="Project No."
                imageClassName="max-h-[320px] sm:max-h-[420px] lg:max-h-[320px] xl:max-h-[360px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

